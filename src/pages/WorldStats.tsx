import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { useEffect, useState } from 'react';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Stack } from '@mui/material';
import getWorldStats from '../api/getWorldStats';

import Wrapper from '../components/Wrapper';
import { cases } from '../services/consts';
import Chart from '../components/Chart';
import DateSelector from '../components/DateSelector';
import CaseSelector from '../components/CaseSelector';
import { getYesterday, sortByDate } from '../services/utils';

const WorldStats = () => {
  const [data, setData] = useState([]);
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
      response.sort(sortByDate);
      setData(response);
    });
  }, [dateFrom, dateTo]);

  const setDateFromHandler = (value: Date) => {
    setDateFrom(value);
    sessionStorage.setItem('worldDateFrom', value.toDateString());
  };
  const setDateToHandler = (value: Date) => {
    setDateTo(value);
    sessionStorage.setItem('worldDateTo', value.toDateString());
  };
  const setCaseHandler = (value: string) => {
    setFilteredCase(value);
    sessionStorage.setItem('worldCase', value);
  };

  return (
    <div>
      <Wrapper>
        <LocalizationProvider dateAdapter={DateAdapter} style={{ margin: '10px' }}>
          <Stack direction="row" marginLeft="15px" spacing={3}>
            <DateSelector label={'Date from'} value={dateFrom} setValue={setDateFromHandler} />
            <DateSelector label={'Date to'} value={dateTo} setValue={setDateToHandler} />
            <CaseSelector value={filteredCase} setValue={setCaseHandler} items={caseItems} />
          </Stack>
        </LocalizationProvider>
        <Chart data={data} filteredCase={`New${filteredCase}`} />
      </Wrapper>
    </div>
  );
};

export default WorldStats;
