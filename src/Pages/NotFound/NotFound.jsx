import React from 'react';
import not from '../../images/gifs/not.gif';

const NotFound = () => {
    return (
        <div className='container mx-auto mt-10'>
            <img className='w-full' src={not} alt="notfound" />
        </div>
    );
};

export default NotFound;