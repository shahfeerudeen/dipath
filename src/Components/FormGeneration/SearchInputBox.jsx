import React from 'react';
import { Box, Paper, IconButton, Menu, MenuItem ,Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInputBox({
  label,
  options = [],
  value,
  onChange,
  sx,
  placeholder = '-',
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (option) => {
    onChange && onChange(option);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ...sx, }}>
        <Typography sx={{ minWidth: 80, fontWeight: 500 }}>{label}</Typography>
      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 2,
          border: '1px solid #c4c4c4',
          minWidth: {xs:170,md:300},
          height: 40,
          overflow: 'hidden',
        }}
      >
        {/* Left: Value/Placeholder */}
        <Box
          sx={{
            flex: 1,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            color: value ? 'inherit' : 'gray',
            background: '#fff',
            height: '100%',
          }}
        >
          {value || placeholder}
        </Box>
        <IconButton
          size="small"
          onClick={handleOpen}>
          <SearchIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, idx) => (
            <MenuItem key={idx} onClick={() => handleSelect(option)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Paper>
    </Box>
  );
}