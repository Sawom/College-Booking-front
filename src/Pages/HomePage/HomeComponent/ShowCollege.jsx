import React, { useEffect, useState } from "react";
import CollegeInfo from './CollegeInfo';

const ShowCollege = () => {
  const [college, setCollege] = useState([]);

  // load home college data
  useEffect(() => {
    fetch("http://localhost:5000/homedata")
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      })
  }, []);

  // searching
  useEffect(() => {
    getCollege();
  }, []);

  // get college for searching
  const getCollege = async () => {
    let result = await fetch("http://localhost:5000/homedata");
    result = await result.json();
    setCollege(result);
  };

  const handleSearch = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(
        `http://localhost:5000/search/${key}`
      )
      result = await result.json();
      if (result) {
        setCollege(result);
      }
    } else {
      getCollege();
    }
  };

  return (
    <div className="container mx-auto">
      {/* search */}
      <div className="text-center mt-10">
        <input
          type="text"
          placeholder="Search by college name"
          onChange={handleSearch}
          className="input input-bordered border-2 w-80 text-center  "
        />
      </div>
      
      {/* show college */}
      <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 my-10 px-4'>
        {
            college.length > 0 ?
            college.map( (clgData) => <CollegeInfo clgData={clgData} key={clgData._id} ></CollegeInfo> )
            : <h1 className='text-xl'> No result has found! </h1>
        }
        
      </div>
    </div>
  );
};

export default ShowCollege;
