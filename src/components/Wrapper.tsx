import React, { ReactNode } from 'react';
import AppToolBar from './AppToolBar';
import Sidebar from './Sidebar';
import { Box, Divider, Toolbar } from '@mui/material';

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppToolBar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
        <Toolbar />
        <Box sx={{ p: 5 }}>{children}</Box>
        <Divider />
      </Box>
    </Box>
  );
};

export default Wrapper;
