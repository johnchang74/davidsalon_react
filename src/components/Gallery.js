import React, { Component } from "react";
import { Link } from "react-router-dom";
class Gallery extends Component {
  render() {
    return (
      <div>
        <section className="inner-page-banner" id="home"></section>

        <div className="breadcrumb-agile">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Gallery
            </li>
          </ol>
        </div>
        <section className="gallery py-5" id="gallery">
          <div className="container py-md-5">
            <h3 className="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
            <div className="gallery-content">
              <div className="row">
                <div className="col-md-4 col-sm-6 gal-img">
                  <a href="#gal1">
                    <img
                      src="assets/images/g1.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img">
                  <a href="#gal2">
                    <img
                      src="assets/images/g2.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img">
                  <a href="#gal3">
                    <img
                      src="assets/images/g3.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img">
                  <a href="#gal4">
                    <img
                      src="assets/images/g4.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img">
                  <a href="#gal5">
                    <img
                      src="assets/images/g5.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img">
                  <a href="#gal6">
                    <img
                      src="assets/images/g6.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
              </div>
              <div id="gal1" className="popup-effect">
                <div className="popup">
                  <img
                    src="assets/images/g1.jpg"
                    alt="Popup image"
                    className="img-fluid mt-4"
                  />
                  <a className="close" href="#gallery">
                    &times;
                  </a>
                </div>
              </div>
              <div id="gal2" className="popup-effect">
                <div className="popup">
                  <img
                    src="assets/images/g2.jpg"
                    alt="Popup image"
                    className="img-fluid mt-4"
                  />
                  <a className="close" href="#gallery">
                    &times;
                  </a>
                </div>
              </div>
              <div id="gal3" className="popup-effect">
                <div className="popup">
                  <img
                    src="assets/images/g3.jpg"
                    alt="Popup image"
                    className="img-fluid mt-4"
                  />
                  <a className="close" href="#gallery">
                    &times;
                  </a>
                </div>
              </div>
              <div id="gal4" className="popup-effect">
                <div className="popup">
                  <img
                    src="assets/images/g4.jpg"
                    alt="Popup image"
                    className="img-fluid mt-4"
                  />
                  <a className="close" href="#gallery">
                    &times;
                  </a>
                </div>
              </div>
              <div id="gal5" className="popup-effect">
                <div className="popup">
                  <img
                    src="assets/images/g5.jpg"
                    alt="Popup image"
                    className="img-fluid mt-4"
                  />
                  <a className="close" href="#gallery">
                    &times;
                  </a>
                </div>
              </div>
              <div id="gal6" className="popup-effect">
                <div className="popup">
                  <img
                    src="assets/images/g6.jpg"
                    alt="Popup image"
                    className="img-fluid mt-4"
                  />
                  <a className="close" href="#gallery">
                    &times;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Gallery;
