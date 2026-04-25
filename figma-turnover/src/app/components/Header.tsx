import { Link } from 'react-router';
import logo from '../../imports/nwprt-logo-blue.jpeg';

export function Header() {
  return (
    <header className="bg-nwprt-navy py-4 px-6 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="NWPRT"
            className="h-6 md:h-8"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-sm text-nwprt-cream/80 hover:text-nwprt-yellow transition-colors">
            About the Retreat
          </Link>
          <Link to="/schedule" className="text-sm text-nwprt-cream/80 hover:text-nwprt-yellow transition-colors">
            The Schedule
          </Link>
          <Link to="/science" className="text-sm text-nwprt-cream/80 hover:text-nwprt-yellow transition-colors">
            The Science
          </Link>
          <Link to="/investment" className="text-sm text-nwprt-cream/80 hover:text-nwprt-yellow transition-colors">
            Investment
          </Link>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openApplication'))}
            className="bg-nwprt-yellow text-nwprt-navy caption px-6 py-3 tracking-[0.2em] hover:bg-nwprt-cream transition-colors duration-300"
          >
            Apply Now
          </button>
        </nav>
      </div>
    </header>
  );
}
