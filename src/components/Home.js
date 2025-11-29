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
          <Carousel.Item className="landing-image1-item">
            <div>
              <img
                className="landing-image1"
                src="/assets/images/invanti_aveda_product_v2.jpg"
                alt="First slide"
              />
              <img
                className="landing-image2"
                src="/assets/images/aveda_poster_v1.jpg"
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="landing-image1-item">
            <div>
              <img
                className="landing-image2"
                src="/assets/images/aveda_poster_v1.jpg"
                alt="Second slide"
              />
              <img
                className="landing-image1"
                src="/assets/images/invanti_aveda_product_v2.jpg"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="landing-image3-item">
            <div>
              <img
                className="landing-image3"
                src="/assets/images/inst_aveda_deco_v2.jpg"
                alt="Third slide"
              />
              <img
                className="landing-image1"
                src="/assets/images/invanti_aveda_product_v2.jpg"
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
