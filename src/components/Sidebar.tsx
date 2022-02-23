import React from 'react';
import { Divider, Drawer, List, ListItem, Toolbar } from '@mui/material';
import { paths, SIDEBAR_WIDTH, titles } from '../services/consts';
import useTitle from '../hooks/useTitle';
import { SidebarLink } from './Sidebar.styled';

const Sidebar = () => {
  const title = useTitle();

  const navList = [
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
        {navList.map((navItem) => (
          <ListItem button key={navItem.title} selected={navItem.title === title}>
            <SidebarLink to={navItem.path}>{navItem.title}</SidebarLink>
            {/*<ListItemText primary={text} />*/}
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
