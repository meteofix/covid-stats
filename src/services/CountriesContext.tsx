import { createContext, Dispatch, SetStateAction } from 'react';

export interface ICountries {
  Country: string;
  Slug: string;
  ISO2: string;
}
export const initialCountries = {
  Country: '',
  Slug: '',
  ISO2: '',
};

interface ICountriesContext {
  countries: ICountries;
  setCountries: Dispatch<SetStateAction<any>>;
}

export const CountriesContext = createContext<ICountriesContext>({
  countries: initialCountries,
  setCountries: () => {},
});
