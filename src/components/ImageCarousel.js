import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const images = [
    "https://media.istockphoto.com/id/1271407802/photo/monarch-of-the-north.jpg?s=612x612&w=0&k=20&c=uk9abxkW2gNDNe7Q9rOo38mCSDr59sy27ixxQR14bf0=",
    "https://media.istockphoto.com/id/1459382651/photo/morning-bear-yoga.jpg?s=612x612&w=0&k=20&c=8sAr1MZmdgs8nTXLdB3_RN8DVOKLYyOm9yNvZ2z2T10=",
    "https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    "https://media.istockphoto.com/id/1186333985/photo/a-blue-chinned-sapphire-hummingbird-feeding-on-flowers.jpg?s=612x612&w=0&k=20&c=y3SW7IuMjf8-8ENkNAkts9HYk_zOb3C9hfPSQNMBROk=",
    "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    // Add more image URLs here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full mx-auto max-w-xl">
      <div className="w-full h-[300px]  ">
        <Slider {...settings}>
          {" "}
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-[250px] object-cover rounded-[7px] "
              />
            </div>
          ))}{" "}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
