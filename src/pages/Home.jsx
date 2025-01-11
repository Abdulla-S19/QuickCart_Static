import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function Home() {
    const [clothingItems, setClothingItems] = useState([]);
    const [electronicsItems, setElectronicsItems] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [testimonial, setTestimonial] = useState("");
    useEffect(() => {
        setClothingItems([
            { id: 1, name: 'T-Shirt', price: '$25', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-t-shirt/f/m/b/xl-polo-tshirt-2-combo-leemak-original-imah3yw5khygszxt.jpeg?q=70', category: 'Clothing' },
            { id: 2, name: 'Jeans', price: '$50', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/b/c/d/30-vg-18-vogaan-original-imah6hw2q4nagsb9.jpeg?q=70', category: 'Clothing' },
            { id: 3, name: 'Jacket', price: '$75', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/8/u/6/s-1-no-jk-40-black-kashian-original-imah5f96asrazt9z.jpeg?q=70', category: 'Clothing' },
        ]);
        setElectronicsItems([
            { id: 1, name: 'Headphones', price: '$100', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/ksw4ccw0/headphone/e/b/0/rockerz-450-boat-original-imag6cqpa23frzap.jpeg?q=70', category: 'Electronics' },
            { id: 2, name: 'Smartphone', price: '$500', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/z/u/-original-imagtxvtmxpagdpn.jpeg?q=70', category: 'Electronics' },
            { id: 3, name: 'Water Purifier', price: '$1000', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/m/6/a/copper-audi-12-ltr-water-filter-aqua-fresh-original-imagswzwms96dezs.jpeg?q=70', category: 'Electronics' },
        ]);
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name || !testimonial) {
            alert('Please fill out both fields.');
        } else {
            alert('Thank you for your feedback!');
            setName("");  
            setTestimonial("");  
        }
    };
    return (
        <div style={{ backgroundColor: '#2C3E50', color: '#fff' }}>
            <Box
                sx={{
                    backgroundImage: 'url("https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '50px',
                    textAlign: 'center',
                    height: '75vh',
                    paddingTop: '100px',
                    boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.6)', 
                }}
            >
                <Box sx={{ textAlign: 'center', color: '#fff' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '3rem' }}>Welcome to QuickCart</Typography>
                    <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: '300', fontSize: '1.25rem' }}>Your one-stop shop for all your needs</Typography>
                    <Button variant="contained" color="primary"
                        sx={{
                            padding: '12px 24px',
                            fontWeight: 'bold',
                            backgroundColor: '#FF5722',
                            '&:hover': { backgroundColor: '#e64a19' },
                        }}
                    >Shop Now
                    </Button>
                </Box>
            </Box>

            <Container sx={{ paddingTop: '80px', paddingBottom: '60px' }}>
                <Typography variant="h4" align="center" sx={{ marginBottom: '40px', fontWeight: 'bold', color: '#FFEB3B' }}>
                    Featured Clothing Items
                </Typography>
                <Grid container spacing={6} justifyContent="space-between">
                    {clothingItems.length === 0 ? (
                        <Typography variant="h6" align="center" sx={{ width: '100%', padding: '20px' }}>
                            No clothing items available at the moment.
                        </Typography>
                    ) : (
                        clothingItems.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id}>
                                <Box sx={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        backgroundColor: '#fff',
                                        borderRadius: '12px',
                                        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                                        },
                                    }} >
                                    <img src={item.imageUrl} alt={item.name} width="100%" />
                                    <Typography variant="body1" sx={{ marginTop: '10px', fontWeight: '500', color: '#424242' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ marginTop: '5px', fontWeight: 'bold', color: '#FF5722' }}>
                                        {item.price}
                                    </Typography>
                                    <Button variant="contained" color="primary"
                                        sx={{
                                            marginTop: '10px',
                                            backgroundColor: '#1A237E',
                                            '&:hover': { backgroundColor: '#3949AB' },
                                        }}
                                    >
                                        Shop Now
                                    </Button>
                                </Box>
                            </Grid>
                        ))
                    )}
                </Grid>
                <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
                    <Button  variant="outlined" sx={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            backgroundColor: '#FFEB3B',
                            color: '#1A237E',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            '&:hover': { backgroundColor: '#fbc02d', borderColor: '#fbc02d' },
                        }}>Explore More Clothing
                    </Button>
                </Box>
            </Container>

            <Container sx={{ paddingTop: '80px', paddingBottom: '60px' }}>
                <Typography variant="h4" align="center" sx={{ marginBottom: '40px', fontWeight: 'bold', color: '#FFEB3B' }}>
                    Featured Electronics Items
                </Typography>
                <Grid container spacing={6} justifyContent="space-between">
                    {electronicsItems.length === 0 ? (
                        <Typography variant="h6" align="center" sx={{ width: '100%', padding: '20px' }}>
                            No electronics items available at the moment.
                        </Typography>
                    ) : (
                        electronicsItems.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id}>
                                <Box sx={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        backgroundColor: '#fff',
                                        borderRadius: '12px',
                                        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}>
                                    <img src={item.imageUrl} alt={item.name} width="100%" />
                                    <Typography variant="body1" sx={{ marginTop: '10px', fontWeight: '500', color: '#424242' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ marginTop: '5px', fontWeight: 'bold', color: '#FF5722' }}>
                                        {item.price}
                                    </Typography>
                                    <Button variant="contained" color="primary"
                                        sx={{
                                            marginTop: '10px',
                                            backgroundColor: '#1A237E',
                                            '&:hover': { backgroundColor: '#3949AB' },
                                        }}>
                                        Shop Now
                                    </Button>
                                </Box>
                            </Grid>
                        ))
                    )}
                </Grid>
                <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
                    <Button variant="outlined" sx={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            backgroundColor: '#FFEB3B',
                            color: '#1A237E',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            '&:hover': { backgroundColor: '#fbc02d', borderColor: '#fbc02d' },
                        }}>
                        Explore More Electronics
                    </Button>
                </Box>
            </Container>

            <Box sx={{ backgroundColor: '#002244', padding: '60px 20px', color: '#ffffff' }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ marginBottom: '40px', fontWeight: 'bold', fontSize: '2.5rem', color: '#ffcc00' }}>
                        What We Are Best At
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ textAlign: 'center', padding: '30px', backgroundColor: '#003366', borderRadius: '15px', boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'translateY(-5px)', backgroundColor: '#00509e' } }}>
                                <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: '600', color: '#ffcc00' }}>
                                    100% Authentic Products
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#d9d9d9', lineHeight: '1.8' }}>
                                    We guarantee authenticity for all products sold on QuickCart.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ textAlign: 'center', padding: '30px', backgroundColor: '#003366', borderRadius: '15px', boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'translateY(-5px)', backgroundColor: '#00509e' } }}>
                                <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: '600', color: '#ffcc00' }}>
                                    Free Shipping
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#d9d9d9', lineHeight: '1.8' }}>
                                    Enjoy free shipping on all orders across the country.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ textAlign: 'center', padding: '30px', backgroundColor: '#003366', borderRadius: '15px', boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'translateY(-5px)', backgroundColor: '#00509e' } }}>
                                <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: '600', color: '#ffcc00' }}>
                                    Easy Returns
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#d9d9d9', lineHeight: '1.8' }}>
                                    Hassle-free returns for all orders within 14 days.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>



            <Box sx={{ backgroundColor: '#f4f4f9', padding: '60px 20px' }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ marginBottom: '40px', fontWeight: 'bold', fontSize: '2.5rem', color: '#ffcc00' }}>
                        Customer Reviews
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{
                                textAlign: 'center',
                                padding: '30px',
                                backgroundColor: '#003366', 
                                borderRadius: '15px',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s, background-color 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    backgroundColor: '#00509e' 
                                }
                            }}>
                                <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: '600', color: '#ffcc00' }}>
                                    Sarah Williams
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#d9d9d9', lineHeight: '1.8' }}>
                                    This is hands down the best shopping experience I've had! Quality is excellent and shipping was super fast.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{
                                textAlign: 'center',
                                padding: '30px',
                                backgroundColor: '#003366', 
                                borderRadius: '15px',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s, background-color 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    backgroundColor: '#00509e' 
                                }
                            }}>
                                <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: '600', color: '#ffcc00' }}>
                                    Michael Johnson
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#d9d9d9', lineHeight: '1.8' }}>
                                    Fantastic quality and excellent customer service. I will definitely be shopping here again!
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{
                                textAlign: 'center',
                                padding: '30px',
                                backgroundColor: '#003366', 
                                borderRadius: '15px',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s, background-color 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    backgroundColor: '#00509e'}}}>
                                <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: '600', color: '#ffcc00' }}>
                                    Emily Davis
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#d9d9d9', lineHeight: '1.8' }}>
                                    I'm extremely happy with my purchase! The product quality is exceptional and it exceeded my expectations.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            {/* Feedback form */}

            <Box sx={{ backgroundColor: '#2C3E50', padding: '60px 20px' }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ marginBottom: '40px', fontWeight: 'bold', fontSize: '2.5rem', color: '#FFEB3B' }}>
                        Share Your Experience with Us
                    </Typography>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={8} md={6}>
                            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleFormSubmit}>
                                <Typography variant="h6" sx={{ color: '#fff' }}>Your Name</Typography>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    style={{
                                        padding: '12px 20px',
                                        border: '1px solid #ddd',
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        marginBottom: '20px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}/>

                                <Typography variant="h6" sx={{ color: '#fff' }}>Your Testimonial</Typography>
                                <textarea value={testimonial} onChange={(e) => setTestimonial(e.target.value)}
                                    placeholder="Write your testimonial"
                                    rows="4"
                                    style={{
                                        padding: '12px 20px',
                                        border: '1px solid #ddd',
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        marginBottom: '20px',
                                        resize: 'none',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                ></textarea>

                                <Button variant="contained" color="primary"
                                    sx={{
                                        width: '100%',
                                        padding: '12px 0',
                                        backgroundColor: '#FF5722',
                                        '&:hover': { backgroundColor: '#e64a19' },
                                    }}
                                    type="submit"
                                >Share Your Feedback
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Home;