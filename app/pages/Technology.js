import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Container } from '@mui/material';

const API_KEY = 'ea2257d2c5d55c79e4b6dd598f9cabbc';
const API_URL = `https://gnews.io/api/v4/search?q=Technology&apikey=${API_KEY}`;

const Culture = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get(API_URL)
            .then(response => {
                const { articles } = response.data;
                setNewsData(articles.slice(0, 3)); // Display only the first 3 articles
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <React.Fragment>
            <h2>Technology</h2>
            <Container maxWidth="md">
                {newsData.map((article, index) => (
                    <Card key={index} sx={{ my: 2, boxShadow: 'none' }}>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                            <img
                                src={article.image} // Assuming the API provides the image URL
                                alt={article.title}
                                style={{ marginRight: '1rem', width: '200px', height: 'auto', objectFit: 'cover' }}
                            />
                            <Typography variant="h6" component="h2" style={{fontSize:'14px'}}>
                                {article.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Container></React.Fragment>
    );
};

export default Culture;
