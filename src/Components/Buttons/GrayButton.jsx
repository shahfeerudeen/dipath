import React from 'react';
import { Button } from '@mui/material';

export function GrayButton({ label, onClick, ...props }) {
  return (
    <Button
      variant="outlined"
      className="login-button"
      onClick={onClick}
      {...props}
    >
      {label}
    </Button>
  );
}
