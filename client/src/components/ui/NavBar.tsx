/* eslint-disable max-len */
import React, { useState } from 'react';
import { AppBar, Avatar, Box, Button, Link, Popover, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUserName } from '../../utils/getUserName';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutThunk } from '../../redux/slices/userSlice';
import emojis from '../../utils/emojis';
import { UPDATE_STATUS } from '../../types/wsTypes';

export default function NavBar(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const user = useAppSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (status: string): void => {
    dispatch({ type: UPDATE_STATUS, payload: { status } });
  };

  const pages = user.id
    ? [
        { title: 'Home', link: '/' },
        { title: 'Friends', link: '/friends' },
      ]
    : [
        { title: 'Home', link: '/' },
        { title: 'Login', link: '/login' },
        { title: 'Signup', link: '/signup' },
      ];

  const userName = getUserName(user?.email);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link color="inherit" underline="none" href="/">
              {user?.name ? `Hello, ${user.name}!` : 'Reload'}
            </Link>
          </Typography>
          {pages?.map((page) => (
            <Button key={page.title} color="inherit" onClick={() => navigate(page.link)}>
              {page.title}
            </Button>
          ))}
          {user?.id && (
            <>
              <Box mr={3}>
                <Button key="logout" color="inherit" onClick={() => dispatch(logoutThunk())}>
                  Logout
                </Button>
              </Box>
              <Avatar
                alt="userName"
                src={`/images/${userName}.jpeg`}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => setAnchorEl(e.currentTarget)}
              />
              <Popover
                id="avatarPopover"
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box display="flex" flexDirection="column">
                  {Object.entries(emojis).map((el) => (
                    <Button key={el[0]} onClick={() => handleClick(el[0])}>
                      {el[1]}
                    </Button>
                  ))}
                </Box>
              </Popover>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
