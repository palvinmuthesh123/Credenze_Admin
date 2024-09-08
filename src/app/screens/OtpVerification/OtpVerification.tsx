import React, { useState, ChangeEvent } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { GET_CURRENT_CUSTOMER, GET_OTP, RESEND_OTP, VERIFY_OTP } from '../../redux/apis';
import { useNavigate } from 'react-router-dom';

const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [change, setChange] = useState(true);
  const [mobile, setMobile] = useState('');
  const history = useNavigate();
  const [yes, setYes] = useState(false);

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement> | any) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    if(change) {
      if(mobile && mobile.length==10) {
        getContents();
      }
      else {
        
      }
    }
    else {
      var otps = otp[0] + otp[1] + otp[2] + otp[3]
      getContents1(otps);
    }
    // setChange(!change);
    // const otpCode = otp.join('');
    // console.log('OTP Code:', otpCode);
  };

  const handleResend = async(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    console.log('Resend OTP');
    await fetch(`${RESEND_OTP}/${mobile}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    // Add resend OTP logic here
  };

  const getContents = async() => {
    const response = await fetch(`${GET_OTP}/${mobile}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.Status=="SUCCESS" && !data.isCustomerExists) {
        setYes(false);
        history('/profiledetails', {state: mobile});
        // setChange(!change)
      }
      else if(data.Status=="SUCCESS" && data.isCustomerExists) {
        setYes(true);
        setChange(!change)
      }
    })
    .catch(error => console.error(error));
  }

  const getContents1 = async(otps: any) => {
    const response = await fetch(`${VERIFY_OTP}/${mobile}/${otps}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data && data.token){
        localStorage.setItem('token', data.token);
        getMe(data.token);
      }
    })
    .catch(error => console.error(error));
  }

  const getMe = async(val: any) => {
    const response = await fetch(`${GET_CURRENT_CUSTOMER}`, {
      method: 'GET',
      // mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${val}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('customerId', data.customerId);
        localStorage.setItem('firstName', data.firstName);
        localStorage.setItem('lastName', data.lastName);
        localStorage.setItem('email', data.email);
        localStorage.setItem('mobileNumber', data.mobileNumber);
        // if(!yes) {
        //   history('/profiledetails', {state: mobile});
        // }
        // else {
          history('/');
        // }
      })
      .catch(error => console.error('Fetch error:', error));
  }

  return (
    <>
      <Header/>
      <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="90vh"
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
        height={'80vh'}
        // maxWidth="400px"
      >
        <Box mb={2}>
          <img
            src={require('../../../assets/otp.jpg')}
            alt="OTP Verification"
            style={{ width: '250px', height: 'auto' }}
          />
        </Box>
        <Typography variant="h5" mb={2}>
          OTP Verification
        </Typography>
        
        <Typography variant="body1" mb={2} align="center">
          {!change ? "Enter the OTP sent to +91 987987333" : "We will send you one-time password to you mobile number"}
        </Typography>
        {!change ? <>
          <Box display="flex" justifyContent="center" mb={2}>
            {otp.map((value, index) => (
              <TextField
                key={index}
                id={`otp-${index}`}
                type="text"
                inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '18px' } }}
                value={value}
                onChange={(e) => handleChange(index, e)}
                variant="outlined"
                margin="dense"
                sx={{
                  mx: 1,
                  width: 60,
                  height: 60,
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
            ))}
          </Box>
          <Box flexDirection={'row'} display={'flex'}>
            <Typography style={{color: '#B9B9B9'}}>Didn't you receive the OTP ?</Typography>
            <Link href="#" onClick={handleResend} mb={2} underline="hover">
              Resend OTP
            </Link>
          </Box>
          </> : <Box>
          <Typography variant="body1" align="center">
            Enter Mobile Number
          </Typography>
          <TextField
                value={mobile}
                type="text"
                inputProps={{ maxLength: 10, style: { textAlign: 'center', fontSize: '18px' } }}
                variant="outlined"
                margin="dense"
                onChange={(val)=>{setMobile(val.target.value); console.log(val.target.value, "MMMMMMMMMMM")}}
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
          </Box> }

        <Button
          variant="contained"
          style={{backgroundColor: '#DC2626', borderRadius: 10}}
          // color="primary"
          onClick={handleVerify}
          sx={{ mt: 2, width: '15%' }}
        >
          {!change ? "Verify" : "Get OTP"}
        </Button>
      </Box>
    </Box>
      <Footer/>
    </>
  );
};

export default OTPVerification;
