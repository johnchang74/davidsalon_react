import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: window.innerWidth,
    };

    // Bind the event handler to the class instance
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = "David Kim Salon de Beauté";
    // Add event listener when the component mounts
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    // Remove event listener when the component unmounts to prevent memory leaks
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    // Update the state with the new window width
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  render() {
    return (
      <div className="img_box_container">
        {window.innerWidth > 1035 ? (
          <Carousel slide={true} variant="dark" indicators={true} touch={true}>
            <Carousel.Item className="landing-image-item">
              <div>
                <img
                  className="landing-image"
                  src="/assets/images/aveda_shop_2025_v2.jpg"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3 className="text-white">GIFT A SHINE MIRACLE</h3>
                <p className="text-white">
                  Miraculous Oil High-Shine Hair Concentrate smooths and
                  illuminates each strand for flawless shine.
                </p>
              </Carousel.Caption>
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
        ) : (
          <Carousel slide={true} variant="dark" indicators={true} touch={true}>
            <Carousel.Item className="landing-image-item">
              <div>
                <img
                  className="landing-image-narrow"
                  src="/assets/images/aveda_shop_narrow_2025_v2.jpg"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3 className="text-white">GIFT A SHINE MIRACLE</h3>
                <p className="text-white">
                  Miraculous Oil High-Shine Hair Concentrate smooths and
                  illuminates each strand for flawless shine.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="landing-image-item">
              <div>
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
              </div>
            </Carousel.Item>
            <Carousel.Item className="landing-image-item">
              <div>
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
              </div>
            </Carousel.Item>
            <Carousel.Item className="landing-image-item">
              <div>
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
              </div>
            </Carousel.Item>
            <Carousel.Item className="landing-image-item">
              <div>
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
              </div>
            </Carousel.Item>
            <Carousel.Item className="landing-image-item">
              <div>
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
              </div>
            </Carousel.Item>
            <Carousel.Item className="landing-image-item">
              <div>
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
              </div>
            </Carousel.Item>
            <Carousel.Item className="landing-image-item">
              <div>
                <img
                  className="landing-image"
                  src="/assets/images/davidsalon_aveda_poster.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        )}
      </div>
    );
  }
}
export default Home;
