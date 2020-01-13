import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  state = {
    images: [
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ],
    currentIndex: 0,
    translateValue: 0
  }
    render() {
       const { images } = this.state;
       const settings = {
        centerMode: true,
        // dots:true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
      return(
        <div className="carousel">
          <Slider {...settings}>
            {images.map((image,index)=>{
              return(
                <div key={index}>
                  <div className="sliderSize">
                    <img src={image} alt={`imageValue-${index}`} />
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      )
    }
}


export default Carousel;