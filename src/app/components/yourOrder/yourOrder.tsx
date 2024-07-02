import React from 'react';
import { Container, Card, CardContent, Typography, Button, Checkbox, FormControlLabel, TextField, Grid, Divider, Box } from '@mui/material';

const OrderSummary = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Your Order</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography>Total Amount</Typography>
          <Typography>₹10,651.00</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Total GST</Typography>
          <Typography>₹1,918.00</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Total Shipping</Typography>
          <Typography>₹0.00</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Total Coupon Discount</Typography>
          <Typography>₹0.00</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">₹12,569.00</Typography>
        </Box>
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>Confirm Your Order</Button>
      </CardContent>
    </Card>
  );
};

const EssentialCombo = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Essential Combo</Typography>
        <FormControlLabel control={<Checkbox defaultChecked />} label="8MP Outdoor AI Surveillance Camera" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Professional Installation Service" />
        <FormControlLabel control={<Checkbox />} label="DIY Installation Kit" />
        <FormControlLabel control={<Checkbox />} label="Extended Warranty And Support Package" />
        <FormControlLabel control={<Checkbox />} label="Weatherproofing And Protection Combo" />
      </CardContent>
    </Card>
  );
};

const InstallationServices = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Installation Services</Typography>
        <FormControlLabel control={<Checkbox />} label="Basic Installation Package ₹899.00" />
        <Typography variant="body2" color="textSecondary">View Details</Typography>
        <FormControlLabel control={<Checkbox />} label="Advanced Installation Package ₹1199.00" />
        <Typography variant="body2" color="textSecondary">View Details</Typography>
        <FormControlLabel control={<Checkbox />} label="Custom Installation Services ₹1699.00" />
        <Typography variant="body2" color="textSecondary">View Details</Typography>
      </CardContent>
    </Card>
  );
};

const CouponCodeSection = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>1 Exciting Offers Are Waiting For You!</Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <TextField label="Enter Coupon Code" variant="outlined" size="small" fullWidth />
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>Apply</Button>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>Available Coupons</Typography>
          <Button variant="contained" color="success">Click Here to Apply the Code</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const YourOrder: React.FC = () => {
  return (
    <Container sx={{ py: 4 }} maxWidth={false}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <OrderSummary />
        </Grid>
        <Grid item xs={12} md={6}>
          <EssentialCombo />
        </Grid>
        <Grid item xs={12} md={6}>
          <InstallationServices />
        </Grid>
        <Grid item xs={12} md={6}>
          <CouponCodeSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default YourOrder;