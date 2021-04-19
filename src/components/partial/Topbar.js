import React,{Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap'

class Topbar extends Component{
    render(){
        return(
		<div>
			<div class="topbar_row">
				<div class="col-md-12">
					<Navbar className="color-nav" variant="dark" expand="lg" sticky="top">
						<Navbar.Brand href="/" className="log-nav">
							<img
								src="/assets/images/david_salon_logo1_v1.jpg"
								width="150px"
								height="50px"
								className="d-inline-block align-top"
								alt=" "/>
							<img
								src="/assets/images/aveda_logo_black_v1.jpg"
								width="60px"
								height="20px"
								className="d-inline-block align-top"
								alt=" "/>
							{/* <img
								src="/assets/images/aveda_concept_salon.png"
								width="90px"
								height="50px"
								className="d-inline-block align-top"
								alt=" "/> */}
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav"/>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/aboutus">About Us</Nav.Link>
								<Nav.Link href="/services">Services</Nav.Link>
								<Nav.Link href="https://www.aveda.ca/salon/dk-salon-de-beaute">Shop Online</Nav.Link>
								<Nav.Link href="/products">Products</Nav.Link>
								<Nav.Link href="/contact">Book Appointment</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<br/>
				</div>
			</div>
		</div>
        )
    }
}
export default Topbar;