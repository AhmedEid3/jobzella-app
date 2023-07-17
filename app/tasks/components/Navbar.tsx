'use client';

import { useState } from 'react';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, Button, Menu, MenuItem, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { drawerWidth } from './Sidebar';
import ToolbarApp from './ToolbarApp';

interface Props {
  onDrawerToggle: () => void;
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = ({ onDrawerToggle }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={1}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <ToolbarApp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box display={'flex'} alignItems={'center'}>
          <Image
            src="/images/emoji.png"
            alt="smile emoji"
            width={40}
            height={40}
          />
          <Box ml={'1rem'}>
            <Typography variant="subtitle1">Hello, Ahmed Muhammed</Typography>
            <Typography variant="caption">
              Let’s start your tasks NOW!
            </Typography>
          </Box>
        </Box>

        <Box ml={'auto'} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton size="large" color="inherit">
            <NotificationsNoneIcon />
          </IconButton>

          <Box>
            <Tooltip title="Open settings">
              <Button onClick={handleOpenUserMenu}>
                <Avatar alt="user profile" src="/images/user-profile.png" />

                <KeyboardArrowDownIcon color="inherit" sx={{ ml: 1 }} />
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </ToolbarApp>
    </AppBar>
  );
};

export default Navbar;
