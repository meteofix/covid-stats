import { FormControl } from '@mui/material';
import { CustomSelect, StyledOption } from './CountrySelector.styled';
import { Countries } from '../pages/CountryStats';

type CountrySelectorProps = {
  data: Countries;
  selectedCountry: string;
  setCountry: (value: string) => void;
};

const CountrySelector = ({ data, selectedCountry, setCountry }: CountrySelectorProps) => {
  return (
    <FormControl>
      <CustomSelect
        value={selectedCountry}
        onChange={(value) => {
          // @ts-ignore
          setCountry(value);
        }}
      >
        {
          // @ts-ignore
          data.map((country) => (
            <StyledOption key={country.ISO2} value={country.Slug}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${country.ISO2.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${country.ISO2.toLowerCase()}.png 2x`}
                alt={`Flag of ${country.Country}`}
              />
              {country.Country} ({country.ISO2})
            </StyledOption>
          ))
        }
      </CustomSelect>
    </FormControl>
  );
};

export default CountrySelector;
