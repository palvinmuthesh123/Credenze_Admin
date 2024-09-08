// App.js
import React, { useEffect, useState } from 'react';
import { Box, Paper, List, ListItem, ListItemText, Avatar, Typography, TextField, Button, Grid, Divider } from '@mui/material';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import { Container } from '@mui/material';
import { Delete } from '@mui/icons-material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './MyCart.css'
import { GET_CART_BY_CUSTOMER } from '../../redux/apis';
import Lottie from 'react-lottie';
import * as animationData from '../../components/Lottie/noResults.json'

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const CartItems = () => (
  <Box>
    <Paper elevation={3} sx={{ borderRadius: 2, padding: 2.5 }} style={{marginTop: 25, height: WIDTH < 400 ? 'auto' : HEIGHT*60/100}}>
      <List>
        {[
          { id: 1, name: '8 MP Outdoor AI Surveillance Camera', price: '₹4000.00', oldPrice: '₹12500.00', qty: 2, imgSrc: 'https://via.placeholder.com/60' },
          { id: 2, name: '8 MP Outdoor AI Surveillance Camera', price: '₹2000.00', oldPrice: '₹12500.00', qty: 1, imgSrc: 'https://via.placeholder.com/60' },
          { id: 3, name: '8 MP Outdoor AI Surveillance Camera', price: '₹2000.00', oldPrice: '₹12500.00', qty: 1, imgSrc: 'https://via.placeholder.com/60' },
        ].map((item, index) => (
          <><ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid container spacing={2}>
              <Grid item lg={1}>
                <Avatar src={item.imgSrc} sx={{ width: 60, height: 60, mr: 2 }} />
              </Grid>
              <Grid item lg={7}>
                <ListItemText
                  style={{}}
                  primary={item.name}
                  secondary={
                    <Box style={{display:'grid'}}>
                      <Typography component="span">
                        <Typography component="span" sx={{ textDecoration: 'line-through', mr: 1 }}>{item.oldPrice}</Typography>
                        <Typography component="span" color="error">{item.price}</Typography>
                      </Typography>
                      <img src={require('../../../assets/shippings.png')} />
                    </Box>
                  }
                />
              </Grid>
              <Grid item xs={4} lg={1.5}>
                <Typography component="span" color="error">{item.price}</Typography>
              </Grid>
              <Grid item xs={4} lg={1.5}>
                <TextField
                  label="Qty"
                  select
                  SelectProps={{ native: true }}
                  value={item.qty}
                  sx={{
                    width: 80, mr: 2,
                    '& .MuiOutlinedInput-root': {
                      width: WIDTH < 400 ? WIDTH*25/100 : WIDTH*7/100,
                    '& .MuiInputBase-input': {
                      height: '5px',
                    },
                    },
                  }}
                >
                  {[1, 2, 3, 4].map(qty => (
                    <option key={qty} value={qty}>{qty}</option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4} lg={1}>
                <Button color="error"><Delete /></Button>
              </Grid>
            </Grid>
          </ListItem>
          <Divider sx={{ my: 2, margin: 1 }} />
          </>
        ))}
      </List>
    </Paper>
    <Paper elevation={3} sx={{ padding: 2.5, borderRadius: 2 }} style={{marginTop: 30}}>
      <Box mt={2} display="flex" alignItems="center">
        <img src={require('../../../assets/shipp.png')} />
      </Box>
      <Typography sx={{ ml: 1, fontSize: '12px', color: "#848484", marginTop: HEIGHT*0.2/100, marginLeft: WIDTH*0.3/100 }}>Well we human race are enchanted by fine artefact, so what’s better than Fashion? This would be one of the best ways to attract attention towards the adverse effects of manoeuvring nature’ by developing a whole new set of. Well we human race are enchanted by fine artefact, so what’s better than Fashion?</Typography>
    </Paper>
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} lg={3} sx={{ textAlign: 'center' }} className='fgt'>
        <img src={require('../../../assets/secu.png')} alt="Secure Payment" />
        <Box style={{textAlign: "left", marginLeft: '10px'}}>
          <Typography>Secure Payment</Typography>
          <Typography style={{color: "#A9ACB0"}}>Have you ever finally just </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={3} sx={{ textAlign: 'center' }} className='fgt'>
        <img src={require('../../../assets/suppo.png')} alt="24/7 Support" />
        <Box style={{textAlign: "left", marginLeft: '10px'}}>
          <Typography>24/7 Support</Typography>
          <Typography style={{color: "#A9ACB0"}}>Have you ever finally just </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={3} sx={{ textAlign: 'center' }} className='fgt'>
        <img src={require('../../../assets/freesh.png')} alt="Free Shipping" />
        <Box style={{textAlign: "left", marginLeft: '10px'}}>
          <Typography>Free Shipping</Typography>
          <Typography style={{color: "#A9ACB0"}}>Have you ever finally just </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={3} sx={{ textAlign: 'center' }} className='fgt'>
        <Box style={{borderRadius: '100px', backgroundColor: '#DEE2E7', padding: 8, height: 32, width: 32, alignItems: 'center', justifyContent: 'center', display:'flex'}}>
          <img src={require('../../../assets/rep.png')} alt="2 Days Refundable" />
        </Box>
        <Box style={{textAlign: "left", marginLeft: '10px'}}>
          <Typography>2 Days Refundable</Typography>
          <Typography style={{color: "#A9ACB0"}}>Have you ever finally just </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

const MyCart = () => {

  const [data, setData] = useState<any>();

    useEffect(() => {
        getContents();
    }, [])

    const getContents = async () => {
      var custId = localStorage.getItem('customerId') ? localStorage.getItem('customerId') : '0'
      var token = localStorage.getItem('token')

      console.log(token, "TTTTTTTTTTTTTTT")

        const response = await fetch(`${GET_CART_BY_CUSTOMER}${custId}`, {
          method: 'GET',
          headers: {
            // 'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
        .then(response => {
          console.log(response, "LLLLLLLLLLLLL");
          return response.text();
        })
        .then(text => {
          if (text) {
            try {
              return JSON.parse(text);
            } catch (error) {
              console.error("Invalid JSON:", error);
              return null;
            }
          } else {
            console.warn("Empty response");
            return null;
          }
        })
        .then(data => {
          if (data) {
            console.log(data, "KKKKKKKKKKKKKKKKKKKK");
            setData(data);
          } else {
            console.log("No data returned");
          }
        })
        .catch(error => console.error("Fetch error:", error));   
    }

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

  return (
  <>
  <Header />
  {!data ?
  <Lottie options={defaultOptions}
              // height={HEIGHT*70/100}
              width={WIDTH*50/100}
              style={{flex: 1, marginTop: HEIGHT*15/100 }}
              /> :
    <><Box style={{width: WIDTH*90/100, marginLeft: WIDTH*5/100}}>
        <Typography variant="h6">
            My Cart
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <CartItems />
            </Grid>
            <Grid item xs={12} md={4}>
              <OrderSummary />
            </Grid>
          </Grid>
      </Box>
    <Footer />
    </>}
    </>
)
}

export default MyCart;
