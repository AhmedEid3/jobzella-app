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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <ToolbarApp />
        {children}
      </Box>
    </Box>
  );
}
