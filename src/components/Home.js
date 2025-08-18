import React,{Component} from 'react';

class Home extends Component {
	componentDidMount() {
		document.title = "David Kim Salon de Beauté";
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
				</div>
    		</div>
        )
    }
}
export default Home