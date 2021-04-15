import React,{Component} from 'react';

class Home extends Component {
	componentDidMount(){
		document.title = "David Kim Salon de Beauté"
	}
	
    render(){
        return(
            <div class="color-nav">
				<div class="row col-md-12 img_box_container" id="home">
					<div class="col-md-4-1">
						<img class="landing-image1" src="/assets/images/invanti_aveda_product_v2.jpg" alt=" "></img>
					</div>
					<div class="col-md-4-1">
						<img class="landing-image2" src="/assets/images/aveda_poster_v1.jpg" alt=" "></img>
					</div>
					<div class="col-md-4-1">
						<img class="landing-image3" src="/assets/images/inst_aveda_deco_v2.jpg" alt=" "></img>
					</div>
					{/* <div class="csslider infinity" id="slider1">
						<input type="radio" name="slides" checked="checked" id="slides_1"/>
						<ul class="banner_slide_bg">
							<li>
								<a href="https://www.aveda.ca/esearch?form_id=perlgem_search_form&search_type=&search=aveda+botanical+repair">
									<div class="slider-info bg1">
										<div class="bs-slider-overlay">
											<div class="banner-text">
												<div class="container">
												</div>
											</div>
										</div>
									</div>
								</a>
							</li>
						</ul>
						<div class="navigation"> 
							<div>
							<label for="slides_1"></label>
							</div>
						</div>
					</div> */}
				</div>
    		</div>
        )
    }
}
export default Home