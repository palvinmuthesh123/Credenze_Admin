import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';
import CustomSelect from '../select/select';
import Grid from '@mui/material/Grid';

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ mb: 4, backgroundColor: 'white' }}>
      <Toolbar>
      <Grid container spacing={2}>
        <Grid item xs={1.5}>
          <Box
            component="img"
            style={{ width: WIDTH * 8 / 100, marginTop: HEIGHT*1.5/100}}
            src={require('../../../assets/Home/Credenze.png')}
          />
        </Grid>

        <Grid item xs={6.3}>
        <Box style={{ backgroundColor: '#E5E7EB', display: 'flex', flexDirection: 'row', height: HEIGHT*6/100, width: WIDTH* 43/100, borderRadius: '10px' }}>
          <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Box
              component="img"
              style={{ width: WIDTH * 2 / 100, height: HEIGHT* 3/100 }}
              src={require('../../../assets/Home/men.png')} />
            </Box>
          <Box style={{ width: WIDTH * 10 / 100, display: 'flex', alignItems: 'center',}}>
            <CustomSelect/>
          </Box>
          <Box style={{height: HEIGHT* 4/100, display: 'flex', alignItems: 'center', width: WIDTH*30/100}}>
            <TextField sx={{
              '& .MuiOutlinedInput-root': {
                width: WIDTH*25/100,
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
                  height: '5px',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  display: 'none',
                },
              },
              '& .MuiInputLabel-shrink': {
                display: 'none',
              },
            }}  label="Search for Products & Categories"
            variant="outlined"/>
          </Box>
          <Box style={{backgroundColor: 'red', display: 'flex', alignItems:'center', justifyContent: 'center', padding: 10, borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}>
            <Box component="img"
              style={{ width: WIDTH * 1 / 100, height: HEIGHT* 2/100 }}
              src={require('../../../assets/Home/search.png')} />
          </Box>
        </Box>
        </Grid>

        <Grid item xs={1.2}>
        <Box style={{backgroundColor: '#F8F8F8', display: 'flex', alignItems:'center', justifyContent: 'center', padding: 10, width: WIDTH*10/100, height: HEIGHT*1.6/100, marginTop: HEIGHT*1/100}}>
          <Box component="img"
                style={{ width: WIDTH * 1 / 100, height: HEIGHT* 2/100, marginRight: WIDTH*0.5/100 }}
                src={require('../../../assets/Home/person.png')} />
          <Typography style={{color: 'black'}} variant="body2">Installtion Service</Typography>
        </Box>
        </Grid>

        <Grid item xs={1.3}>
        <Box style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 10, width: WIDTH*10/100, marginLeft: WIDTH*1/100}}>
          <Box component="img"
                style={{ width: WIDTH * 1 / 100, height: HEIGHT* 2/100, marginRight: WIDTH*0.5/100 }}
                src={require('../../../assets/Home/Frame.png')} />
          <Typography style={{color: 'black'}} variant="body2">Track Order</Typography>
        </Box>
        </Grid>

        <Grid item xs={0.8}>
        <Box style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 10, width: WIDTH*5/100}}>
          <Box component="img"
                style={{ width: WIDTH * 1 / 100, height: HEIGHT* 2/100, marginRight: WIDTH*0.5/100 }}
                src={require('../../../assets/Home/user.png')} />
          <Typography style={{color: 'black'}} variant="body1">Login</Typography>
        </Box>
        </Grid>

        <Grid item xs={0.8}>
        <Box style={{display: 'flex', alignItems:'center', justifyContent: 'center', padding: 10, width: WIDTH*5/100}}>
          <Box component="img"
                style={{ width: WIDTH * 1 / 100, height: HEIGHT* 2/100, marginRight: WIDTH*0.5/100 }}
                src={require('../../../assets/Home/Bucket.png')} />
          <Typography style={{color: 'black'}} variant="body1">Cart</Typography>
        </Box>
        </Grid>
        
        </Grid>

      </Toolbar>
    </AppBar>
  );
};

export default Header;