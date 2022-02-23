import { DateByCountry } from '../pages/CountryStats';

type SortByName = (first: { Slug: string }, second: { Slug: string }) => number;

type SortByDate = (first: { Date: Date }, second: { Date: Date }) => number;

type GetSummaryProps = {
  data: DateByCountry;
  filteredCase: string;
};

export const sortByName: SortByName = (first, second) => {
  if (first.Slug < second.Slug) return -1;
  if (first.Slug > second.Slug) return 1;
  return 0;
};

export const sortByDate: SortByDate = (first, second) => {
  const dateA: any = new Date(first.Date);
  const dateB: any = new Date(second.Date);
  return dateA - dateB;
};

export const getYesterday = () => {
  let yesterday = new Date(Date.now());
  return yesterday.setDate(yesterday.getDate() - 1);
};

export const getSummaryStats = ({ data, filteredCase }: GetSummaryProps): {}[] => {
  let summaryMap = new Map();
  let summaryArray = [];
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
