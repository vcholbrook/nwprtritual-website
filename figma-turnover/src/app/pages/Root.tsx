import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ApplicationModal } from '../components/ApplicationModal';

export function Root() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ApplicationModal />
    </div>
  );
}
