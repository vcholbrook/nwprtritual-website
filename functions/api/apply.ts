/**
 * POST /api/apply
 *
 * Receives the application form payload, validates it, and creates a row in
 * the NWPRT Ritual Customer Interest Notion database.
 *
 * Env (set via wrangler pages secret put):
 *   NOTION_API_KEY              — Notion integration token
 *   NOTION_CUSTOMER_DATABASE_ID — target database ID
 *
 * Future: when SLACK_APPLICATIONS_WEBHOOK is set, fan out a notification
 * to the channel from the same handler.
 */

interface Env {
  NOTION_API_KEY: string;
  NOTION_CUSTOMER_DATABASE_ID: string;
  SLACK_APPLICATIONS_WEBHOOK?: string;
}

interface ApplicationPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  goals: string;
  experience: string;
}

const NOTION_VERSION = '2022-06-28';

const REQUIRED_FIELDS: (keyof ApplicationPayload)[] = [
  'firstName',
  'lastName',
  'email',
  'phone',
  'location',
  'goals',
  'experience',
];

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const richText = (s: string) => ({
  rich_text: [{ type: 'text', text: { content: s.slice(0, 2000) } }],
});

const title = (s: string) => ({
  title: [{ type: 'text', text: { content: s.slice(0, 200) } }],
});

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.NOTION_API_KEY || !env.NOTION_CUSTOMER_DATABASE_ID) {
    // Fail loud server-side so we can spot a misconfigured deploy quickly.
    console.error('Missing NOTION_API_KEY or NOTION_CUSTOMER_DATABASE_ID env');
    return json(500, { ok: false, error: 'Server misconfigured.' });
  }

  let payload: Partial<ApplicationPayload>;
  try {
    payload = await request.json();
  } catch {
    return json(400, { ok: false, error: 'Body must be valid JSON.' });
  }

  const missing = REQUIRED_FIELDS.filter((f) => !payload[f] || !String(payload[f]).trim());
  if (missing.length > 0) {
    return json(400, { ok: false, error: `Missing fields: ${missing.join(', ')}` });
  }

  const data = payload as ApplicationPayload;
  const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`.trim();

  const notionBody = {
    parent: { database_id: env.NOTION_CUSTOMER_DATABASE_ID },
    properties: {
      Name: title(fullName),
      Email: { email: data.email.trim() },
      Phone: { phone_number: data.phone.trim() },
      Location: richText(data.location.trim()),
      Goals: richText(data.goals.trim()),
      Experience: richText(data.experience.trim()),
      Status: { select: { name: 'New' } },
    },
  };

  const notionRes = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.NOTION_API_KEY}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notionBody),
  });

  if (!notionRes.ok) {
    const detail = await notionRes.text();
    console.error('Notion API error', notionRes.status, detail);
    return json(502, { ok: false, error: 'Could not save your application — please try again.' });
  }

  // Optional Slack fan-out, fire-and-forget so a Slack outage never blocks
  // the user-facing success response.
  if (env.SLACK_APPLICATIONS_WEBHOOK) {
    const slackText =
      `*New NWPRT Ritual application*\n` +
      `*${fullName}* — ${data.email}\n` +
      `${data.location} · ${data.phone}\n\n` +
      `*Goals:* ${data.goals}\n` +
      `*Prior experience:* ${data.experience}`;
    fetch(env.SLACK_APPLICATIONS_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: slackText }),
    }).catch((err) => console.error('Slack webhook failed (non-fatal)', err));
  }

  return json(200, { ok: true });
};
