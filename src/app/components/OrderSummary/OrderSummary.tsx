import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider, Button, Checkbox, ListItemAvatar, Avatar, TextField } from '@mui/material';

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const OrderSummary = () => (
  <Box p={WIDTH < 400 ? 0 : 3}>
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <Typography variant="h6">Your Order</Typography>
      <List>
        <ListItem>
          <ListItemText sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiListItemText-primary': {
              marginRight: 2,
            },
          }} primary="Total Amount" secondary="₹10,651.00" />
        </ListItem>
        <ListItem>
          <ListItemText sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiListItemText-primary': {
              marginRight: 2,
            },
          }} primary="Total GST" secondary="₹1,918.00" />
        </ListItem>
        <ListItem>
          <ListItemText sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiListItemText-primary': {
              marginRight: 2,
            },
          }} primary="Total Shipping" secondary="₹0.00" />
        </ListItem>
        <ListItem>
          <ListItemText sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiListItemText-primary': {
              marginRight: 2,
            },
          }} primary="Total Coupon Discount" secondary="₹0.00" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiListItemText-primary': {
              marginRight: 2,
            },
          }} primary="Total" secondary="₹12,569.00" />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" fullWidth sx={{ mb: 2, backgroundColor: "#DC2626" }}>CONFIRM YOUR ORDER</Button>

      <Typography variant="h6" marginTop={4}>Essential Combo</Typography>
      <List>
        <ListItem>
          <Checkbox />
          <ListItemAvatar>
            <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
          </ListItemAvatar>
          <ListItemText primary="BMP Outdoor AI Surveillance Camera" secondary="₹10,651.00" />
        </ListItem>
        <ListItem>
          <Checkbox />
          <ListItemAvatar>
            <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
          </ListItemAvatar>
          <ListItemText primary="Professional Installation Service" secondary="₹1,918.00" />
        </ListItem>
        <ListItem>
          <Checkbox />
          <ListItemAvatar>
            <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
          </ListItemAvatar>
          <ListItemText primary="DIY Installation Kit" secondary="₹0.00" />
        </ListItem>
      </List>

      <Typography variant="h6" marginTop={4}>Installation Services</Typography>
      <List>
        <ListItem>
          <Checkbox />
          <ListItemAvatar>
            <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
          </ListItemAvatar>
          <ListItemText primary="Basic Installation Package" secondary="₹999.00" />
        </ListItem>
        <ListItem>
          <Checkbox />
          <ListItemAvatar>
            <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
          </ListItemAvatar>
          <ListItemText primary="Advanced Installation Package" secondary="₹1,199.00" />
        </ListItem>
        <ListItem>
          <Checkbox />
          <ListItemAvatar>
            <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
          </ListItemAvatar>
          <ListItemText primary="Custom Installation Services" secondary="₹1,699.00" />
        </ListItem>
        <Box mt={4}>
          <Button variant="contained" color="primary" fullWidth>
            Add 5 Items to Cart
          </Button>
        </Box>
      </List>

    </Paper>

    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginTop: HEIGHT*0.4/100 }}>
    <Typography variant="h6" marginTop={1}>1 Exciting Offers Are Waiting For You!</Typography>

      <Box sx={{ display: 'flex', gap: 2, mt: 1, borderColor: '#DDDDDD', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }} border={1} className="fits">
        <img
          src={require('../../../assets/tags.png')}
          alt="Main Product"
          style={{ width: '20px', height: "20px", marginLeft: '10px' }}
        />
        <TextField sx={{
          width: WIDTH * 20 / 100,
          alignItems: 'center',
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
          '& .MuiInputBase-input': {
            height: '15px',
          },
        }} label="Enter Coupon Code" />
        <Button variant="contained" color="primary" style={{ height: 45 }}>
          Apply
        </Button>
      </Box>

      <Typography variant="body2" marginBottom={1}>Available Coupons</Typography>
        <List style={{ backgroundColor: "#F6FFF5", borderStyle: "dotted", borderColor: "#ABE292", padding: 0 }}>
          <ListItem>
            <ListItemAvatar>
              <img src={require('../../../assets/cpn.png')} />  {/* Replace with actual image URL */}
            </ListItemAvatar>
            <ListItemText style={{ color: "#3BB77E" }} sx={{'& .MuiListItemText-secondary': {
                fontSize: '11px',
              },}} primary="CCTV100" secondary="Get flat 10% off on CCTV Cameras (Min cart value Rs. 10000)" />
          </ListItem>
        </List>

        <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2, backgroundColor: "#3BB77E", margin: 0 }}>
          CLICK HERE TO APPLY THE CODE
        </Button>
    </Paper>
  </Box>
);

export default OrderSummary;