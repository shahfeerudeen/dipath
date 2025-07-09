import React from 'react';
import { Button } from '@mui/material';

export function WhiteButton({ Icon,label, onClick,  ...props }) {
  return (
    <Button
      variant="outlined"
      sx={{
        bgcolor: 'white',
        color: 'black',
        textTransform: 'none',
        borderColor: 'gray',
        borderRadius: 2,
        fontWeight: 'bold',
        fontSize: {xs:"0.98rem",sm :"0.8rem",md:"0.8rem",lg:"0.8rem"},
        '&:hover': {
          borderColor: 'gray',
          bgcolor: 'white',
        },
      }}
      onClick={onClick}
      {...props}
    >
      {label}
      {Icon}
    </Button>
  );
}
