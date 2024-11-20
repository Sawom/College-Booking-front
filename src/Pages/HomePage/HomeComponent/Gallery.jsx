import React from "react";
import img1 from "../../../images/graduation/g1.jpg";
import img2 from "../../../images/graduation/g2.jpg";
import img3 from "../../../images/graduation/g3.jpg";
import img4 from "../../../images/graduation/g4.jpg";
import img5 from "../../../images/graduation/g5.jpg";
import img6 from "../../../images/graduation/g6.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-center font-bold text-2xl mb-5"> Image Gallery </h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
