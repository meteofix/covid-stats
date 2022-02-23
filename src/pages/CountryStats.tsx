import React, { useContext, useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import getByCountryStats from '../api/getByCountryStats';
import { cases } from '../services/consts';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Stack } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Chart from '../components/Chart';
import DateSelector from '../components/DateSelector';
import CaseSelector from '../components/CaseSelector';
import CountrySelector from '../components/CountrySelector';
import { CountriesContext } from '../App';
import { getSummaryStats } from '../services/utils';

export interface Countries {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface DateByCountry {
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
const initialDateByCountry = {
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
  const [data, setData] = useState<DateByCountry>(initialDateByCountry);
  const { countries } = useContext(CountriesContext);

  const caseItems = [cases.CONFIRMED, cases.DEATHS, cases.RECOVERED, cases.ACTIVE];
  let summaryArray = getSummaryStats({ data, filteredCase });

  useEffect(() => {
    getByCountryStats({ dateFrom, country, filteredCase }).then((response) => setData(response));
  }, [dateFrom, country]);

  const setCountryHandler = (value: string) => {
    setCountry(value);
    sessionStorage.setItem('country', value);
  };

  const setDateFromHandler = (value: Date) => {
    setDateFrom(value);
    // @ts-ignore
    sessionStorage.setItem('countryDateFrom', value.toDateString());
  };
  const setCaseHandler = (value: string) => {
    setFilteredCase(value);
    sessionStorage.setItem('countryCase', value);
  };

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={DateAdapter} style={{ margin: '10px' }}>
        <Stack direction="row" marginLeft="15px" spacing={3}>
          <CountrySelector
            // @ts-ignore
            data={countries}
            selectedCountry={country}
            setCountry={setCountryHandler}
          />
          <DateSelector label="Date from" value={dateFrom} setValue={setDateFromHandler} />
          <CaseSelector value={filteredCase} setValue={setCaseHandler} items={caseItems} />
        </Stack>
      </LocalizationProvider>
      <h3>Summary stats for {country}</h3>
      <Chart data={summaryArray} filteredCase={filteredCase} />
    </Wrapper>
  );
};

export default CountryStats;
