import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { InvestmentPage } from './pages/InvestmentPage';
import { SchedulePage } from './pages/SchedulePage';
import { SciencePage } from './pages/SciencePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: AboutPage },
      { path: 'schedule', Component: SchedulePage },
      { path: 'science', Component: SciencePage },
      { path: 'investment', Component: InvestmentPage },
    ],
  },
]);
