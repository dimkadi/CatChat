import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export default function Loader(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={50} />
    </Box>
  );
}
