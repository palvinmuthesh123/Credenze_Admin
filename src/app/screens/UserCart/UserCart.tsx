import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f5f5f5', // Optional: background color
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const EmptyMessage = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  color: 'red',
  fontWeight: 'bold',
}));

const ReturnButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#007bff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
}));

function UserCart() {

  const history = useNavigate();

  return (
    <>
    <Header />
        <Box style={{width: WIDTH*90/100, marginLeft: WIDTH*5/100, paddingTop: HEIGHT*5/100, borderRadius: 10, backgroundColor: 'white', marginBottom: HEIGHT*6/100, paddingBottom: HEIGHT*10/100, height:HEIGHT*80/100, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <img src={require('../../../assets/giftbox.png')}/>
            <EmptyMessage variant="h6" textAlign={WIDTH < 400 ? 'center' : 'center'}>
                YOUR CART IS CURRENTLY EMPTY.
            </EmptyMessage>
            <ReturnButton variant="contained" onClick={()=>{history('/')}}>
                RETURN TO SHOP
            </ReturnButton>
        </Box>
    <Footer/>
    </>
  );
}

export default UserCart;