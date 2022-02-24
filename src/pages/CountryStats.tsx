import React, { useContext, useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import getByCountryStats from '../api/getByCountryStats';
import { cases } from '../services/consts';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Stack, Typography } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Chart from '../components/Chart';
import DateSelector from '../components/Selectors/DateSelector';
import CaseSelector from '../components/Selectors/CaseSelector';
import CountrySelector from '../components/Selectors/CountrySelector';
import { getSummaryStats, setFirstCharToUpperCase } from '../services/utils';
import { CountriesContext } from '../services/CountriesContext';

export interface IDataByCountry {
  ID: string;
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: Date;
}
const initialDataByCountry = {
  ID: '',
  Country: '',
  CountryCode: '',
  Province: '',
  City: '',
  CityCode: '',
  Lat: '',
  Lon: '',
  Confirmed: 0,
  Deaths: 0,
  Recovered: 0,
  Active: 0,
  Date: new Date(),
};

const CountryStats = () => {
  const [country, setCountry] = useState<string>(sessionStorage.country || 'ukraine');
  const [dateFrom, setDateFrom] = useState<Date>(
    new Date(sessionStorage.countryDateFrom || '2022-01-01T00:00:00Z')
  );
  const [filteredCase, setFilteredCase] = useState<string>(
    sessionStorage.countryCase || cases.CONFIRMED
  );
  const [data, setData] = useState<IDataByCountry>(initialDataByCountry);
  const { countries } = useContext(CountriesContext);

  const caseItems: string[] = [cases.CONFIRMED, cases.DEATHS, cases.RECOVERED, cases.ACTIVE];
  let summaryArray = getSummaryStats({ data, filteredCase });

  useEffect(() => {
    getByCountryStats({ dateFrom, country, filteredCase }).then((response) => {
      setData(response);
    });
  }, [dateFrom, country]);

  const setCountryHandler = (value: string): void => {
    setCountry(value);
    sessionStorage.setItem('country', value);
  };

  const setDateFromHandler = (value: Date): void => {
    setDateFrom(value);
    sessionStorage.setItem('countryDateFrom', value.toDateString());
  };
  const setCaseHandler = (value: string): void => {
    setFilteredCase(value);
    sessionStorage.setItem('countryCase', value);
  };

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Stack direction="row" marginBottom="40px" spacing={3}>
          <CountrySelector
            data={countries}
            selectedCountry={country}
            setCountry={setCountryHandler}
          />
          <DateSelector label="Date from" value={dateFrom} setValue={setDateFromHandler} />
          <CaseSelector value={filteredCase} setValue={setCaseHandler} items={caseItems} />
        </Stack>
      </LocalizationProvider>

      <Typography variant="h4">
        {filteredCase} cases in {setFirstCharToUpperCase(country)}
      </Typography>
      <Chart data={summaryArray} filteredCase={filteredCase} />
    </Wrapper>
  );
};

export default CountryStats;
