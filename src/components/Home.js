import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Home extends Component {
  componentDidMount() {
    document.title = "David Kim Salon de Beauté";
  }

  render() {
    return (
      <div className="img_box_container">
        <Carousel slide={true} variant="dark" indicators={true} touch={true}>
          <Carousel.Item className="landing-image-item">
            <div>
              <img
                className="landing-image"
                src="/assets/images/invanti_aveda_product_v2.jpg"
                alt="First slide"
              />
              <img
                className="landing-image"
                src="/assets/images/aveda_poster_v1.jpg"
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="landing-image-item">
            <div>
              <img
                className="landing-david-image"
                src="/assets/images/david_kim_cover_photo.jpg"
                alt="Second slide"
              />
              <img
                className="landing-image"
                src="/assets/images/davidsalon_hair1.jpg"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="landing-image-item">
            <div>
              <img
                className="landing-image"
                src="/assets/images/aveda_poster_v1.jpg"
                alt="Second slide"
              />
              <img
                className="landing-image"
                src="/assets/images/davidsalon_hair2.jpg"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="landing-image-item">
            <div>
              <img
                className="landing-image"
                src="/assets/images/inst_aveda_deco_v2.jpg"
                alt="Third slide"
              />
              <img
                className="landing-image"
                src="/assets/images/davidsalon_hair3.jpg"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="landing-image-item">
            <div>
              <img
                className="landing-salon-image"
                src="/assets/images/david_kim_salon_store_2025_1.jpg"
                alt="Third slide"
              />
              <img
                className="landing-image"
                src="/assets/images/davidsalon_hair4.jpg"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="landing-image-item">
            <div>
              <img
                className="landing-salon-image"
                src="/assets/images/david_kim_salon_store_2025_2.jpg"
                alt="Third slide"
              />
              <img
                className="landing-image"
                src="/assets/images/davidsalon_hair5.jpg"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="landing-image-item">
            <div>
              <img
                className="landing-salon-image"
                src="/assets/images/davidsalon_flower.jpg"
                alt="Third slide"
              />
              <img
                className="landing-image"
                src="/assets/images/davidsalon_aveda_poster.jpg"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default Home;
