import React,{Component} from 'react';

class Home extends Component {
	componentDidMount(){
		document.title = "David Kim Salon de Beauté"
	}
	
    render(){
        return(
            <div>
				<div class="banner_w3lspvt" id="home">
					<div class="csslider infinity" id="slider1">
						<input type="radio" name="slides" checked="checked" id="slides_1"/>
						{/* <input type="radio" name="slides" id="slides_2"/>
						<input type="radio" name="slides" id="slides_3"/>
						<input type="radio" name="slides" id="slides_4"/> */}

						<ul class="banner_slide_bg">
							<li>
								<a href="https://www.aveda.ca/esearch?form_id=perlgem_search_form&search_type=&search=aveda+botanical+repair">
									<div class="slider-info bg1">
										<div class="bs-slider-overlay">
											<div class="banner-text">
												<div class="container">
													{/* <h2 class="movetxt agile-title text-capitalize">Aveda botenical repair</h2> */}
												</div>
											</div>
										</div>
									</div>
								</a>
							</li>
							{/* <li>
								<div class="slider-info bg2">
									<div class="bs-slider-overlay1">
										<div class="banner-text">
											<div class="container">
												<h4 class="movetxt agile-title text-capitalize">Aveda botenical repair</h4>
												<Link to='/contact' class="btn">Get appointment</Link>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="slider-info bg3">
									<div class="bs-slider-overlay1">
										<div class="banner-text">
											<div class="container">
											<h2 class="movetxt agile-title text-capitalize">Aveda botenical repair</h2>							
											<Link to='/contact' class="btn">Get appointment</Link>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="slider-info bg4">
									<div class="bs-slider-overlay1">
										<div class="banner-text">
											<div class="container">
												<h4 class="movetxt agile-title text-capitalize">Aveda botenical repair</h4>								
												<Link to='/contact' class="btn">Get appointment</Link>
											</div>
										</div>
									</div>
								</div>
							</li> */}
						</ul>
						<div class="navigation"> 
							<div>
							<label for="slides_1"></label>
							{/* <label for="slides_2"></label>
							<label for="slides_3"></label>
							<label for="slides_4"></label> */}
							</div>
						</div>
					</div>
				</div>
    		</div>
        )
    }
}
export default Home