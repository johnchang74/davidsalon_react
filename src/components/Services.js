import React, { Component } from 'react';

class Services extends Component {
    componentDidMount() {
        document.title = "David Kim Salon de Beauté"
    }

    render() {
        return (
            <div>
                <div class="breadcrumb-agile">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Services</li>
                    </ol>
                </div>
                <section class="pricing py-5">
                    <div class="container py-md-5">
                        <h3 class="heading text-capitalize text-center mb-3 mb-sm-5">SALON SERVICES</h3>
                        <div class="row pricing-grids">
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>MEN</h3>
                                    {/* <!-- Item starts --> */}
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>MEN’S CUT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                        </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BEARD TRIM / MOUSTACHE TRIM</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$10</h6>
                                        </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>HOT TOWEL SHAVE</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$15</h6>
                                        </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>12 YEARS & UNDER 12 YEARS CUT & STYLE</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$15</h6>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>WOMEN</h3>
                                    {/* <!-- Item starts --> */}
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>WOMEN’S CUT & Styling</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>12 YEARS & UNDER 12 YEARS CUT & STYLE</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$21</h6>
                                        </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Wash & styling</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$25</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Up do (by consultation)</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>COLOUR</h3>
                                    {/* <!-- Item starts --> */}
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>ROOT TOUCH UP</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>ROOT RETOUCH & REFRESH</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$21</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>HIGHLIGHTS</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BALAYAGE/ OMBRE/ SOMBRE</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>TONER</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>MALE ROOT TOUCH UP</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>MALE HIGHLIGHT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>COLOUR CORRECTION (By consultation)</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BOTANICAL BOND PROTECTION</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>OLAPLEX BOND PROTECTION</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>POSA CAREPLEX</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>DIKSO PLEX</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BONDPLEX</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>TECPLEX BOND PROTECTION</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>VITAMINO ACIDIC SEALER</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>TREATMENT</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>DEEP HYDRATION TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>SCALP BENEFIT BALANCING TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BOTANICAL SCALP & HAIR TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$21</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>PRAMASANA SCALP & HAIR TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$21</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>KERATIN PROTEIN TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$25</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>INVATI ADVANCED SCALP TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>INVATI HAIR & SCALP TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>INVATI MEN ADVANCED SCALP TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>EX-CERAMIDE TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>DAMAGE REMEDY PROTEIN TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>DRY REMEDY TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>SMOOTH INFUSION TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BE CURLY TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>NUTRIPLENISH TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>PERM & CHEMICAL</h3>
                                    {/* <!-- Item starts --> */}
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BOTANICAL WATER BASED PERM</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BOTANICAL CREAM BASED PERM</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>MULTI-PURPOSE WAVING PERM</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>BOTANICAL R-CYSTEINE PERM</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>JAPANESE RELAXER</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$21</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>JAPANESE CRYSTALLIZING STRAIGHT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$21</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>KOREAN VOLUME MAGIC STRAIGHT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$21</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>DIGITAL PERM (KOREAN & JAPANESE PRODUCTS)</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$25</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item my-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>IRON PERM</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$25</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>ROOT BODY VOLUME PERM</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item mt-4">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>KERATIN HAIR SMOOTHING TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <img src="/assets/images/inst_4_faces_v1.jpg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="pricing py-5">
                    <div class="container py-md-5">
                        <h3 class="heading text-capitalize text-center mb-3 mb-sm-5"> Our SPA Services</h3>
                        <div class="row pricing-grids">
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>MANICURES & PEDICURES</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>POLISH CHANGE</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>AVEDA AROMA MANICURE/PEDICURE</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>GEL (SHELLAC)</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>RENEWING HAND TREATMENT</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <img src="/assets/images/aveda_pure_pro_spa.jpg"></img>            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>WAXING</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Eyebrow</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Lip</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Chin</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Eyebrow & lip combo</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Side burn</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Full face</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Under arm</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Half arm</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Full arm</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Half leg</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Half leg & bikini</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Full leg</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Full leg & bikini</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>bikini</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Brazilian</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>10 toes/fingers</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>stomach</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Back or chest</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>shoulder</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Neck & shoulder</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>TULASARA FACIAL TREATMENT</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>30 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>60 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>90 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>DUAL EXFOLIATION FACIAL TREATMENT</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>60 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>90 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>BOTANICAL SKIN RESURFACING</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>30 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>60 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>90 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>AYURVEDIC EYE TREATMENT</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>30 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>TULASARA AROMA BACK TREATMENT</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>30 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>60 min</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6  mb-lg-0 mb-5">
                                <div class="padding">
                                    <h3>MAKEUP</h3>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Makeup for any occasion</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="row border-dot no-gutters">
                                            <div class="col-8 menu-item-name">
                                                <h6>Wedding makeup (Bridal)</h6>
                                            </div>
                                            {/* <div class="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                            </div> */}
                                        </div>
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
export default Services