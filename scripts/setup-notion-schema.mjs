#!/usr/bin/env node
/**
 * Configure the Notion customer-interest database schema.
 *
 * Usage:
 *   node --env-file=.env scripts/setup-notion-schema.mjs
 *
 * Idempotent — re-running adds any missing properties without disturbing
 * data or existing columns. The "Name" title column stays as-is.
 */

const { NOTION_API_KEY, NOTION_CUSTOMER_DATABASE_ID } = process.env;

if (!NOTION_API_KEY || !NOTION_CUSTOMER_DATABASE_ID) {
  console.error('Missing NOTION_API_KEY or NOTION_CUSTOMER_DATABASE_ID in env.');
  console.error('Run with: node --env-file=.env scripts/setup-notion-schema.mjs');
  process.exit(1);
}

const NOTION_VERSION = '2022-06-28';
const API_BASE = 'https://api.notion.com/v1';

/** Properties we want the database to have — values are Notion property schema objects. */
const desiredProperties = {
  Email: { email: {} },
  Phone: { phone_number: {} },
  Location: { rich_text: {} },
  Goals: { rich_text: {} },
  Experience: { rich_text: {} },
  Status: {
    select: {
      options: [
        { name: 'New', color: 'yellow' },
        { name: 'Reviewing', color: 'blue' },
        { name: 'Approved', color: 'green' },
        { name: 'Waitlisted', color: 'gray' },
        { name: 'Declined', color: 'red' },
      ],
    },
  },
  Submitted: { created_time: {} },
};

const headers = {
  Authorization: `Bearer ${NOTION_API_KEY}`,
  'Notion-Version': NOTION_VERSION,
  'Content-Type': 'application/json',
};

const getDatabase = async () => {
  const res = await fetch(`${API_BASE}/databases/${NOTION_CUSTOMER_DATABASE_ID}`, { headers });
  if (!res.ok) throw new Error(`GET database failed: ${res.status} ${await res.text()}`);
  return res.json();
};

const patchDatabase = async (properties) => {
  const res = await fetch(`${API_BASE}/databases/${NOTION_CUSTOMER_DATABASE_ID}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ properties }),
  });
  if (!res.ok) throw new Error(`PATCH database failed: ${res.status} ${await res.text()}`);
  return res.json();
};

const main = async () => {
  console.log('Fetching current database schema…');
  const db = await getDatabase();
  const title = (db.title || []).map((t) => t.plain_text).join('');
  console.log(`  Database: ${JSON.stringify(title)}\n`);

  const existing = db.properties || {};
  console.log('Existing properties:');
  for (const [name, prop] of Object.entries(existing)) {
    console.log(`  - ${name}: ${prop.type}`);
  }
  console.log('');

  const toAdd = {};
  for (const [name, schema] of Object.entries(desiredProperties)) {
    if (!existing[name]) {
      toAdd[name] = schema;
    }
  }

  if (Object.keys(toAdd).length === 0) {
    console.log('All desired properties already present — nothing to do. ✅');
    return;
  }

  console.log(`Adding ${Object.keys(toAdd).length} missing properties:`);
  for (const name of Object.keys(toAdd)) {
    console.log(`  + ${name}`);
  }
  console.log('');

  await patchDatabase(toAdd);
  console.log('Schema updated. ✅');
};

main().catch((err) => {
  console.error('FAILED:', err.message);
  process.exit(1);
});
