import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Paper } from '@mui/material';
import { Favorite, Share, Visibility } from '@mui/icons-material';
import InfiniteScroll from 'react-infinite-scroll-component';
import Slider from "react-slick";

const iconData = [
    { icon: 'https://picsum.photos/200/200', label: 'Politics' },
    { icon: 'https://picsum.photos/201/201', label: 'Business' },
    { icon: 'https://picsum.photos/202/202', label: 'Technology' },
    { icon: 'https://picsum.photos/203/203', label: 'Entertainment' },
    { icon: 'https://picsum.photos/204/204', label: 'Sports' },
    { icon: 'https://picsum.photos/205/205', label: 'Health' },
    { icon: 'https://picsum.photos/206/206', label: 'Science' },
    { icon: 'https://picsum.photos/207/207', label: 'Environment' },
    { icon: 'https://picsum.photos/208/208', label: 'Education' },
    { icon: 'https://picsum.photos/209/209', label: 'Crime' },
    { icon: 'https://picsum.photos/210/210', label: 'International' },
    { icon: 'https://picsum.photos/211/211', label: 'Lifestyle' },
    { icon: 'https://picsum.photos/212/212', label: 'Travel' },
    { icon: 'https://picsum.photos/213/213', label: 'Food' },
    { icon: 'https://picsum.photos/214/214', label: 'Weather' },
    { icon: 'https://picsum.photos/215/215', label: 'Arts' },
];

const Tiles = () => {
    const [newsData, setNewsData] = useState([]); // This will hold all loaded news data
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [searchQuery, setSearchQuery] = useState('toronto'); // Default search query

    useEffect(() => {
        fetchNewsData();
    }, [searchQuery]); // Fetch data whenever the search query changes

    const fetchNewsData = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&apiKey=b86d5b8320ae461780ee345be49abf99&page=${page}`);
            const data = await response.json();

            if (data.articles.length === 0) {
                // No more articles to load
                setHasMore(false);
            } else {
                setNewsData((prevData) => [...prevData, ...data.articles]); // Concatenate new articles with the existing newsData
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    const handleCarouselItemClick = (label) => {
        setSearchQuery(label.toLowerCase()); // Set the clicked carousel card label as the new search query
        setNewsData([]); // Clear existing news data to show the new search results
        setPage(1); // Reset page number when changing the search query
        setHasMore(true); // Reset hasMore flag
    };

    const renderCards = () => {
        return newsData.map((item, index) => (
            <Card key={index} style={{ display: 'flex', flexDirection: 'column', borderRadius: 0, marginBottom: 25 }}>
                {item.urlToImage && (
                    <CardMedia
                        component="img"
                        style={{ width: '100%', objectFit: 'cover', height: 200 }}
                        image={item.urlToImage}
                        title={item.title}
                    />
                )}
                <CardContent style={{ flex: '1 1 auto', borderBottom: '1px solid #ccc', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', marginBottom: 'auto' }}>
                        {item.description}
                    </Typography>
                </CardContent>
                <div style={{ marginTop: 'auto' }}>
                    <CardActions disableSpacing style={{ padding: '8px 16px' }}>
                        <IconButton aria-label="Reads">
                            <Visibility />
                            <Typography variant="body2" component="span" style={{ marginLeft: 4 }}>
                                {item.reads}
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="Shares">
                            <Share />
                            <Typography variant="body2" component="span" style={{ marginLeft: 4 }}>
                                {item.shares}
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="Likes">
                            <Favorite />
                            <Typography variant="body2" component="span" style={{ marginLeft: 4 }}>
                                {item.likes}
                            </Typography>
                        </IconButton>
                    </CardActions>
                </div>
            </Card>
        ));
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Display 4 slides in a row
        slidesToScroll: 4, // Scroll 4 slides at a time (2 rows x 4 columns)
        initialSlide: 0,
    };

    return (
        <div>
            <h2 style={{ textAlign: 'left', margin: '16px 0' }}>For You</h2>
            <Slider {...settings}>
                {iconData.map((data, index) => (
                    <div key={index} onClick={() => handleCarouselItemClick(data.label)}>
                        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', overflow: 'hidden' }}>
                            <img src={data.icon} alt={data.label} style={{ width: '100px', height: '100px', borderRadius: 7 }} />
                            <Typography variant="subtitle1" component="div">
                                {data.label}
                            </Typography>
                        </Paper>
                    </div>
                ))}
            </Slider>
            <InfiniteScroll
                dataLength={newsData.length}
                next={fetchNewsData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                {renderCards()}
            </InfiniteScroll>
        </div>
    );
};


export default Tiles;
