// App.js
import React from 'react';
import { Box, Typography, Paper, Button, Radio, Accordion, AccordionSummary, AccordionDetails, Grid, Checkbox, FormControlLabel, FormGroup, TextField, RadioGroup, IconButton, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import { Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import UPIIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddIcon from '@mui/icons-material/Add';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './MyCart1.css'
import { useNavigate } from 'react-router-dom';

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const MainContent: React.FC<any> = ({prop}) => {

    const handleClick = () => {
        prop('/afterpurchase');
    };

    return(
    <Box>
        <Accordion defaultExpanded style={{borderRadius: 10}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{padding: WIDTH*1/100 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={{display: 'flex'}}>
                    {/* <PersonIcon sx={{ mr: 1 }} /> */}
                    <img src={require('../../../assets/usertick.png')}/>
                    <Typography variant='h5' style={{marginLeft: '20px'}}>Returning customer? <a href="#">Click here to login</a></Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant='body2' style={{marginLeft: '50px'}}>If the user already signed will navigate to shipping address fielsd always, as the new user need to login or create account.</Typography>
                </Grid>
            </Grid>
            </AccordionSummary>
            <AccordionDetails style={{alignItems: 'flex-start', display: "table"}}>
                {/* <Typography>If the user already signed in, navigate to the shipping address field...</Typography> */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: WIDTH < 400 ? 'auto' : WIDTH*30/100,
                        margin: '0 auto',
                        marginLeft: WIDTH*0.2/100,
                        padding: '20px',
                    }}
                    >
                    <TextField
                        label="Enter your email address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Enter Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
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
                            <Link href="#" variant="body2" color="primary" style={{marginLeft: WIDTH*1/100}}>
                            Register Free
                            </Link>
                        </Typography>
                        
                    </Box>
                    </Box>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{marginTop: HEIGHT*4/100, borderRadius: 10}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{padding: WIDTH*1/100 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={{display: 'flex'}}>
                <img src={require('../../../assets/maps.png')}/>
                    <Typography variant='h5' style={{marginLeft: '20px'}}>Shipping Address</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant='body2' style={{marginLeft: '50px'}}>If the user already signed Select Your Shipping  Address.  You can add a New Shipping address or can Modify the Existing one</Typography>
                </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                {/* <Box sx={{ mt: 3 }}>
                    <Typography variant="h6">Shipping Address</Typography>
                    <Typography variant="body2">
                        If the user already signed in, select your shipping address. You can add a new shipping address or modify the existing one.
                    </Typography>

                    <RadioGroup defaultValue="address1">
                        <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
                            <FormControlLabel
                                value="address1"
                                control={<Radio />}
                                label={
                                    <Box>
                                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <HomeIcon sx={{ mr: 1 }} /> Rakesh Kumar
                                        </Typography>
                                        <Typography variant="body2">
                                            Gopabandhu Nagar, Jayapur, Infront of State Bank Of India, Andheri West, Mumbai
                                        </Typography>
                                        <Typography variant="body2">Mob: 7045510247, Alternate Mob: 1234567890</Typography>
                                    </Box>
                                }
                            />
                            <FormControlLabel control={<Checkbox />} label="Set as default shipping address" />
                        </Paper>

                        <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
                            <FormControlLabel
                                value="address2"
                                control={<Radio />}
                                label={
                                    <Box>
                                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <HomeIcon sx={{ mr: 1 }} /> Rakesh Kumar
                                        </Typography>
                                        <Typography variant="body2">
                                            Gopabandhu Nagar, Jayapur, Infront of State Bank Of India, Andheri West, Mumbai
                                        </Typography>
                                        <Typography variant="body2">Mob: 7045510247, Alternate Mob: 1234567890</Typography>
                                    </Box>
                                }
                            />
                            <FormControlLabel control={<Checkbox />} label="Set as default shipping address" />
                        </Paper>
                    </RadioGroup>

                    <Box sx={{ mt: 2 }}>
                        <Button variant="outlined" sx={{ mb: 2 }}>+ ADD NEW ADDRESS</Button>

                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Full Name" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Enter Alternate Phone Number" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Flat, House No., Building, Company" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Enter Alternate Phone Number" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Landmark" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="City" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="State" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Postal Code" fullWidth />
                                </Grid>
                            </Grid>
                            <FormControlLabel control={<Checkbox />} label="Set as default shipping address" sx={{ mt: 2 }} />
                        </Paper>
                    </Box>

                </Box> */}
                <Box sx={{ p: WIDTH < 400 ? 0 : 5 }}>
                    <RadioGroup defaultValue="address1">
                        <Box sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
                        <Box display="flex">
                            <FormControlLabel value="address1" control={<Radio style={{marginTop: -HEIGHT*8/100}}/>} label="" />
                                <Box sx={{ ml: 1 }}>
                                    <Typography variant="body1" style={{fontWeight: "700", marginLeft: -WIDTH*1.3/100}}>Deliver On This Address</Typography>
                                <Box style={{marginLeft: -WIDTH*3/100, marginTop: HEIGHT*1/100}}>
                                    <Typography style={{fontWeight: "700"}}>Rakesh Kumar</Typography>
                                    <Typography variant="body2">Gopabandhu Nagar, Jayapur, Infront of State Bank Of India, Andheri West, Mumbai</Typography>
                                    <Typography variant="body2">Mob: 7045510247, Alternate Mob: 1234567890</Typography>
                                </Box>
                                </Box>
                            <FormControlLabel style={{marginTop: -HEIGHT*9/100}} sx={{
                                '& .MuiFormControlLabel-label': {
                                    fontSize: '13px',
                                },
                            }} control={<Checkbox sx={{ ml: 'auto' }}/>} label="Set as default shipping address" />
                        </Box>
                        </Box>

                        <Box sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
                        <Box display="flex" alignItems="center">
                            <FormControlLabel value="address2" control={<Radio style={{marginTop: -HEIGHT*8/100}}/>} label="" />
                            <Box sx={{ ml: 1 }}>
                            <Typography variant="body1" style={{fontWeight: "700", marginLeft: -WIDTH*1.3/100}}>Deliver On This Address</Typography>
                            <Box style={{marginLeft: -WIDTH*3/100, marginTop: HEIGHT*1/100}}>
                                <Typography style={{fontWeight: "700"}}>Rakesh Kumar</Typography>
                                <Typography variant="body2">Gopabandhu Nagar, Jayapur, Infront of State Bank Of India, Andheri West, Mumbai</Typography>
                                <Typography variant="body2">Mob: 7045510247, Alternate Mob: 1234567890</Typography>
                            </Box>
                            </Box>
                            <FormControlLabel style={{marginTop: -HEIGHT*9/100}} sx={{
                                '& .MuiFormControlLabel-label': {
                                    fontSize: '13px',
                                },
                            }} control={<Checkbox sx={{ ml: 'auto' }} />} label="Set as default shipping address" />
                        </Box>
                        </Box>
                    </RadioGroup>

                    <Box sx={{ mt: 2 }}>
                        <Box display="flex" alignItems="center" style={{marginBottom: HEIGHT*1/100}}>
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
                        <Typography style={{marginLeft: WIDTH*1/100}}>Add New Address</Typography>
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
                        <TextField label="Full Name" fullWidth />
                        <TextField label="Enter Alternate Phone Number" fullWidth />
                        <TextField label="Flat, House No., Building, Company" fullWidth />
                        <TextField label="Enter Alternate Phone Number" fullWidth />
                        <TextField label="Landmark" fullWidth />
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6}>
                                <TextField label="City" fullWidth />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField label="Postal Code" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6}>
                            <TextField label="State" select SelectProps={{ native: true }} fullWidth>
                                <option value="">Select State</option>
                                {/* Add other options as needed */}
                            </TextField>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField label="Phone Number" fullWidth defaultValue="1234567890" />
                            </Grid>
                        </Grid>
                        <FormControlLabel control={<Checkbox />} label="Set as default shipping address" sx={{ mt: 2 }} />
                        </Box>
                    </Box>
                    </Box>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{marginTop: HEIGHT*4/100, borderRadius: 10}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{padding: WIDTH*1/100 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={12} style={{display: 'flex'}}>
                    <img src={require('../../../assets/wall.png')}/>
                    <Typography variant='h5' style={{marginLeft: '20px'}}>Payment Mode</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant='body2' style={{marginLeft: '50px'}}>Please Select your Payment Method. You can store the card to make the  future shopping easy. We dont store the confidential Details</Typography>
                </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ p: 1}}>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} md={12} style={{display: 'flex'}}>
                                <Box display="flex" alignItems="center">
                                    {/* <UPIIcon sx={{ mr: 1 }} /> */}
                                    <img src={require('../../../assets/upi.png')}/>
                                    <Typography style={{marginLeft: '10px'}}>UPI</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12} style={{display: 'flex'}}>
                                <Typography variant='body2' style={{marginLeft: WIDTH*2/100}}>Pay directly from your bank account</Typography>
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
                                <img src={require('../../../assets/creditcard.png')}/>
                                <Typography style={{marginLeft: '10px'}}>Credit or Debit</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ p: WIDTH < 400 ? 0 : 3}}>
                            <RadioGroup row defaultValue="credit">
                                <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                                <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
                            </RadioGroup>
                            <Box sx={{ mt: 2 }} style={{width: WIDTH < 400 ? 'auto' : WIDTH*30/100}}>
                                <TextField label="Card Number" fullWidth margin="normal" />
                                <Box display="flex" gap={2}>
                                    <TextField label="MM/YY" margin="normal" sx={{ flex: 1 }} />
                                    <TextField label="CVV" margin="normal" sx={{ flex: 1 }} />
                                    {/* <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                                        <img src="visa-icon.png" alt="Visa" style={{ height: '24px' }} />
                                    </Box> */}
                                </Box>
                                <TextField label="Name on Card" fullWidth margin="normal" />
                                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleClick}>
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
)}

const MyCart1 = () => {
    const history = useNavigate();

    const handleNavigation = (path: string) => {
        history(path);
    };

    return(
    <>
    <Header />
        <Box style={{width: WIDTH*90/100, marginLeft: WIDTH*5/100}}>
        <Typography variant="h6" style={{margin: 11}}>
            My Cart
        </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <MainContent prop={handleNavigation}/>
                </Grid>
                <Grid item xs={12} md={4} style={{marginTop: -HEIGHT*3/100}}>
                    <OrderSummary />
                </Grid>
            </Grid>
        </Box>
    <Footer />
    </>
)
}

export default MyCart1;
