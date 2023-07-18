'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';

import Navbar from './Navbar';
import Sidebar, { drawerWidth } from './Sidebar';
import ToolbarApp from './ToolbarApp';

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar onDrawerToggle={handleDrawerToggle} />

      <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          p: '2rem 3rem',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#fbfbfb',
        }}
      >
        <ToolbarApp />
        {children}
      </Box>
    </Box>
  );
}
