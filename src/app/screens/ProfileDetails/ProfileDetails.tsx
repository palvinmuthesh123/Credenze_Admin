import React, { useState, ChangeEvent } from 'react';
import { Box, TextField, Button, Typography, Link, Grid } from '@mui/material';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SIGN_UP } from '../../redux/apis';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfileDetails: React.FC = () => {
  const history = useNavigate();
  const location = useLocation();
  // const data = location.state;
  const [otp, setOtp] = useState("");
  const [mobile, setMobile] = useState(location.state);
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');

  const postContents = async () => {
    
    var token = localStorage.getItem('token')

    let params = {
      mobileNumber: mobile,
      firstName: firstName,
      lastName: secondName,
      email: email,
      otp: otp
    }
    
    await fetch(SIGN_UP, {
      method: 'POST',
      // mode: 'no-cors',
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
      // const token = result.token;
      localStorage.setItem('token', result.token);
        history('/')
    })
    .catch(error => console.error(error));
  }

  return (
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // minHeight="90vh"
        bgcolor="#f5f5f5"
        px={2}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={4}
          bgcolor="#fff"
          borderRadius={2}
          boxShadow={3}
          width="90%"
          marginBottom={'5vh'}
        // height={'80vh'}
        // maxWidth="400px"
        >
          <Typography variant="h5" mb={2}>
            Profile Details
          </Typography>

          <Grid container spacing={2} alignItems={'center'}>
          
          <Grid item xs={12} lg={6} justifyContent={'flex-end'} display={'flex'}>
            <Box>
              <TextField
                value={firstName}
                placeholder='Enter First Name'
                type="text"
                inputProps={{ maxLength: 10, style: { fontSize: '18px' } }}
                variant="outlined"
                margin="dense"
                onChange={(val) => { setFirstName(val.target.value);}}
                sx={{
                  mx: 1,
                  width: 250,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent', // Remove border for all sides initially
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent', // Hover state
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent', // Focused state
                    },
                    '&:after': {
                      borderBottomColor: '#2743FD', // Keep the bottom border, customize color
                    },
                  },
                  '& input': {
                    borderBottom: '2px solid', // Add bottom border
                    borderBottomColor: '#2743FD', // Bottom border color
                    borderLeftColor: 'transparent', // Transparent left border
                    borderRightColor: 'transparent', // Transparent right border
                    borderTopColor: 'transparent', // Transparent top border
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box>
              <TextField
                value={secondName}
                placeholder='Enter Last Name'
                type="text"
                inputProps={{ maxLength: 10, style: { fontSize: '18px' } }}
                variant="outlined"
                margin="dense"
                onChange={(val) => { setSecondName(val.target.value);}}
                sx={{
                  mx: 1,
                  width: 250,
                  // height: 60,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent', // Remove border for all sides initially
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent', // Hover state
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent', // Focused state
                    },
                    '&:after': {
                      borderBottomColor: '#2743FD', // Keep the bottom border, customize color
                    },
                  },
                  '& input': {
                    borderBottom: '2px solid', // Add bottom border
                    borderBottomColor: '#2743FD', // Bottom border color
                    borderLeftColor: 'transparent', // Transparent left border
                    borderRightColor: 'transparent', // Transparent right border
                    borderTopColor: 'transparent', // Transparent top border
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} justifyContent={'flex-end'} display={'flex'}>
            <Box>
              <TextField
                value={email}
                placeholder='Email'
                type="text"
                inputProps={{ maxLength: 10, style: { fontSize: '18px' } }}
                variant="outlined"
                margin="dense"
                onChange={(val) => { setEmail(val.target.value); console.log(val.target.value, "MMMMMMMMMMM") }}
                sx={{
                  mx: 1,
                  width: 250,
                  // height: 60,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent', // Remove border for all sides initially
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent', // Hover state
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent', // Focused state
                    },
                    '&:after': {
                      borderBottomColor: '#2743FD', // Keep the bottom border, customize color
                    },
                  },
                  '& input': {
                    borderBottom: '2px solid', // Add bottom border
                    borderBottomColor: '#2743FD', // Bottom border color
                    borderLeftColor: 'transparent', // Transparent left border
                    borderRightColor: 'transparent', // Transparent right border
                    borderTopColor: 'transparent', // Transparent top border
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box>
              <TextField
                value={otp}
                placeholder='OTP'
                type="text"
                inputProps={{ maxLength: 10, style: { fontSize: '18px' } }}
                variant="outlined"
                margin="dense"
                onChange={(val) => { setOtp(val.target.value);}}
                sx={{
                  mx: 1,
                  width: 250,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent', // Remove border for all sides initially
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent', // Hover state
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent', // Focused state
                    },
                    '&:after': {
                      borderBottomColor: '#2743FD', // Keep the bottom border, customize color
                    },
                  },
                  '& input': {
                    borderBottom: '2px solid', // Add bottom border
                    borderBottomColor: '#2743FD', // Bottom border color
                    borderLeftColor: 'transparent', // Transparent left border
                    borderRightColor: 'transparent', // Transparent right border
                    borderTopColor: 'transparent', // Transparent top border
                  },
                }}
              />
            </Box>
          </Grid>
          
          </Grid>

          <Button
            variant="contained"
            style={{ backgroundColor: '#DC2626', borderRadius: 10 }}
            onClick={()=>{postContents();}}
            sx={{ mt: 2, width: '15%' }}
          >
            {"Submit"}
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProfileDetails;
