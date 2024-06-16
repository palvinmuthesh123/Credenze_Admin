import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6, borderTop: '1px solid #e0e0e0' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3.6}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Credenze
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Best information about the company goes here but now lorem ipsum is. Best information about the company goes here but now lorem ipsum is. Best information about the company goes here but now lorem ipsum is.
          </Typography>
          <Box>
            <IconButton color="inherit" href="https://www.facebook.com">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://www.twitter.com">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://www.youtube.com">
              <YouTube />
            </IconButton>
          </Box>
        </Grid>

        {[
          {
            title: 'About',
            links: ['About Us', 'Find Store', 'Categories', 'Blogs'],
          },
          {
            title: 'Partnership',
            links: ['About Us', 'Find Store', 'Categories', 'Blogs'],
          },
          {
            title: 'Information',
            links: ['Help Center', 'Money Refund', 'Shipping', 'Contact us'],
          },
          {
            title: 'For users',
            links: ['Login', 'Register', 'Settings', 'My Orders'],
          },
        ].map((section) => (
          <Grid item xs={12} md={1.6} key={section.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {section.title}
            </Typography>
            {section.links.map((link) => (
              <Link href="#" variant="body2" color="textSecondary" display="block" key={link}>
                {link}
              </Link>
            ))}
          </Grid>
        ))}

        <Grid item xs={12} md={2}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Get app
          </Typography>
          <Box>
            <Link href="https://www.apple.com/app-store/">
              <img src={require('../../../assets/Home/appstore.jpg')} alt="App Store" style={{ width: 140, marginRight: 8 }} />
            </Link>
            <Link href="https://play.google.com/store">
              <img src={require('../../../assets/Home/playstore.jpg')} alt="Google Play Store" style={{ width: 140 }} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;