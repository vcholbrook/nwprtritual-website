import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { WhatIsRitual } from './components/WhatIsRitual';
import { DeepDive } from './components/DeepDive';
import { Agenda } from './components/Agenda';
import { Takeaway } from './components/Takeaway';
import { Brands } from './components/Brands';
import { WhyNewport } from './components/WhyNewport';
import { Investment } from './components/Investment';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhatIsRitual />
        <Experience />
        <DeepDive />
        <Agenda />
        <Takeaway />
        <Brands />
        <WhyNewport />
        <Investment />
        <FinalCTA />
      </main>
    </div>
  );
}
