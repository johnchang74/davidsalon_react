import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class Topbar extends Component {
  render() {
    return (
      <div className="top_bar">
        <div className="topbar_row">
          <div className="col-md-12">
            <Navbar
              className="color-nav"
              variant="dark"
              expand="lg"
              sticky="top"
            >
              <Navbar.Brand href="/" className="log-nav">
                <img
                  src="/assets/images/david_salon_logo_2025.jpg"
                  width="180px"
                  height="50px"
                  className="d-inline-block align-top"
                  alt=" "
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/aboutus">About Us</Nav.Link>
                  <Nav.Link href="/services">Services</Nav.Link>
                  <Nav.Link href="https://www.aveda.ca/salon/dk-salon-de-beaute">
                    Shop Online
                  </Nav.Link>
                  <Nav.Link href="/products">Products</Nav.Link>
                  <Nav.Link href="/contact">Book Appointment</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Topbar;
