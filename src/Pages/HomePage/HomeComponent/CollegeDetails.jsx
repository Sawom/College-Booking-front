import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from "@smastrom/react-rating";

const CollegeDetails = () => {
    const {id} = useParams();
    const[details, setDetails] = useState({}); 
    
    useEffect( ()=>{
        fetch(`http://localhost:5000/homedata/${id}`)
        .then(data => data.json() )
        .then(data => setDetails(data) )
    }, [] )

    return (
        <div className='container mx-auto mt-5 px-2 '>
            {/* 1 */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full shadow-2xl p-2 gap-4">
                <figure><img className='w-50 ' src={details.img} alt="laptops" /></figure>
                <div className=" text-left mt-10">
                    <h2 className="card-title font-bold" style={{color: '#212E52'}} > {details.collegeName} </h2>
                    <br />
                    <Rating style={{ maxWidth: 100 }} value={details.ratings} readOnly  />
                    
                </div>
            </div>
            {/* 2 */}
            <div className='mt-10'>
                <h1 className='lg:text-4xl md:text-3xl text-xl font-bold' >More Information</h1> <br />
                <div >
                    <p> <span className='font-bold'>Display:</span>  </p>
                    
                   
                </div>
                
            </div>
        </div>
    );
};

export default CollegeDetails;