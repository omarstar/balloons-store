import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slides.css'; 

const SlidesPart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Sample data for images and text
  const data = [
    { id: 1, image: 'HalloweenCover', text: 'Description 1' },
    { id: 2, image: 'loveCover', text: 'Description 2' },
    // Add more data as needed
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <img src={require(`../../assets/images/cover/${item.image}.webp`)} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlidesPart;
