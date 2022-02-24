import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { useEffect, useState } from 'react';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Stack, Typography } from '@mui/material';
import getWorldStats from '../api/getWorldStats';
import Wrapper from '../components/Wrapper';
import { cases } from '../services/consts';
import Chart from '../components/Chart';
import DateSelector from '../components/Selectors/DateSelector';
import CaseSelector from '../components/Selectors/CaseSelector';
import { getYesterday } from '../services/utils';

export interface IWorldData {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

const initialWorldData = [
  {
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: '',
  },
];

const WorldStats = () => {
  const [data, setData] = useState<IWorldData[]>(initialWorldData);
  const [filteredCase, setFilteredCase] = useState<string>(
    sessionStorage.worldCase || cases.CONFIRMED
  );
  const [dateFrom, setDateFrom] = useState<Date>(
    new Date(sessionStorage.worldDateFrom || '2022-01-01T00:00:00Z')
  );
  const [dateTo, setDateTo] = useState<Date>(sessionStorage.worldDateTo || getYesterday());

  const caseItems = [cases.CONFIRMED, cases.DEATHS, cases.RECOVERED];

  useEffect(() => {
    getWorldStats({ dateFrom, dateTo }).then((response) => {
      setData(response);
    });
  }, [dateFrom, dateTo]);

  const setDateFromHandler = (value: Date): void => {
    setDateFrom(value);
    sessionStorage.setItem('worldDateFrom', value.toDateString());
  };
  const setDateToHandler = (value: Date): void => {
    setDateTo(value);
    sessionStorage.setItem('worldDateTo', value.toDateString());
  };
  const setCaseHandler = (value: string): void => {
    setFilteredCase(value);
    sessionStorage.setItem('worldCase', value);
  };

  return (
    <div>
      <Wrapper>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <Stack direction="row" marginBottom="40px" spacing={3}>
            <DateSelector label={'Date from'} value={dateFrom} setValue={setDateFromHandler} />
            <DateSelector label={'Date to'} value={dateTo} setValue={setDateToHandler} />
            <CaseSelector value={filteredCase} setValue={setCaseHandler} items={caseItems} />
          </Stack>
        </LocalizationProvider>
        <Typography variant="h4">{filteredCase} cases in the world</Typography>

        <Chart data={data} filteredCase={`New${filteredCase}`} />
      </Wrapper>
    </div>
  );
};

export default WorldStats;
