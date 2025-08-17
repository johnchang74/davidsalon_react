import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header className="top-menu-bar">
        <div className="container">
          {/* <div className="header d-lg-flex justify-content-between"> */}
          <a href="/">
            <div className="flex-container">
              <div className="dk-name">David Kim</div>
              <div className="aveda_name"></div>
              <div className="concept-badge">
                {/* <div className="store-locator__tooltip-right-col"> */}
                <div className="store-locator__tooltip-classification">
                  Concept Salon
                </div>
                <div className="store-locator__tooltip-product-types">
                  <span className="pc--hc">hc</span>
                  <span className="pc--pp">pp</span>
                  <span className="pc--ss">ss</span>
                  <span className="pc--sr">sr</span>
                </div>
                {/* </div> */}
              </div>
              {/* <div className="top-meun nav_w3ls"> */}
              <div className="top-meun">
                <nav>
                  <label for="drop" className="toggle mt-lg-0 mt-1">
                    <span className="fa fa-bars" aria-hidden="true"></span>
                  </label>
                  <input type="checkbox" id="drop" />
                  <ul className="menu">
                    <li className="mr-lg-3 mr-2 active">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="mr-lg-3 mr-2">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="mr-lg-3 mr-2">
                      <Link to="/products">Products</Link>
                    </li>
                    <li className="mr-lg-3 mr-2">
                      <Link to="/contact">Book Appointment</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </a>
        </div>
      </header>
    );
  }
}
export default Navbar;
