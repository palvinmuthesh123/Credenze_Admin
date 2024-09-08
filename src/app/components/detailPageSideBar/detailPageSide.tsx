import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Box,
  Divider,
  Select,
  MenuItem,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const PriceSection: React.FC<any> = ({prop, pass}) => {
  
  const handleClick = () => {
    prop('/mycart');
  };

  const handleClick1 = () => {
    prop('/mycart1');
  };

  useEffect(()=>{
    console.log(pass, "LLLLLLL")
  },[])

  return (
    <Box sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" color="error" gutterBottom>
          {pass && pass.salePrice ? "₹"+pass.salePrice : "-"}
        </Typography>
      <Grid container spacing={2}>
          
          <Grid item xs={8}>

            <Typography variant="body2" color="textSecondary">
              (GST inclusive price)
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
              <Typography variant="body2" color="primary">
                ₹1,580 (GST extra)
              </Typography>
            </Box>
          </Grid>
        
          <Grid item xs={4}>
            <Typography color="success" sx={{ ml: 1 }}>
            {pass && pass.saleWarranty ? (pass.saleWarranty+"% Off") : "-"}
            </Typography>
            <Typography variant="h5" color="textSecondary" sx={{ textDecoration: 'line-through', fontWeight: "700", color:"#B6B6B6" }}>
              {pass && pass.mrpPrice ? "₹"+pass.mrpPrice : "-"}
            </Typography>
          </Grid>

      </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Select defaultValue={1} fullWidth size="small">
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" fullWidth onClick={handleClick}>
              Buy Now
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" color="secondary" fullWidth style={{backgroundColor: "#E60303"}} onClick={handleClick1}>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 2 }} />
      </CardContent>
    </Box>
  )
}

const EssentialCombo = () => (
  <>
  <Typography variant="h6">Essential Combo</Typography>
  <List>
  <ListItem style={{marginLeft: -WIDTH*1.5/100}}>
    <Checkbox />
    <ListItemAvatar>
      <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
    </ListItemAvatar>
    <ListItemText primary="BMP Outdoor AI Surveillance Camera" secondary="₹10,651.00" />
  </ListItem>
  <ListItem style={{marginLeft: -WIDTH*1.5/100}}>
    <Checkbox />
    <ListItemAvatar>
      <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
    </ListItemAvatar>
    <ListItemText primary="Professional Installation Service" secondary="₹1,918.00" />
  </ListItem>
  <ListItem style={{marginLeft: -WIDTH*1.5/100}}>
    <Checkbox />
    <ListItemAvatar>
      <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
    </ListItemAvatar>
    <ListItemText primary="DIY Installation Kit" secondary="₹0.00" />
  </ListItem>
</List>
</>
);

const InstallationServices = () => (
  <><Typography variant="h6">Installation Services</Typography>
  <List>
  <ListItem style={{marginLeft: -WIDTH*1.5/100}}>
    <Checkbox />
    <ListItemAvatar>
      <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
    </ListItemAvatar>
    <ListItemText primary="Basic Installation Package" secondary="₹999.00" />
  </ListItem>
  <ListItem style={{marginLeft: -WIDTH*1.5/100}}>
    <Checkbox />
    <ListItemAvatar>
      <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
    </ListItemAvatar>
    <ListItemText primary="Advanced Installation Package" secondary="₹1,199.00" />
  </ListItem>
  <ListItem style={{marginLeft: -WIDTH*1.5/100}}>
    <Checkbox />
    <ListItemAvatar>
      <Avatar src="https://via.placeholder.com/40" />  {/* Replace with actual image URL */}
    </ListItemAvatar>
    <ListItemText primary="Custom Installation Services" secondary="₹1,699.00" />
  </ListItem>
</List>
</>
);

const AddToCartButton = () => (
  <Box mt={4}>
    <Button variant="contained" color="primary" fullWidth>
      Add 5 Items to Cart
    </Button>
  </Box>
);

const DetailPageSide: React.FC<{ pass: any }> = ({pass}) => {

  useEffect(()=>{
    console.log(pass, "PPPPPPPPPPPPPPPPPPPPP")
  },[])

  const history = useNavigate();

  const handleNavigation = (path: string) => {
    history(path);
  };

  return (
    WIDTH < 400 ? <Box sx={{ py: 4 }} maxWidth="md">
       <Card sx={{ mb: 4 }} style={{padding: WIDTH*2/100, borderRadius: 10}}>
        <PriceSection prop={handleNavigation} pass={pass}/>
        <EssentialCombo />
        <InstallationServices />
        <AddToCartButton />
      </Card>
    </Box> : <Container sx={{ py: 4 }} maxWidth="md">
       <Card sx={{ mb: 4 }} style={{padding: WIDTH*2/100, borderRadius: 10}}>
        <PriceSection prop={handleNavigation} pass={pass}/>
        <EssentialCombo />
        <InstallationServices />
        <AddToCartButton />
      </Card>
    </Container>
  );
};

export default DetailPageSide;
