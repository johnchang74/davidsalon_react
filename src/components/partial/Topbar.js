import React,{Component} from 'react';
// import {Switch, Route} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap'

class Topbar extends Component{
    render(){
        return(
		<div>
			<div className="topbar_row">
				<div className="col-md-12">
					<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
						
						{/* <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand> */}
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/aboutus">About Us</Nav.Link>
								<Nav.Link href="/services">Services</Nav.Link>
								<Nav.Link href="/products">Products</Nav.Link>
								<Nav.Link href="/contact">Book Appointment</Nav.Link>
								{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
								</NavDropdown> */}
							</Nav>
							{/* <Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
							</Form> */}
						</Navbar.Collapse>
						<Navbar.Brand href="/">
							<img
								src="/assets/images/david_salon_logo1_v1.jpg"
								width="130px"
								height="50px"
								className="d-inline-block align-top"
								alt=" "/>
						{/* </Navbar.Brand>
						<Navbar.Brand href="/"> */}
							<img
								src="/assets/images/aveda_logo_black_v1.jpg"
								width="130px"
								height="50px"
								className="d-inline-block align-top"
								alt=" "/>
						{/* </Navbar.Brand>
						<Navbar.Brand href="/"> */}
							<img
								src="/assets/images/aveda_concept_salon.png"
								width="90px"
								height="50px"
								className="d-inline-block align-top"
								alt=" "/>
						</Navbar.Brand>
					</Navbar>
					<br/>
				</div>
			</div>
		</div>
        )
    }
}
export default Topbar;