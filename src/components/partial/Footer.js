import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'

class Footer extends Component{
    render(){
        console.log(window.location.href);
        return(
            <div class="footer-content">
                <div class="layer footer">
                    <div class="container-fluid">
                        <div class="row footer-top-inner-w3ls">
                            <div class="col-lg-3-1 col-md-6 mt-md-0 mt-5">
                                <div class="footer-w3pvt">
                                    <h3 class="mb-3 w3pvt_title">Opening Hours</h3>
                                    <hr/>
                                    <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p>Mon<span class="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div class="col-md-12">
                                                <p>Tue<span class="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div class="col-md-12">
                                                <p>Wed<span class="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div class="col-md-12">
                                                <p>Thu<span class="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div class="col-md-12">
                                                <p>Fri<span class="tab-space"></span>11am - 7pm</p>
                                            </div>
                                            <div class="col-md-12">
                                                <p>Sat<span class="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div class="col-md-12">
                                                <p>Sun<span class="tab-space"></span>1pm - 6pm</p>
                                            </div>
                                            <div class="col-md-12">
                                                <p>Only by appointment</p>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3-1 col-md-6 mt-lg-0 mt-5">
                                <div class="footer-w3pvt">
                                    <h3 class="mb-3 w3pvt_title">Welcome</h3>
                                    <hr/>
                                    <div class="last-w3ls-contact my-2">
                                        <p>+1 905 726 4184</p>
                                    </div>
                                    <div class="last-w3ls-contact">
                                        <p>#2-15171 Yonge Street,
                                        <br/>Aurora, Ontario L4G 1M1</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3-1 badge-title">
                                <a href="/contact" class="concept-badge-1">Please visit our salon to experience our service and products</a>
                                <div class="blank-space-1"></div>
                                <h5 class="concept-badge">Concept Salon</h5>
                                <div class="blank-space"></div>
                                <div class="footer-row">
                                    <div class="col-md-1-3 footer-badge">
                                        <div class="hair-color1 tooltip">hc
                                            <span class="tooltiptext">
                                                Hair color:
                                                Exclusive Aveda Hair Color - 
                                                these locations only use Aveda 
                                                hair color-up to 99% naturally 
                                                derived-and no other companies' 
                                                hair color products.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-1-3 footer-badge">
                                        <div class="hair-color2 tooltip">pp
                                            <span class="tooltiptext">
                                                Aveda+ Rewards:
                                                These locations participate 
                                                in the Aveda+ Rewards program. 
                                                To learn about this program, 
                                                visit aveda.com/avedaplus.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-1-3 footer-badge">
                                        <div class="hair-color3 tooltip">ss
                                            <span class="tooltiptext">
                                                Signature Spa Services:
                                                Performs Aveda Signature Spa Services - 
                                                these locations perform spa services 
                                                such as facials, massages and other 
                                                body treatments using only Aveda skin, 
                                                body and aroma products.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-1-3 footer-badge">
                                        <div class="hair-color4 tooltip">sr
                                            <span class="tooltiptext">
                                                Sensory Rituals:
                                                Performs Complimentary Sensory Rituals - 
                                                these locations consistently deliver 
                                                the Aveda Guest Service Experience by 
                                                providing complimentary Comforting Tea, 
                                                stress relieving rituals, aroma sensory 
                                                journey and product recommendations.
                                            </span>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col>
                                <p class="copy-right-grids text-li text-center my-sm-4 my-4">© 2021 David Kim Salon de Beauté. All Rights Reserved.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class="w3ls-footer text-center mt-4">
                                    <ul class="list-unstyled w3ls-icons">
                                        <li>
                                            <a href="https://www.facebook.com/davidsalonaurora/">
                                            <span class="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/imgdavidkim/">
                                            <span class="fa fa-instagram"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCCi5YzK43-J55khENIoXW3w/featured">
                                            <span class="fa fa-youtube"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="move-top text-right"><a href={window.location.href} class="move-top"> <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;