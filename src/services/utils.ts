import { IDataByCountry } from '../pages/CountryStats';

type SortByName = (first: { Slug: string }, second: { Slug: string }) => number;

export const sortByName: SortByName = (first, second) => {
  if (first.Slug < second.Slug) return -1;
  if (first.Slug > second.Slug) return 1;
  return 0;
};

type SortByDate = (first: { Date: Date }, second: { Date: Date }) => number;

export const sortByDate: SortByDate = (first, second) => {
  const dateA: any = new Date(first.Date);
  const dateB: any = new Date(second.Date);
  return dateA - dateB;
};

type GetSummaryProps = {
  data: IDataByCountry;
  filteredCase: string;
};

export interface ISummaryArray {
  Date: string;
  [filteredCase: string]: string;
}

export const getSummaryStats = ({ data, filteredCase }: GetSummaryProps): ISummaryArray[] => {
  let summaryMap = new Map();
  let summaryArray: ISummaryArray[] = [{ Date: '', '': '' }];
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  Array.isArray(data) &&
    data.forEach((item) => {
      if (!summaryMap.has(item.Date)) summaryMap.set(item.Date, 0);
      summaryMap.set(item.Date, summaryMap.get(item.Date) + item[filteredCase]);
    });

  for (let key of summaryMap.keys()) {
    summaryArray.push({ Date: key, [filteredCase]: summaryMap.get(key) });
  }
  return summaryArray;
};

export const getYesterday = (): number => {
  let yesterday = new Date(Date.now());
  return yesterday.setDate(yesterday.getDate() - 1);
};

type SliceDateInResponseData = (data: any[]) => any[];

export const sliceDateInResponseData: SliceDateInResponseData = (data) => {
  data.forEach((item) => {
    item.Date = item.Date.slice(0, 10);
  });
  return data;
};

type SetFirstCharToUpperCase = (string: string) => string;

export const setFirstCharToUpperCase: SetFirstCharToUpperCase = (string) => {
  if (!string) return string;
  return string[0].toUpperCase() + string.substring(1);
};
