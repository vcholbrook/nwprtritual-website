import { Link } from 'react-router';
import logo from '../../imports/nwprt-logo-navy.png';

export function Footer() {
  return (
    <footer className="bg-nwprt-navy text-nwprt-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="text-center">
            <Link to="/">
              <img
                src={logo}
                alt="NWPRT"
                className="w-28 md:w-32 opacity-70 mb-2 mx-auto"
              />
            </Link>
            <div className="accent-italic text-2xl md:text-3xl text-nwprt-cream/90 mb-3">Ritual</div>
            <p className="accent-italic text-xs md:text-sm text-nwprt-cream/70 leading-relaxed max-w-xs mx-auto">
              Where Newport meets happiness, health, and longevity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h4 className="caption text-nwprt-yellow mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-nwprt-cream/70 hover:text-nwprt-yellow transition-colors">
                  About the Retreat
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-nwprt-cream/70 hover:text-nwprt-yellow transition-colors">
                  The Schedule
                </Link>
              </li>
              <li>
                <Link to="/science" className="text-nwprt-cream/70 hover:text-nwprt-yellow transition-colors">
                  The Science
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-nwprt-cream/70 hover:text-nwprt-yellow transition-colors">
                  Investment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h4 className="caption text-nwprt-yellow mb-4">Connect</h4>
            <div className="space-y-3">
              <p className="text-sm text-nwprt-cream/70">Newport Beach, California</p>
              <a
                href="mailto:ritual@gethalohealth.com"
                className="text-sm text-nwprt-cream/70 hover:text-nwprt-yellow transition-colors block"
              >
                ritual@gethalohealth.com
              </a>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openApplication'))}
                className="bg-nwprt-yellow text-nwprt-navy caption px-6 py-3 tracking-[0.2em] hover:bg-nwprt-cream transition-colors duration-300 inline-block"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-nwprt-cream/20 text-center text-xs text-nwprt-cream/50">
          <p>&copy; {new Date().getFullYear()} NWPRT Ritual. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
