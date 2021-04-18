import React, { Component } from 'react';
// import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    componentDidMount() {
        document.title = "David Kim Salon de Beauté"
    }

    render() {
        return (
            <div>
                <div class="breadcrumb-agile">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
                <section class="gallery py-5" id="gallery">
                    <div class="container py-md-5">
                        <h3 class="heading text-center mb-3 mb-sm-5">About Us</h3>
                        <div class="gallery-content">
                            <div class="row">
                                <div class="col-md-4 col-md-6 gal-img">
                                    <img src="/assets/images/david_kim_business_card.png" alt="aegis" class="dk_business_card" />
                                </div>
                                <div class="col-md-4 col-sm-6 gal-img">
                                    <h3 class="owner">Hair Stylist David Kim</h3>
                                    <div class="owner_bio">
                                        <div class="about-text">
                                            <p>Canada OCT Licensed Hairstylist,</p>
                                            <p>CTS Colourist, Aveda Concept Salon, Aveda Ambassador,</p>
                                            <p>owner of David Kim Salon de Beauté.</p>
                                        </div>
                                        {/* <div class="badge-title">
                                            <h5>Concept Salon</h5>
                                        </div>
                                        <div class="badge">
                                            <div class="col-md-1-1">
                                                <span class="hair-color1">hc</span>
                                            </div>
                                            <div class="col-md-1-2">
                                                <span class="hair-color2">pp</span>
                                            </div>
                                            <div class="col-md-1-3">
                                                <span class="hair-color3">ss</span>
                                            </div>
                                            <div class="col-md-1-4">
                                                <span class="hair-color4">sr</span>
                                            </div>
                                        </div> */}
                                        
                                        {/* <div class="row">
                                            <div class="col-md-1-1 badge">
                                                <span class="hair-color1">hc</span>
                                            </div>
                                            <div class="col-md-1-1 badge">
                                                <span class="hair-color2">pp</span>
                                            </div>
                                            <div class="col-md-1-1 badge">
                                                <span class="hair-color3">ss</span>
                                            </div>
                                            <div class="col-md-1-1 badge">
                                                <span class="hair-color4">sr</span>
                                            </div>                                        
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 youtube-clip">
                                <h5>Love for Natural Beauty | Horst Rechelbacher | Aveda</h5>
                                <a href="https://www.youtube.com/watch?v=u31ExlbLx-s">
                                    <img src="https://i.ytimg.com/vi/u31ExlbLx-s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGJAa2SxJucsuRbEXBhUqaJElrWA" alt=" "></img>
                                </a>
                            </div>
                            <div class="col-md-4 youtube-clip">
                                <h5>Aveda Sourcing Story: Ayurvedic Roots of Turmeric and Amla</h5>
                                    <a href="https://www.youtube.com/watch?v=OVY-TLhsnjE">
                                        <img src="https://i.ytimg.com/vi/OVY-TLhsnjE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhyGr8xs8klyh-21xruHMt7dG2Bw" alt=" "></img>
                                    </a>
                            </div>
                            <div class="col-md-4 youtube-clip">
                                <h5>A Conversation with Horst Rechelbacher, founder of Aveda Natural Products and Intelligent Nutrients</h5>
                                    <a href="https://www.youtube.com/watch?v=veOlGqu2suA">
                                        <img src="https://i.ytimg.com/vi/veOlGqu2suA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUmV_IRqaVgPoLznepj97WGGn-yQ" alt=" "></img>
                                    </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default AboutUs;