import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const popularHashtags = [
    'love',
    'instagood',
    'photooftheday',
    'fashion',
    'beautiful',
    'happy',
    'cute',
    'tbt', // Throwback Thursday
    'follow',
    'like4like',
    'followme',
    'picoftheday',
    'art',
    'selfie',
    'summer',
    'instadaily',
    'friends',
    'repost',
    'nature',
    'girl',
    'fun',
    // Add more popular hashtags here
];

const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const PopularTags = () => {
    const [shuffledHashtags, setShuffledHashtags] = useState([]);

    useEffect(() => {
        // Shuffle the popular hashtags array and select the first 50 elements
        const shuffledTags = shuffleArray(popularHashtags).slice(0, 50);
        setShuffledHashtags(shuffledTags);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6, // Display 4 slides in a row
        slidesToScroll: 4, // Scroll 4 slides at a time (2 rows x 4 columns)
        initialSlide: 0,
    };

    return (
        <React.Fragment>
            <Slider {...settings}>
                {shuffledHashtags.map((tag, index) => (
                    <div key={index}>
                        <Paper
                            elevation={0} // No shadow
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', // Circular
                                overflow: 'hidden',
                                marginRight:'5px',// Width of the oval-shaped container
                                height: '20px', // Height of the oval-shaped container
                                borderRadius: '50%',// Make it oval-shaped
                                backgroundColor: '#f0f0f0', // Background color for the oval-shaped container
                            }}
                        >
                            <Typography variant="subtitle2" component="div" style={{ fontSize: '10px' }}>
                                #{tag}
                            </Typography>
                        </Paper>
                    </div>
                ))}
            </Slider>
        </React.Fragment>
    );
};

export default PopularTags;
