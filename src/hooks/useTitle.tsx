import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { paths, titles } from '../services/consts';

const UseTitle = () => {
  let location = useLocation();

  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case paths.WORLD_PAGE_PATH:
        setTitle(titles.WORLD_PAGE_TITLE);
        break;
      case paths.COUNTRY_PAGE_PATH:
        setTitle(titles.COUNTRY_PAGE_TITLE);
        break;
      case paths.ABOUT_PAGE_PATH:
        setTitle(titles.ABOUT_PAGE_TITLE);
        break;
      default:
        return undefined;
    }
  }, [location.pathname]);

  return title;
};

export default UseTitle;
