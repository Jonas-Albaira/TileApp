"use client";
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const BottomNavigationBar = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
            <BottomNavigation value={value} onChange={handleChange}>
                <Link href="/" passHref>
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                </Link>
                <Link href="/search" passHref>
                    <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                </Link>
                <Link href="/favorites" passHref>
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                </Link>
                <Link href="/profile" passHref>
                    <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                </Link>
            </BottomNavigation>
        </div>
    );
};

export default BottomNavigationBar;

