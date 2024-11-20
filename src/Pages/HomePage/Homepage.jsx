import React from 'react';
import ShowCollege from './HomeComponent/ShowCollege';
import Gallery from './HomeComponent/Gallery';
import ResearchPaper from './HomeComponent/ResearchPaper';

const Homepage = () => {
    return (
        <div>
            <ShowCollege></ShowCollege>
            <Gallery></Gallery>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Homepage;