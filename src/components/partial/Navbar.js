import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
<header class="top-menu-bar">
	<div class="container">
		{/* <div class="header d-lg-flex justify-content-between"> */}
		<a href="/">
			<div class="flex-container">
				<div class="dk-name">David Kim</div>
				<div class="aveda_name"></div>
				<div class="concept-badge">
					{/* <div class="store-locator__tooltip-right-col"> */}
					<div class="store-locator__tooltip-classification">Concept Salon</div>
					<div class="store-locator__tooltip-product-types">
						<span class="pc--hc">hc</span>
						<span class="pc--pp">pp</span>
						<span class="pc--ss">ss</span>
						<span class="pc--sr">sr</span>
					</div>
					{/* </div> */}
				</div>
				{/* <div class="top-meun nav_w3ls"> */}
				<div class="top-meun">
					<nav>
						<label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
						<input type="checkbox" id="drop"/>
							<ul class="menu">
								<li class="mr-lg-3 mr-2 active"><Link to='/'>Home</Link></li>
								<li class="mr-lg-3 mr-2"><Link to='/services'>Services</Link></li>
								<li class="mr-lg-3 mr-2"><Link to='/products'>Products</Link></li>
								<li class="mr-lg-3 mr-2"><Link to='/contact'>Book Appointment</Link></li>
							</ul>
					</nav>
				</div> 
			</div>
		</a>
	</div>
	{/* <div class="store-locator__tooltip-right-col">
    	<div class="store-locator__tooltip-classification tooltipstered">Concept Salon</div>
			<div class="store-locator__tooltip-product-types">
				<span class="pc pc--hc tooltipstered" tabindex="0">hc</span>
				<span class="pc pc--pp tooltipstered" tabindex="0">pp</span>
				<span class="pc pc--ss tooltipstered" tabindex="0">ss</span>
				<span class="pc pc--sr tooltipstered" tabindex="0">sr</span>
    		</div>
	</div> */}
</header>
        )
    }
}
export default Navbar