import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Radio, Accordion, AccordionSummary, AccordionDetails, Grid, Checkbox, FormControlLabel, TextField, RadioGroup, IconButton, Link, Input } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import AddIcon from '@mui/icons-material/Add';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './MyCart1.css'
import { useNavigate } from 'react-router-dom';
import { ADDRESS } from '../../redux/apis';
import axios from 'axios';
import Lottie from 'react-lottie';
import * as animationData from '../../components/Lottie/noResults.json'

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const MyCart1 = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [alternatePhone, setAlternatePhone] = useState('')
    const [city, setCity] = useState('')
    const [postal, setPostal] = useState('')
    const [phone, setPhone] = useState('')
    const [landmark, setLandmark] = useState('')
    const [defau, setDefau] = useState(false)
    const [state, setState] = useState('')
    const [paymentData, setPaymentData] = useState<any>(null);

    useEffect(() => {
        getContents1();
    }, [])

    const getContents1 = async () => {
        var token = localStorage.getItem('token')
        var id = localStorage.getItem('customerId') ? localStorage.getItem('customerId') : '0'
        await fetch(`${ADDRESS}/${id}`, {
            method: 'GET',
            headers: {
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
                } else {
                    console.log("No data returned");
                }
            })
            .catch(error => console.error("Fetch error:", error));
    }

    const handleNavigation = (path: string) => {
        history(path);
    };

    const handleClick = () => {
        history('/afterpurchase');
    };

    const statesAndUnionTerritories = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"
    ];

    const preventAccordionClose = (event: any) => {
        event.stopPropagation();
    };

    const getContents = async () => {
        var token = localStorage.getItem('token')

        let params = {
            addressLine1: address1,
            addressLine2: address2,
            pinCode: postal,
            landMark: landmark,
            city: city,
            state: state,
            country: "INDIA",
            alternateMobileNumber: alternatePhone,
            isDefault: defau,
            addressType: "CUSTOMER_BILLING"
        }

        await fetch(ADDRESS, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(params),
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
            .then(result => {
                console.log(result, "RESULT...............")
            })
            .catch(error => console.error(error));
    }

    const createOrder = async () => {
        const orderUrl = 'https://api.razorpay.com/v1/orders';
        const orderData = {
        amount: 50000,
        currency: 'INR',
        receipt: 'order_rcptid_11',
        };

    try {
      const response = await axios.post(orderUrl, orderData, {
        auth: {
          username: 'rzp_test_qHpBRBwDfZ5fxZ',
          password: 'TE0hOgMUovyV93XorR9D4Th4',
        },
      });
      setPaymentData(response.data);
      handlePayment();
    } catch (error) {
      console.error('Error creating order:', error);
    }
    };

    const handlePayment = () => {
    // if (!paymentData) return;

        const options = {
        key: 'rzp_test_qHpBRBwDfZ5fxZ',
        amount: (paymentData && paymentData.amount) ? paymentData.amount : 50000,
        currency: (paymentData && paymentData.currency) ? paymentData.currency : "INR",
        name: 'Credenze',
        description: 'Ecommerce',
        image: 'https://your-logo-url.com',
        order_id: (paymentData && paymentData.id) ? paymentData.id : "order_OkkD22VfHlbYxc",
        handler: function (response: any) {
            console.log(response);
        },
        prefill: {
            name: 'Rockstar',
            email: 'rockstar.king@example.com',
            contact: '9898989898',
        },
        theme: {
            color: '#DC2626',
        },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <Header />
            <Box style={{ width: WIDTH * 90 / 100, marginLeft: WIDTH * 5 / 100 }}>
                <Typography variant="h6" style={{ margin: 11 }}>
                    My Cart
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        {/* <MainContent prop={handleNavigation} /> */}

                        {/* ............................................. */}

                        <Box>
                            <Accordion defaultExpanded style={{ borderRadius: 10 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ padding: WIDTH * 1 / 100 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12} style={{ display: 'flex' }}>
                                            <img src={require('../../../assets/usertick.png')} />
                                            <Typography variant='h5' style={{ marginLeft: '20px' }}>Returning customer? <a href="#">Click here to login</a></Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant='body2' style={{ marginLeft: '50px' }}>If the user already signed will navigate to shipping address fielsd always, as the new user need to login or create account.</Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails style={{ alignItems: 'flex-start', display: "table" }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: WIDTH < 400 ? 'auto' : WIDTH * 30 / 100,
                                            margin: '0 auto',
                                            marginLeft: WIDTH * 0.2 / 100,
                                            padding: '20px',
                                        }}
                                    >
                                        <TextField
                                            label="Enter your email address"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                        <TextField
                                            label="Enter Password"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ mt: 2, mb: 2 }}
                                        >
                                            LOGIN
                                        </Button>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="You'll be able to save your details to create an account later."
                                            sx={{ alignSelf: 'flex-start', mb: 1 }}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Keep me up to date on exclusive offers"
                                            sx={{ alignSelf: 'flex-start', mb: 2 }}
                                        />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <Typography variant="body2" color="textSecondary">
                                                No Account yet?
                                                <Link href="#" variant="body2" color="primary" style={{ marginLeft: WIDTH * 1 / 100 }}>
                                                    Register Free
                                                </Link>
                                            </Typography>

                                        </Box>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{ marginTop: HEIGHT * 4 / 100, borderRadius: 10 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ padding: WIDTH * 1 / 100 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12} style={{ display: 'flex' }}>
                                            <img src={require('../../../assets/maps.png')} />
                                            <Typography variant='h5' style={{ marginLeft: '20px' }}>Shipping Address</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant='body2' style={{ marginLeft: '50px' }}>If the user already signed Select Your Shipping  Address.  You can add a New Shipping address or can Modify the Existing one</Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ p: WIDTH < 400 ? 0 : 5 }}>
                                        <RadioGroup defaultValue="address1">
                                            <Box sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
                                                <Box display="flex">
                                                    <FormControlLabel value="address1" control={<Radio style={{ marginTop: -HEIGHT * 8 / 100 }} />} label="" />
                                                    <Box sx={{ ml: 1 }}>
                                                        <Typography variant="body1" style={{ fontWeight: "700", marginLeft: -WIDTH * 1.3 / 100 }}>Deliver On This Address</Typography>
                                                        <Box style={{ marginLeft: -WIDTH * 3 / 100, marginTop: HEIGHT * 1 / 100 }}>
                                                            <Typography style={{ fontWeight: "700" }}>Rakesh Kumar</Typography>
                                                            <Typography variant="body2">Gopabandhu Nagar, Jayapur, Infront of State Bank Of India, Andheri West, Mumbai</Typography>
                                                            <Typography variant="body2">Mob: 7045510247, Alternate Mob: 1234567890</Typography>
                                                        </Box>
                                                    </Box>
                                                    <FormControlLabel style={{ marginTop: -HEIGHT * 9 / 100 }} sx={{
                                                        '& .MuiFormControlLabel-label': {
                                                            fontSize: '13px',
                                                        },
                                                    }} control={<Checkbox sx={{ ml: 'auto' }} />} label="Set as default shipping address" />
                                                </Box>
                                            </Box>

                                            <Box sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
                                                <Box display="flex" alignItems="center">
                                                    <FormControlLabel value="address2" control={<Radio style={{ marginTop: -HEIGHT * 8 / 100 }} />} label="" />
                                                    <Box sx={{ ml: 1 }}>
                                                        <Typography variant="body1" style={{ fontWeight: "700", marginLeft: -WIDTH * 1.3 / 100 }}>Deliver On This Address</Typography>
                                                        <Box style={{ marginLeft: -WIDTH * 3 / 100, marginTop: HEIGHT * 1 / 100 }}>
                                                            <Typography style={{ fontWeight: "700" }}>Rakesh Kumar</Typography>
                                                            <Typography variant="body2">Gopabandhu Nagar, Jayapur, Infront of State Bank Of India, Andheri West, Mumbai</Typography>
                                                            <Typography variant="body2">Mob: 7045510247, Alternate Mob: 1234567890</Typography>
                                                        </Box>
                                                    </Box>
                                                    <FormControlLabel style={{ marginTop: -HEIGHT * 9 / 100 }} sx={{
                                                        '& .MuiFormControlLabel-label': {
                                                            fontSize: '13px',
                                                        },
                                                    }} control={<Checkbox sx={{ ml: 'auto' }} />} label="Set as default shipping address" />
                                                </Box>
                                            </Box>
                                        </RadioGroup>

                                        <Box sx={{ mt: 2 }}>
                                            <Box display="flex" alignItems="center" style={{ marginBottom: HEIGHT * 1 / 100 }}>
                                                <IconButton sx={{
                                                    backgroundColor: 'white',
                                                    boxShadow: 3, // You can use the boxShadow prop to set the elevation
                                                    '&:hover': {
                                                        backgroundColor: 'white',
                                                        boxShadow: 6, // Increase the shadow on hover
                                                    },
                                                }}>
                                                    <AddIcon />
                                                </IconButton>
                                                <Typography style={{ marginLeft: WIDTH * 1 / 100 }}>Add New Address</Typography>
                                            </Box>
                                            <Box
                                                component="form"
                                                sx={{
                                                    display: 'grid',
                                                    gridTemplateColumns: { sm: '1fr 1fr' },
                                                    gap: 2,
                                                    mt: 2,
                                                }}
                                            >
                                                <TextField label="Full Name" value={name} onChange={(event) => setName(event.target.value)} fullWidth />
                                                <TextField label="Enter Alternate Phone Number" value={address1} onChange={(event) => setAddress1(event.target.value)} fullWidth />
                                                <TextField label="Flat, House No., Building, Company" value={address2} onChange={(event) => setAddress2(event.target.value)} fullWidth />
                                                <TextField label="Enter Alternate Phone Number" value={alternatePhone} onChange={(event) => setAlternatePhone(event.target.value)} fullWidth />
                                                <TextField label="Landmark" value={landmark} onChange={(event) => setLandmark(event.target.value)} fullWidth />
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} md={6}>
                                                        <TextField label="City" value={city} onChange={(event) => setCity(event.target.value)} fullWidth />
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <TextField label="Postal Code" value={postal} onChange={(event) => setPostal(event.target.value)} fullWidth />
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} md={6}>
                                                        <TextField
                                                            label="State"
                                                            select
                                                            SelectProps={{ native: true }}
                                                            fullWidth
                                                            variant="outlined"
                                                        >
                                                            <option value="">Select State</option>
                                                            {statesAndUnionTerritories.map((state, index) => (
                                                                <option key={index} value={state}>
                                                                    {state}
                                                                </option>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <TextField label="Phone Number" value={phone} onChange={(event) => setPhone(event.target.value)} fullWidth defaultValue="1234567890" />
                                                    </Grid>
                                                </Grid>
                                                <FormControlLabel control={
                                                    <Checkbox
                                                        checked={defau}
                                                        onChange={(event) => setDefau(event.target.checked)}
                                                        name="checked"
                                                        color="primary"
                                                        onClick={preventAccordionClose}
                                                    />
                                                } label="Set as default shipping address" sx={{ mt: 2 }} />
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    fullWidth
                                                    sx={{ mt: 2, mb: 2 }}
                                                    onClick={() => { getContents(); }}
                                                >
                                                    SUBMIT
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{ marginTop: HEIGHT * 4 / 100, borderRadius: 10 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ padding: WIDTH * 1 / 100 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12} style={{ display: 'flex' }}>
                                            <img src={require('../../../assets/wall.png')} />
                                            <Typography variant='h5' style={{ marginLeft: '20px' }}>Payment Mode</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant='body2' style={{ marginLeft: '50px' }}>Please Select your Payment Method. You can store the card to make the  future shopping easy. We dont store the confidential Details</Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ p: 1 }}>
                                        <Accordion defaultExpanded>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={12} style={{ display: 'flex' }}>
                                                        <Box display="flex" alignItems="center">
                                                            {/* <UPIIcon sx={{ mr: 1 }} /> */}
                                                            <img src={require('../../../assets/upi.png')} />
                                                            <Typography style={{ marginLeft: '10px' }}>UPI</Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={12} style={{ display: 'flex' }}>
                                                        <Typography variant='body2' style={{ marginLeft: WIDTH * 2 / 100 }}>Pay directly from your bank account</Typography>
                                                    </Grid>
                                                </Grid>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {/* <Typography variant="body2">Pay directly from your bank account</Typography> */}
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Box display="flex" alignItems="center">
                                                    <img src={require('../../../assets/creditcard.png')} />
                                                    <Typography style={{ marginLeft: '10px' }}>Credit or Debit</Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Box sx={{ p: WIDTH < 400 ? 0 : 3 }}>
                                                    <RadioGroup row defaultValue="credit">
                                                        <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                                                        <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
                                                    </RadioGroup>
                                                    <Box sx={{ mt: 2 }} style={{ width: WIDTH < 400 ? 'auto' : WIDTH * 30 / 100 }}>
                                                        <TextField label="Card Number" fullWidth margin="normal" />
                                                        <Box display="flex" gap={2}>
                                                            <TextField label="MM/YY" margin="normal" sx={{ flex: 1 }} />
                                                            <TextField label="CVV" margin="normal" sx={{ flex: 1 }} />
                                                            {/* <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                                                        <img src="visa-icon.png" alt="Visa" style={{ height: '24px' }} />
                                                    </Box> */}
                                                        </Box>
                                                        <TextField label="Name on Card" fullWidth margin="normal" />
                                                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={()=> {
                                                            // createOrder();
                                                            handlePayment();
                                                        }}>
                                                            PROCEED FOR PAYMENT
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                        {/* ............................................. */}

                    </Grid>
                    <Grid item xs={12} md={4} style={{ marginTop: -HEIGHT * 3 / 100 }}>
                        <OrderSummary />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    )
}

export default MyCart1;