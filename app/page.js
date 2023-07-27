"use client";
import Head from 'next/head';
import PopularSights from './pages/PopularSights';
import Categories from './pages/Categories';
import FeaturedNews from './pages/FeaturedNews';
import BottomMenuBar from './pages/BottomMenuBar';
import NavBar from './pages/NavBar'
import Search from './pages/Search'
import CBCNews from "@/app/pages/CBCNews";
import SportsCarousel from "@/app/pages/SportsCarousel";
import PopularTags from "@/app/pages/PopularTags";
import Tiles from "@/app/pages/Tiles";
import React, { useState } from 'react';
import Fashion from "@/app/pages/Fashion";
import Culture from "@/app/pages/Culture";
import Funny from "@/app/pages/Funny";
import { Grid } from '@material-ui/core';
import Technology from "@/app/pages/Technology";


export default function Home() {

    const [selectedCategory, setSelectedCategory] = useState('Toronto');

    const handleCategoryClick = (categoryLabel) => {
        setSelectedCategory(categoryLabel);
    };

  return (
      <div style={{padding:15}}>
        <Head>
          <title>News</title>
          <meta name="description" content="Your newsfeed app description" />
        </Head>

          <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                  {/* Content for the first grid item */}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                  <main>
                      <NavBar/>
                      <PopularSights />
                      <PopularTags />
                      <Fashion />
                      <Technology />
                      <Funny />
                      <SportsCarousel />
                      <Tiles searchQuery={selectedCategory} />

                  </main>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                  {/* Content for the third grid item */}
              </Grid>
          </Grid>


        <footer>
            <BottomMenuBar />
        </footer>
      </div>
  );
}
