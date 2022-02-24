import React from 'react';
import { ListItem } from '@mui/material';
import { SidebarLink } from '../components/Sidebar.styled';
import { INavList } from '../components/Sidebar';
import useTitle from '../hooks/useTitle';

type SidebarNavListMapperProps = {
  navList: INavList[];
};

const SidebarNavListMapper = ({ navList }: SidebarNavListMapperProps) => {
  const title = useTitle();

  return (
    <>
      {navList.map((navItem) => (
        <ListItem
          style={{ padding: '15px' }}
          button
          key={navItem.title}
          selected={navItem.title === title}
        >
          <SidebarLink to={navItem.path}>{navItem.title}</SidebarLink>
        </ListItem>
      ))}
    </>
  );
};

export default SidebarNavListMapper;
