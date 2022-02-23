import React, { ReactNode } from 'react';
import AppToolBar from './AppToolBar';
import Sidebar from './Sidebar';
import { Box, Toolbar } from '@mui/material';

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppToolBar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
