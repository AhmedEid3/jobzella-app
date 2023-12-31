import Link from 'next/link';
import { Routes } from '@/routes/routes';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import DarkLogo from '@/components/Logo/DarkLogo';

import TaskGroups from './TaskGroups';
import ToolbarApp from './ToolbarApp';

export const drawerWidth = 280;

interface Props {
  window?: () => Window;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

const Sidebar = ({ mobileOpen, onDrawerToggle, window }: Props) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box sx={{ backgroundColor: 'overlay.main', height: '100%' }}>
      <ToolbarApp sx={{ mb: '2rem' }}>
        <Link href={Routes.homeLink}>
          <DarkLogo />
        </Link>
      </ToolbarApp>

      <TaskGroups />
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
