import React, { Component } from "react";
import { Link } from "react-router-dom";
class Products extends Component {
  componentDidMount() {
    document.title = "David Kim Salon de Beauté";
  }

  render() {
    return (
      <div>
        {/* <section className="inner-page-banner" id="home">
                </section> */}
        <div className="breadcrumb-agile">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Products
            </li>
          </ol>
        </div>
        <section className="gallery py-5" id="gallery">
          <div className="container py-md-5">
            <div className="gallery-content">
              <div className="row">
                <div className="col-md-4 col-sm-6 gal-img prod-name">
                  HAIR CARE
                  <a href="https://www.aveda.ca/salon/dk-salon-de-beaute">
                    <img
                      src="https://www.aveda.ca/media/export/cms/Site_Refreshes/FY21/Nutriplenish_Daily_Moisturizing_Treatment/FY20_Jan_Nutriplenish_Hair_gnav_drop_down-updated-V2.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img prod-name">
                  STYLING
                  <a href="https://www.aveda.ca/salon/dk-salon-de-beaute">
                    <img
                      src="https://www.aveda.ca/media/export/cms/Site_Refreshes/FY19/Oct_BCA_Speed_of_Light/Speed_of_Light/styling_SOL_oct_gnav.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img prod-name">
                  SKIN CARE
                  <a href="https://www.aveda.ca/salon/dk-salon-de-beaute">
                    <img
                      src="https://www.aveda.ca/media/export/cms/Site_Refreshes/FY21/tulasara/FY21_Tulasara_skincare_gnav_drop_down.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <p></p>
                <div className="col-md-4 col-sm-6 gal-img prod-name">
                  BODY CARE
                  <a href="https://www.aveda.ca/salon/dk-salon-de-beaute">
                    <img
                      src="https://www.aveda.ca/media/export/cms/Site_Refreshes/FY19/June_Cherry_Almond_Body/FY19_June_CherryAlmondBody_gnav_drop_down.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img prod-name">
                  MAKEUP
                  <a href="https://www.aveda.ca/salon/dk-salon-de-beaute">
                    <img
                      src="https://www.aveda.ca/media/export/cms/Site_Refreshes/FY20/Sept_FeedMyLips/FY20_Sept_Makeup_gnav_drop_down.jpg"
                      alt="aegis"
                      className="img-fluid mt-4"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-6 gal-img prod-name">
                  HAIR COLOUR
                  <a href="/contact">
                    <img
                      src="https://www.aveda.ca/media/export/cms/hair_color_landing/Nov_2019_update/HC_HairColor_FullSpectrum_Square.jpg"
                      alt="aegis"
                      className="img-hair-colour mt-4"
                    />
                  </a>
                  <p className="hair-color">
                    *Only curb side pickup or contact our{" "}
                    <a href="/contact">David Kim Salon de Beaute</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Products;
