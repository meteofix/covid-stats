import React from 'react';
import { DesktopDatePicker } from '@mui/lab';
import { TextField } from '@mui/material';

type DateSelectorProps = {
  label?: string;
  value: Date;
  setValue: (value: Date) => void;
};

const DateSelector = ({ label = 'Date', value, setValue }: DateSelectorProps) => {
  return (
    <DesktopDatePicker
      disableFuture
      label={label}
      mask="__.__.____"
      inputFormat="dd.MM.yyyy"
      value={value}
      // @ts-ignore
      onChange={(date) => setValue(date)}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default DateSelector;
