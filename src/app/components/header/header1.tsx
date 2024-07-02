import React from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, MenuItem, Select, Badge, Button } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme();

const Root = styled('div')({
  flexGrow: 1,
});

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  color: '#000',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
});

const CustomToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  padding: '0 20px',
});

const Logo = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  color: '#d32f2f',
  fontWeight: 'bold',
  textDecoration: 'none',
  fontSize: '1.5rem',
});

const SearchBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  padding: '0 10px',
  borderRadius: '5px',
  width: '50%',
});

const SearchInput = styled(InputBase)({
  marginLeft: 10,
  flex: 1,
});

const CustomSelect = styled(Select)({
  marginRight: 10,
  minWidth: '150px',
  backgroundColor: '#fff',
});

const Icons = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const CustomButton = styled(Button)({
  marginLeft: 20,
  color: '#000',
  textTransform: 'none',
});

const CartButton = styled(IconButton)({
  marginLeft: 20,
});

const Header: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <CustomAppBar position="static">
          <CustomToolbar>
            <Logo variant="h6">
              Credenze
            </Logo>
            <SearchBox>
              <CustomSelect
                value="All Categories"
                variant="outlined"
              >
                <MenuItem value="All Categories">All Categories</MenuItem>
                {/* Add more categories as needed */}
              </CustomSelect>
              <SearchInput
                placeholder="Search for Products & Categories"
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ color: '#d32f2f' }} />
              </IconButton>
            </SearchBox>
            <Icons>
              <CustomButton>Installation Service</CustomButton>
              <CustomButton>Track Order</CustomButton>
              <CustomButton>Login</CustomButton>
              <CartButton aria-label="cart">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </CartButton>
            </Icons>
          </CustomToolbar>
        </CustomAppBar>
      </Root>
    </ThemeProvider>
  );
};

export default Header;
