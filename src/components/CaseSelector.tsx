import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type CaseSelectorProps = {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  items: string[];
};

const CaseSelector = ({ label = 'Case', value, setValue, items }: CaseSelectorProps) => {
  return (
    <FormControl>
      <InputLabel id="cases-select-label">{label}</InputLabel>
      <Select
        labelId="cases-select-label"
        id="cases-select"
        value={value}
        label={label}
        onChange={(e) => setValue(e.target.value)}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
        {/*<MenuItem value={cases.CONFIRMED}>{cases.CONFIRMED}</MenuItem>*/}
        {/*<MenuItem value={cases.RECOVERED}>{cases.RECOVERED}</MenuItem>*/}
        {/*<MenuItem value={cases.DEATHS}>{cases.DEATHS}</MenuItem>*/}
      </Select>
    </FormControl>
  );
};

export default CaseSelector;
