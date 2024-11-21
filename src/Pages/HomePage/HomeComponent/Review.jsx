import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get("https://college-booking-back.onrender.com/reviews")
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#016A4E",
  };

  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <p className="text-center font-bold text-2xl">See Reviews </p>
        {/* review slides */}
        <div className=" px-2 ">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {review.map((refs) => (
              <div key={refs._id}>
                <SwiperSlide>
                  <div className="card w-full bg-base-100 my-4 flex items-center ">
                    <div className="card-body text-black">
                      <h2 className="card-title ">
                        {" "}
                        College Name: {refs.collegeName}{" "}
                      </h2>
                      <h2 className="card-title"> Reviewed by: {refs.name} </h2>
                      <p>
                        {" "}
                        <strong> Comment: </strong> {refs.review}{" "}
                      </p>
                      <Rating
                        style={{ maxWidth: 150 }}
                        itemStyles={myStyles}
                        value={refs.rating}
                        readOnly
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
