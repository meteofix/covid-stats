import WorldStats from '../pages/WorldStats';
import CountryStats from '../pages/CountryStats';
import { Navigate } from 'react-router-dom';
import About from '../pages/About';
import { paths } from './consts';

type Routes = Array<{
  path: string;
  Element: JSX.Element;
}>;

export const routes: Routes = [
  {
    path: paths.WORLD_PAGE_PATH,
    Element: <WorldStats />,
  },
  {
    path: paths.COUNTRY_PAGE_PATH,
    Element: <CountryStats />,
  },
  {
    path: paths.ABOUT_PAGE_PATH,
    Element: <About />,
  },
  {
    path: '/*',
    Element: <Navigate to={paths.WORLD_PAGE_PATH} />,
  },
];
