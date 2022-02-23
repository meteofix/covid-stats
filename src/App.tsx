import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './services/AppRouter';
import { AppContainer } from './App.styled';
import { CssBaseline } from '@mui/material';
import getCountries from './api/getCountries';
import { sortByName } from './services/utils';

interface ICountriesContext {
  countries: any[];
  setCountries: Dispatch<SetStateAction<any>>;
}
export const CountriesContext = createContext<ICountriesContext>({
  countries: [],
  setCountries: () => {},
});

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((response) => {
      response.sort(sortByName);
      setCountries(response);
    });
  }, []);

  const CountriesContextValue = useMemo(
    () => ({ countries, setCountries }),
    [countries, setCountries]
  );

  return (
    <CountriesContext.Provider value={CountriesContextValue}>
      <BrowserRouter>
        <CssBaseline />

        <AppContainer>
          <AppRouter />
        </AppContainer>
      </BrowserRouter>
    </CountriesContext.Provider>
  );
}

export default App;
