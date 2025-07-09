import React from 'react';
import { Box } from '@mui/material';

export default function Image({ image }) {
  return (
    <Box mb={2} ml={1}>
      {typeof image === 'string' ? (
        <img src={image} alt="Page Title" style={{ maxWidth: '100%' }} />
      ) : (
        image 
      )}
    </Box>
  );
}
