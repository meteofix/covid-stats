import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './services/AppRouter';
import { CssBaseline } from '@mui/material';
import getCountries from './api/getCountries';
import { CountriesContext, ICountries, initialCountries } from './services/CountriesContext';

function App() {
  const [countries, setCountries] = useState<ICountries>(initialCountries);

  useEffect(() => {
    getCountries().then((response) => {
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
        <AppRouter />
      </BrowserRouter>
    </CountriesContext.Provider>
  );
}

export default App;
