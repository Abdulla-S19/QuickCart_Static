import React from "react";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "-100px 0",
      }}
    >
      <Container>
        <Grid container spacing={4} sx={{ marginBottom: "30px" }} className="d-flex justify-content-between">
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Online Shopping
            </Typography>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home & Living</li>
              <li>Beauty</li>
              <li>Gift Cards</li>
              <li>Our Insider</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Partner With Us</li>
              <li>Affiliate Program</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Customer Support
            </Typography>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Terms of Use</li>
              <li>Track Orders</li>
              <li>Shipping Info</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Experience Our App
            </Typography>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Google Play Store</li>
              <li>Apple App Store</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Stay Connected
            </Typography>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>
                <Typography variant="body2" color="inherit">
                  100% Authentic products, guaranteed.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="inherit">
                  Return items within 14 days of receiving your order.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "#fff", marginBottom: "30px" }} />

        <Typography variant="body2" align="center" color="inherit">
          © 2025 www.quickcart.com. All rights reserved. A E-commerce Company
        </Typography>
        <Typography variant="body2" align="center" color="inherit">
          Registered Office Address: QuickCart Retailers, 1234  Street, Town, 56789, Dreamland
        </Typography>
        <Typography variant="body2" align="center" color="inherit">
          Telephone: +1-800-9999999
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
