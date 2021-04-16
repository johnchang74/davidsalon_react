import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'

class Footer extends Component{
    render(){
        return(
            <div class="footer-content">
                <div class="layer footer">
                    <div class="container-fluid">
                            <div class="row footer-top-inner-w3ls">
                                    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                                        <div class="footer-w3pvt">
                                            <h3 class="mb-3 w3pvt_title">Opening Hours</h3>
                                            <hr/>
                                            <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>Monday<span class="tab-space"></span>11:00 am - 6:00 pm</p>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <p>Tuesday<span class="tab-space"></span>11:00 am - 6:00 pm</p>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <p>Wednesday<span class="tab-space"></span>11:00 am - 6:00 pm</p>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <p>Thursday<span class="tab-space"></span>11:00 am - 6:00 pm</p>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <p>Friday<span class="tab-space"></span>11:00 am - 7:00 pm</p>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <p>Saturday<span class="tab-space"></span>11:00 am - 6:00 pm</p>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <p>Sunday<span class="tab-space"></span>1:00 pm - 6:00 pm</p>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <p>Only by appointment</p>
                                                    </div>
                                                </div>
                                                {/* <li>
                                                    <p>Monday 11:00 am - 6:00 pm</p>
                                                    <p>Tuesday 11:00 am - 6:00 pm</p>
                                                    <p>Wednesday 11:00 am - 6:00 pm</p>
                                                    <p>Thursday 11:00 am - 6:00 pm</p>
                                                    <p>Friday 11:00 am - 7:00 pm</p>
                                                    <p>Saturday 11:00 am - 6:00 pm</p>
                                                    <p>Sunday 1:00 pm - 6:00 pm</p>
                                                    <p>Only by appointment</p>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
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
                                            <a href="https://www.instagram.com/david_salon_aurora/">
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
                                <div class="move-top text-right"><a href="#home" class="move-top"> <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
                    

            // <footer class="footer-content">
            //     <div class="layer footer">
            //         <div class="container-fluid">
            //             <div class="row footer-top-inner-w3ls">
            //                 <Div class="col-lg-4 col-md-6 mt-md-0 mt-5">
            //                     <div class="footer-w3pvt">
            //                         <h3 class="mb-3 w3pvt_title">Opening Hours</h3>
            //                         <hr/>
            //                         <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
            //                             <li>
            //                                 <p> Monday 11:00 am - 6:00 pm</p>
            //                                 <p> Tuesday 11:00 am - 6:00 pm</p>
            //                                 <p> Wednesday 11:00 am - 6:00 pm</p>
            //                                 <p> Thursday 11:00 am - 6:00 pm</p>
            //                                 <p> Friday 11:00 am - 7:00 pm</p>
            //                                 <p> Saturday 11:00 am - 6:00 pm</p>
            //                                 <p> Sunday 1:00 pm - 6:00 pm</p>
            //                                 <p> Only by appointment</p>
            //                             </li>
            //                         </ul>
            //                     </div>
            //                 </Div>
            //                 <Div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
            //                     <div class="footer-w3pvt">
            //                         <h3 class="mb-3 w3pvt_title">Welcome</h3>
            //                         <hr/>
            //                         <div class="last-w3ls-contact my-2">
            //                             <p>+1 905 726 4184</p>
            //                         </div>
            //                         <div class="last-w3ls-contact">
            //                             <p>#2-15171 Yonge Street,
            //                                 <br/>Aurora, Ontario L4G 1M1</p>
            //                         </div>
            //                     </div>
            //                 </Div>

            //             </div>

            //             <p class="copy-right-grids text-li text-center my-sm-4 my-4">© 2021 David Kim Salon de Beauté. All Rights Reserved.
            //             </p>
            //             <div class="w3ls-footer text-center mt-4">
            //                 <ul class="list-unstyled w3ls-icons">
            //                     <li>
            //                         <a href="https://www.facebook.com/davidsalonaurora/">
            //                         <span class="fa fa-facebook-f"></span>
            //                         </a>
            //                     </li>
            //                     <li>
            //                         <a href="https://www.instagram.com/david_salon_aurora/">
            //                         <span class="fa fa-instagram"></span>
            //                         </a>
            //                     </li>
            //                     <li>
            //                         <a href="https://www.youtube.com/channel/UCCi5YzK43-J55khENIoXW3w/featured">
            //                         <span class="fa fa-youtube"></span>
            //                         </a>
            //                     </li>
            //                 </ul>
            //             </div>
            //             <div class="move-top text-right"><a href="#home" class="move-top"> <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
            //         </div>
            //         {/* <!-- //footer bottom --> */}
            //     </div>
            // </footer>
        )
    }
}
export default Footer;