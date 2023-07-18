'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Routes } from '@/routes/routes';
import { Lock, Mail, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link as MuiLink,
  OutlinedInput,
  Typography,
} from '@mui/material';

const LoginForm = () => {
  const router = useRouter();
  const [rememberPassword, setRememberPAssword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeRememberPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberPAssword(event.target.checked);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(Routes.tasksLink);
  };

  return (
    <Card
      sx={{
        py: { xs: '1rem', sm: '2rem', md: '3rem' },
        px: { xs: '.5rem', sm: '1rem' },
        height: '100%',
        maxWidth: '500px',
        mx: 'auto',
      }}
    >
      <CardContent>
        <Typography
          variant="h2"
          sx={{
            borderBottom: 1,
            borderColor: 'black',
            lineHeight: 1.5,
            display: 'inline-block',
          }}
        >
          Login
        </Typography>

        <Box sx={{ mt: { xs: '1rem', md: '2.5rem' } }}>
          <Box mb={'1.5rem'}>
            <Typography
              color={'text.secondary'}
              variant="subtitle1"
              component={'h3'}
            >
              Welcome to Jobzella! 👋🏻
            </Typography>

            <Typography color={'text.secondary'} variant="body2">
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <FormControl sx={{ mb: '1rem' }} fullWidth variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                type={'email'}
                name="email"
                startAdornment={
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                }
                label="Email"
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                startAdornment={
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberPassword}
                    onChange={handleChangeRememberPassword}
                    inputProps={{ 'aria-label': 'remember password' }}
                  />
                }
                label="Remember Me"
                sx={{ color: 'text.secondary' }}
              />

              <MuiLink align="right" component={Link} href={'/forgot-password'}>
                Forgot Password?
              </MuiLink>
            </Box>

            <Button
              type="submit"
              size={'large'}
              sx={{ width: '100%', mt: { xs: '2rem', sm: '3rem', md: '4rem' } }}
              variant="contained"
            >
              Login
            </Button>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
