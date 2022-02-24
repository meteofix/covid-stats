import React from 'react';
import { Divider, Drawer, List, Toolbar } from '@mui/material';
import { paths, SIDEBAR_WIDTH, titles } from '../services/consts';
import SidebarNavListMapper from '../services/SidebarNavListMapper';

export interface INavList {
  title: string;
  path: string;
}

const Sidebar = () => {
  const navList: INavList[] = [
    {
      title: titles.WORLD_PAGE_TITLE,
      path: paths.WORLD_PAGE_PATH,
    },
    {
      title: titles.COUNTRY_PAGE_TITLE,
      path: paths.COUNTRY_PAGE_PATH,
    },
    {
      title: titles.ABOUT_PAGE_TITLE,
      path: paths.ABOUT_PAGE_PATH,
    },
  ];
  return (
    <Drawer
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <SidebarNavListMapper navList={navList} />
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
