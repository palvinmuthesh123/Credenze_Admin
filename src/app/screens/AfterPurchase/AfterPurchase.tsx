import React, {useEffect, useState} from 'react';
import { Container, Typography, Box, Paper, Grid, Button, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './AfterPurchase.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';
import { GET_ORDERS_BY_CUSTOMER, ORDER } from '../../redux/apis';
import Lottie from 'react-lottie';
import * as animationData from '../../components/Lottie/noResults.json'

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const AfterPurchase = () => {
  const history = useNavigate();
  const [data, setData] = useState<any>();

  useEffect(() => {
    getContents1();
  }, [])

    const getContents1 = async () => {
        var token = localStorage.getItem('token')
        var id = localStorage.getItem('customerId') ? localStorage.getItem('customerId') : '0'
        await fetch(`${GET_ORDERS_BY_CUSTOMER}${id}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
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
                width={WIDTH*50/100}
                style={{flex: 1, marginTop: HEIGHT*15/100 }}
                /> :
    <>
    <Box style={{width: WIDTH*90/100, marginLeft: WIDTH*5/100, paddingTop: HEIGHT*5/100, borderRadius: 10, backgroundColor: 'white', marginBottom: HEIGHT*6/100, paddingBottom: HEIGHT*10/100}}>
      <img src={require('../../../assets/Home/Credenze.png')} style={{marginLeft: WIDTH*2/100, height: HEIGHT*3/100, marginBottom: HEIGHT*3/100}}/>
      <Grid container spacing={0}>
        
        <Grid xs={12} lg={1}>
            <Box style={{display: 'flex', justifyContent: 'center', paddingTop: HEIGHT*1/100, height: HEIGHT*7/100}}>
                <img src={require('../../../assets/greencheck.png')} />
            </Box>
        </Grid>

        <Grid item xs={12} lg={5}>
            <Box>
                <Typography variant="h4" sx={{ mt: 2, mb: 1, color: "#00BA00" }}>
                Thank you for your purchase!
                </Typography>
                <Typography variant="body1" style={{color: "#858585", marginTop: HEIGHT*2/100, marginBottom: HEIGHT*4/100}}>
                Thanks for shopping! Your order <strong>#108-2978920-35424</strong> with <strong>2 items</strong> has not shipped yet, but we will send you an email when it does.
                </Typography>
            </Box>
            <Box>
                <Paper elevation={0}>
                <Typography variant="h6" gutterBottom>
                    Shipping Address
                </Typography>
                <Typography variant="body1" style={{marginTop: HEIGHT*2/100,}}>
                    <strong>Rakesh Kumar</strong>
                </Typography>
                <Typography variant="body2" >
                    Gopabandhu Nagar, Jayapur, Infront of State Bank Of India, Andheri West, Mumbai
                </Typography>
                <Typography variant="body1">
                    Mob: 7045510247, Alternate Mob: 1234567890
                </Typography>
                <Box mt={2} style={{marginTop: HEIGHT*4/100,}}>
                    <Button variant="contained" color="primary" onClick={()=> {history('/');}}>
                    Track Order
                    </Button>
                </Box>
                </Paper>
            </Box>
        </Grid>

        <Grid item xs={12} lg={5.5}>
            <Box mt={4}>
                <Paper elevation={3} sx={{p: 2}}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                    <Typography variant="h6">
                        Order Summary
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Typography variant="h6" align="right">
                        Date: 25 March 2024
                    </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />
                <Box sx={{
                    backgroundImage: `url(${require('../../../assets/bottom.jpg')})`,
                    backgroundSize: 'stretch',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                    }}>
                    <Grid container spacing={2}>
                        {[...Array(4)].map((_, index) => (
                        <React.Fragment key={index}>
                            <Grid item xs={12} sm={10}>
                            <Box display={'flex'}>
                                <img src="https://via.placeholder.com/50" alt="Product" style={{ marginRight: 16 }} />
                                <Box style={{paddingLeft: WIDTH*0.4/100}}>
                                    <Typography variant="body1">8 MP Outdoor AI Surveillance Camera</Typography>
                                    <Box display={'flex'}>
                                        <Typography variant="body1">₹125.00</Typography>
                                        <Typography variant="body1" style={{marginLeft: '10px', color: "#DC2626"}}>₹2000.00</Typography>
                                    </Box>
                                    <Typography variant="body1">Qty: 2</Typography>
                                </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                            <Typography variant="body1" align="right" style={{fontWeight: "700"}}>₹4000.00</Typography>
                            </Grid>
                        </React.Fragment>
                        ))}
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                    <Grid container>
                        <Grid item xs={12} md={10}>
                        <Typography variant="body1" style={{fontWeight: "700"}}>Sub Total</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                        <Typography variant="body1" align="right" >₹16000.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={10}>
                        <Typography variant="body1" style={{fontWeight: "700", marginTop: HEIGHT*1/100}}>Shipping</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                        <Typography variant="body1" align="right">₹0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={10}>
                        <Typography variant="body1" style={{fontWeight: "700", marginTop: HEIGHT*1/100}}>Tax</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                        <Typography variant="body1" align="right">₹0.00</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                    <Grid container>
                        <Grid item xs={12} md={10}>
                        <Typography variant="h6" style={{fontWeight: "700"}}>Order Total</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                        <Typography variant="h6" align="right" style={{fontWeight: "700"}}>₹16000.00</Typography>
                        </Grid>
                    </Grid>
                </Box>
                </Paper>
            </Box>
        </Grid>

      </Grid>
    </Box>
    <Footer />
    </>}
    </>
  );
};

export default AfterPurchase;