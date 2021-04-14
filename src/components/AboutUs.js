import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
                                    <h3 class="owner">Owner & Hair Stylist, David Kim</h3>
                                    <div class="owner_bio">
                                        <p>David Kim is the owner and the lead hair stylist at David Kim Salon de Beauté.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default AboutUs;