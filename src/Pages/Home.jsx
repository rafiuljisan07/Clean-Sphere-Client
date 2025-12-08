import React from 'react';
import Category from '../Components/Category';
import RecentIssues from '../Components/RecentIssues';
import Banner from '../Components/Banner';
import Extra from '../Components/Extra';

const Home = () => {
    return (
        <div className='space-y-10'>
             <title>Clean Sphere | Home</title>
            <Banner/>
            <Category />
            <RecentIssues />
            <Extra/>

        </div>
    );
};

export default Home;