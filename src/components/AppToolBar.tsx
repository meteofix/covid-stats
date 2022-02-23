import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import useTitle from '../hooks/useTitle';

const AppToolBar = () => {
  const title = useTitle();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolBar;
