import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Typography, Popover, Box, Button, SelectChangeEvent } from '@mui/material';

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const CustomSelect: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  const open = Boolean(anchorEl);

  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel
        id="custom-select-label"
        sx={{
          color: 'transparent',
          '&:hover': {
            color: 'transparent',
          },
        }}
      >
        Select Item
      </InputLabel>
      <Select
        labelId="custom-select-label"
        value={selectedValue}
        onChange={handleChange}
        label="All Category"
        sx={{
          width: WIDTH*10/100,
          height: HEIGHT*6/100,
          backgroundColor: 'transparent',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
          '& .MuiSelect-icon': {
            color: 'black',
          },
          '& .MuiInputBase-input': {
            height: '100%',
            padding: '10px 14px',
            '&::placeholder': {
              opacity: 0.5,
            },
            '&:hover::placeholder': {
              opacity: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleOpen} value="item1">
          <Typography variant="body1">Item 1</Typography>
        </MenuItem>
        <MenuItem onClick={handleOpen} value="item2">
          <Typography variant="body1">Item 2</Typography>
        </MenuItem>
      </Select>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Button onClick={handleClose}>Close</Button>
          <Select
            value=""
            onChange={() => {}}
            sx={{ width: '200px', marginTop: '8px' }}
          >
            <MenuItem value="subitem1">Subitem 1</MenuItem>
            <MenuItem value="subitem2">Subitem 2</MenuItem>
          </Select>
        </Box>
      </Popover>
    </FormControl>
  );
};

export default CustomSelect;