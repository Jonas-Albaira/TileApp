import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
const PopularSights = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b86d5b8320ae461780ee345be49abf99');
                const data = await response.json();
                setNewsData(data.articles);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNewsData();
    }, []);

    const renderCards = () => {
        return newsData.map((item, index) => (
            <Card key={index} style={{ display: 'flex' }} className='carousel-cards'>
                <CardMedia
                    style={{ width: 200, height: 100,margin:10,borderRadius:5 }}
                    image={item.urlToImage}
                    title={item.title}
                />
                <CardContent style={{ flex: '1 1 auto' }}>
                    <Typography variant="h5" component="h2" >
                        {item.title}
                    </Typography>
                </CardContent>
            </Card>
        ));
    };

    return (
        <React.Fragment>
            <h2>Popular Sights</h2>
            <Carousel
                animation="slide"
                autoPlay
                interval={5000} // Adjust the interval duration (in milliseconds) as desired
                indicators={false}
                timeout={500}
                swipe={false}
                visibleSlides={2}
                stopAutoPlayOnHover
            >
                {renderCards()}
            </Carousel>
        </React.Fragment>
    );
};

export default PopularSights;
