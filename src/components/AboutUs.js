import React, { Component } from "react";
// import { Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

class AboutUs extends Component {
  componentDidMount() {
    document.title = "David Kim Salon de Beauté";
  }

  render() {
    return (
      <div>
        <div className="breadcrumb-agile">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </div>
        <div className="aveda-background">
          <section className="gallery py-5" id="gallery">
            <div className="container py-md-5">
              <h3 className="heading text-center mb-3 mb-sm-5">About Us</h3>
              <div className="gallery-content">
                <div className="row">
                  <div className="col-md-4 col-md-5 gal-img">
                    <img
                      src="/assets/images/david_kim_business_card_v1.png"
                      alt="aegis"
                      className="dk_business_card"
                    />
                  </div>
                  <div className="col-md-4 col-md-5 gal-img">
                    <h3 className="owner">Hairstylist David J. Kim</h3>
                    <div className="owner_bio">
                      <div className="about-text">
                        <p>Canada OCT Licensed Hairstylist,</p>
                        <p>
                          CTS, Colourist, Aveda Concept Salon, Aveda Ambassador,
                        </p>
                        <p>owner of David Kim Salon de Beauté.</p>
                      </div>
                      <div className="badge-title">
                        <h5>Concept Salon</h5>
                        <div className="blank-space"></div>
                        <div className="badge-row">
                          <div className="col-md-1-1 footer-badge">
                            <div className="hair-color1-1 tooltip">
                              hc
                              <span className="tooltiptext">
                                Hair color: Exclusive Aveda Hair Color - these
                                locations only use Aveda hair color-up to 99%
                                naturally derived-and no other companies' hair
                                color products.
                              </span>
                            </div>
                          </div>
                          <div className="col-md-1-1 footer-badge">
                            <div className="hair-color2-1 tooltip">
                              pp
                              <span className="tooltiptext">
                                Aveda+ Rewards: These locations participate in
                                the Aveda+ Rewards program. To learn about this
                                program, visit aveda.com/avedaplus.
                              </span>
                            </div>
                          </div>
                          <div className="col-md-1-1 footer-badge">
                            <div className="hair-color3-1 tooltip">
                              ss
                              <span className="tooltiptext">
                                Signature Spa Services: Performs Aveda Signature
                                Spa Services - these locations perform spa
                                services such as facials, massages and other
                                body treatments using only Aveda skin, body and
                                aroma products.
                              </span>
                            </div>
                          </div>
                          <div className="col-md-1-1 footer-badge">
                            <div className="hair-color4-1 tooltip">
                              sr
                              <span className="tooltiptext">
                                Sensory Rituals: Performs Complimentary Sensory
                                Rituals - these locations consistently deliver
                                the Aveda Guest Service Experience by providing
                                complimentary Comforting Tea, stress relieving
                                rituals, aroma sensory journey and product
                                recommendations.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blank-space-1"></div>
                <div className="row">
                  <div className="col-md-4 col-md-5 gal-img">
                    <img
                      src="/assets/images/lucy_photo_v1.jpg"
                      alt="aegis"
                      className="lu_business_card"
                    />
                  </div>
                  <div className="col-md-4 col-md-5 gal-img">
                    <h3 className="owner">Hairstylist Lucy H.W Kim</h3>
                    <div className="owner_bio">
                      <div className="about-text">
                        <p>OCT Licensed Hairstylist, Colourist,</p>
                        <p>Medical Aesthetician in Ontario,</p>
                        <p>
                          Cosmetician, Cosmotologist, Standard First AID CPR/AED
                          Level C
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h4 className="heading text-center mb-3 mb-sm-5">
                Our Certification
              </h4>
              <p>
                We provide a socially distanced environment that has clean
                ventilation and distilled water system.
              </p>
              <p className="covid-19">
                *Our Team Follows the Covid-19 Guidelines*
              </p>
              <p>
                A clean established salon with Barbicide, PDQ, PPE certified
                products used
              </p>
              <div className="blank-space"></div>
              <div className="row img-certificate">
                <div className="col-md-6">
                  <img
                    className="certificate"
                    src="./assets/images/dk_certification_v1.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                </div>
                <div className="col-md-6">
                  <img
                    className="certificate"
                    src="./assets/images/dk_certification1_v1.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                </div>
                <div className="col-md-6">
                  <img
                    className="certificate"
                    src="./assets/images/dk_certification2_v1.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                </div>
                <div className="col-md-6">
                  <img
                    className="certificate"
                    src="./assets/images/excel_cert_v1.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                </div>
                <div className="col-md-6">
                  <img
                    className="certificate"
                    src="./assets/images/certificate4_v2.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                  <img
                    className="certificate"
                    src="./assets/images/certification6_v1.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                </div>
                <div className="col-md-6">
                  <img
                    className="certificate"
                    src="./assets/images/certification5_v1.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                </div>
                <div className="col-md-6">
                  <img
                    className="certificate"
                    src="./assets/images/certification7_v1.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                  <img
                    className="certificate"
                    src="./assets/images/health_inspection.jpg"
                    alt=" "
                  ></img>
                  <div className="blank-space"></div>
                </div>
                <div className="col-md-6">
                  <img
                    className="certificate"
                    src="./assets/images/aurora_dk_article_v1.jpg"
                    alt=" "
                  ></img>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="blank-space-1"></div>
              <h4 className="heading text-center mb-3 mb-sm-5">Our Media</h4>
              <div className="row">
                <div className="col-md-4 youtube-clip">
                  <h5>Love for Natural Beauty | Horst Rechelbacher | Aveda</h5>
                  <a href="https://www.youtube.com/watch?v=u31ExlbLx-s">
                    <img
                      src="https://i.ytimg.com/vi/u31ExlbLx-s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGJAa2SxJucsuRbEXBhUqaJElrWA"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>
                    Aveda Sourcing Story: Ayurvedic Roots of Turmeric and Amla
                  </h5>
                  <a href="https://www.youtube.com/watch?v=OVY-TLhsnjE">
                    <img
                      src="https://i.ytimg.com/vi/OVY-TLhsnjE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhyGr8xs8klyh-21xruHMt7dG2Bw"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>
                    A Conversation with Horst Rechelbacher, founder of Aveda
                    Natural Products and Intelligent Nutrients
                  </h5>
                  <a href="https://www.youtube.com/watch?v=veOlGqu2suA">
                    <img
                      src="https://i.ytimg.com/vi/veOlGqu2suA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUmV_IRqaVgPoLznepj97WGGn-yQ"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>Aveda Concept Colour at David Kim Salon de Beauté</h5>
                  <a href="https://www.youtube.com/watch?v=bWQxn2HxFoI">
                    <img
                      src="https://i.ytimg.com/vi/bWQxn2HxFoI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsTyOdz4MFDZ9bdvQ4Jzubtm8qtQ"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>Aveda Concept Colour at David Kim Salon de Beauté</h5>
                  <a href="https://www.youtube.com/watch?v=vQZbcvc9Of4">
                    <img
                      src="https://i.ytimg.com/vi/vQZbcvc9Of4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB89pLtVRtjUpebrHAPRTSrlMSNmg"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>
                    Aveda damage remedy Chemical Damage Repair David Kim Salon
                    de Beauté
                  </h5>
                  <a href="https://www.youtube.com/watch?v=KHCvHukfpp4">
                    <img
                      src="https://i.ytimg.com/vi/KHCvHukfpp4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_lh3bzPlDU678m4udrh26d_68Mg"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>Aveda Concept Colour at David Kim Salon de Beauté</h5>
                  <a href="https://www.youtube.com/watch?v=V1ci_jNe4_A">
                    <img
                      src="https://i.ytimg.com/vi/V1ci_jNe4_A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCd551yefuaNNYzZ5QMNUrcanaOWg"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>Botanical Treatment with David Kim Salon de Beauté</h5>
                  <a href="https://www.youtube.com/watch?v=fuslk89S6RU">
                    <img
                      src="https://i.ytimg.com/vi/fuslk89S6RU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkj_DezJqEcvumM2hWdYkpNipp0A"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>Curbside notification Aveda products</h5>
                  <a href="https://www.youtube.com/watch?v=G-1rc3z2Pmc">
                    <img
                      src="https://i.ytimg.com/vi/G-1rc3z2Pmc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0CcHEwnENcc6FTYdK3Kg1yPo38Q"
                      alt=" "
                    ></img>
                  </a>
                </div>
                <div className="col-md-4 youtube-clip">
                  <h5>Aveda Concept Colour at David Kim Salon de Beauté</h5>
                  <a href="https://www.youtube.com/watch?v=BZ2pCfwkB14">
                    <img
                      src="https://i.ytimg.com/vi/BZ2pCfwkB14/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDF3sVK3jqLe-iy_DJX5Pb2NnIkkQ"
                      alt=" "
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default AboutUs;
