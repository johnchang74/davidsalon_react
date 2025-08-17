import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    document.title = "David Kim Salon de Beauté";
  }

  render() {
    return (
      <div className="color-nav">
        <div className="row col-md-12 img_box_container" id="home">
          <div className="col-md-4-1">
            <img
              className="landing-image1"
              src="/assets/images/invanti_aveda_product_v2.jpg"
              alt=" "
            ></img>
          </div>
          <div className="col-md-4-1">
            <img
              className="landing-image2"
              src="/assets/images/aveda_poster_v1.jpg"
              alt=" "
            ></img>
          </div>
          <div className="col-md-4-1">
            <img
              className="landing-image3"
              src="/assets/images/inst_aveda_deco_v2.jpg"
              alt=" "
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
