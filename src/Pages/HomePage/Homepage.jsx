import React from 'react';
import ShowCollege from './HomeComponent/ShowCollege';
import Gallery from './HomeComponent/Gallery';
import ResearchPaper from './HomeComponent/ResearchPaper';
import Review from './HomeComponent/Review';

const Homepage = () => {
    return (
        <div>
            <ShowCollege></ShowCollege>
            <Gallery></Gallery>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Homepage;