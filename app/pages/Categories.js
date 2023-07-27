import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Placeholder images from Lorem Picsum
const placeholderImages = [
    'https://picsum.photos/200/200',
    'https://picsum.photos/201/201',
    'https://picsum.photos/202/202',
    'https://picsum.photos/203/203',
    'https://picsum.photos/204/204',
    'https://picsum.photos/205/205',
    'https://picsum.photos/206/206',
    'https://picsum.photos/207/207',
    'https://picsum.photos/208/208', // New image 1
    'https://picsum.photos/209/209', // New image 2
    'https://picsum.photos/210/210', // New image 3
    'https://picsum.photos/211/211', // New image 4
    'https://picsum.photos/212/212', // New image 5
    'https://picsum.photos/213/213', // New image 6
    'https://picsum.photos/214/214', // New image 7
    'https://picsum.photos/215/215', // New image 8
];

const iconData = [
    { icon: placeholderImages[0], label: 'Politics' },
    { icon: placeholderImages[1], label: 'Business' },
    { icon: placeholderImages[2], label: 'Technology' },
    { icon: placeholderImages[3], label: 'Entertainment' },
    { icon: placeholderImages[4], label: 'Sports' },
    { icon: placeholderImages[5], label: 'Health' },
    { icon: placeholderImages[6], label: 'Science' },
    { icon: placeholderImages[7], label: 'Environment' },
    { icon: placeholderImages[8], label: 'Education' },
    { icon: placeholderImages[9], label: 'Crime' },
    { icon: placeholderImages[10], label: 'International' },
    { icon: placeholderImages[11], label: 'Lifestyle' },
    { icon: placeholderImages[12], label: 'Travel' },
    { icon: placeholderImages[13], label: 'Food' },
    { icon: placeholderImages[14], label: 'Weather' },
    { icon: placeholderImages[15], label: 'Arts' },
];

const Categories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Display 4 slides in a row
        slidesToScroll: 4, // Scroll 4 slides at a time (2 rows x 4 columns)
        initialSlide: 0,
    };

    return (
        <Slider {...settings}>
            {iconData.map((data, index) => (
                <div key={index}>
                    <Paper
                        elevation={0} // No shadow
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '20px', // Circular
                            overflow: 'hidden', // Make sure the image stays circular
                        }}
                    >
                        <img src={data.icon} alt={data.label} style={{ width: '100px', height: '100px', borderRadius: 7 }} />
                        <Typography variant="subtitle1" component="div">
                            {data.label}
                        </Typography>
                    </Paper>
                </div>
            ))}
        </Slider>
    );
};
export default Categories;