import logo from '../../imports/nwprt-logo-blue.jpeg';

export function Header() {
  return (
    <header className="bg-nwprt-navy py-4 px-6 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <img
          src={logo}
          alt="NWPRT"
          className="h-6 md:h-8"
        />
      </div>
    </header>
  );
}
