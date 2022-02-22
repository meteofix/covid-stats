import WorldStats from '../components/WorldStats';
import CountryStats from '../components/CountryStats';
import { Navigate } from 'react-router-dom';
import About from '../components/About';

type Routes = Array<{
  path: string;
  Element: JSX.Element;
}>;

export const routes: Routes = [
  {
    path: '/',
    Element: <WorldStats />,
  },
  {
    path: '/country',
    Element: <CountryStats />,
  },
  {
    path: '/about',
    Element: <About />,
  },
  {
    path: '/*',
    Element: <Navigate to="/" />,
  },
];
