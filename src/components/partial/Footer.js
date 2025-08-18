import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'

class Footer extends Component{
    render(){
        console.log(window.location.href);
        return(
            <div className="footer-content">
                <div className="layer footer">
                    <div className="container-fluid">
                        <div className="row footer-top-inner-w3ls">
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                                <div className="footer-w3pvt">
                                    <h3 className="mb-3 w3pvt_title">Opening Hours</h3>
                                    <hr/>
                                    <ul className="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Monday<span className="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Tuesday<span className="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Wednesday<span className="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Thursday<span className="tab-space"></span>11am - 6pm</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Friday<span className="tab-space"></span>11am - 7pm</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Saturday<span className="tab-space"></span>11am - 7pm</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Sunday<span className="tab-space"></span>2pm - 6pm</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Only by appointment</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Curbside pick-up available</p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>Gift Cards available</p>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                                <div className="footer-w3pvt">
                                    <h3 className="mb-3 w3pvt_title">Welcome</h3>
                                    <hr/>
                                    <div className="last-w3ls-contact my-2">
                                        <p>+1 905 726 4184</p>
                                    </div>
                                    <div className="last-w3ls-contact">
                                        <p>#2-15171 Yonge Street,
                                        <br/>Aurora, Ontario L4G 1M1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 badge-title">
                                <a href="/contact" className="concept-badge-1">Please visit our salon to experience our service and products</a>
                                <div className="blank-space-1"></div>
                                <h5 className="concept-badge">Concept Salon</h5>
                                <div className="blank-space"></div>
                                <div className="footer-row">
                                    <div className="col-md-1-3 footer-badge">
                                        <div className="hair-color1 tooltip">hc
                                            <span className="tooltiptext">
                                                Hair color:
                                                Exclusive Aveda Hair Color - 
                                                these locations only use Aveda 
                                                hair color-up to 99% naturally 
                                                derived-and no other companies' 
                                                hair color products.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-1-3 footer-badge">
                                        <div className="hair-color2 tooltip">pp
                                            <span className="tooltiptext">
                                                Aveda+ Rewards:
                                                These locations participate 
                                                in the Aveda+ Rewards program. 
                                                To learn about this program, 
                                                visit aveda.com/avedaplus.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-1-3 footer-badge">
                                        <div className="hair-color3 tooltip">ss
                                            <span className="tooltiptext">
                                                Signature Spa Services:
                                                Performs Aveda Signature Spa Services - 
                                                these locations perform spa services 
                                                such as facials, massages and other 
                                                body treatments using only Aveda skin, 
                                                body and aroma products.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-1-3 footer-badge">
                                        <div className="hair-color4 tooltip">sr
                                            <span className="tooltiptext">
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
                                <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2021 David Kim Salon de Beauté. All Rights Reserved.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="w3ls-footer text-center mt-4 mb-4">
                                    <ul className="list-unstyled w3ls-icons">
                                        <li>
                                            <a href="https://www.facebook.com/davidsalonaurora/">
                                            <span className="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/imgdavidkim/">
                                            <span className="fa fa-instagram"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCCi5YzK43-J55khENIoXW3w/featured">
                                            <span className="fa fa-youtube"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="move-top text-right"><a href={window.location.href} className="move-top"> <span className="fa fa-angle-up mb-3" aria-hidden="true"></span></a></div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;