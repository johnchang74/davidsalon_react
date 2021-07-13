import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'; 
import Home from './components/Home';
import Topbar from './components/partial/Topbar';
import Footer from './components/partial/Footer';
// import About from './components/About';
import Services from './components/Services';
// import Single from './components/Single';
// import Gallery from './components/Gallery';
import Products from './components/Products';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import InvoicePage from './components/invoice/InvoicePage';
import './components/invoice/scss/main.scss';
import apikeys from './apikeys';
import ReactGA from 'react-ga';

const trackingId = apikeys.GA_TRACKING_ID; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

function App() {
  useEffect( () => {
    // This line will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className="main_photos">
      <Router>
        <Topbar/>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route path='/aboutus' component={AboutUs}/>
            <Route path='/services' component={Services}/>
            <Route path='/products' component={Products}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/invoice' component={InvoicePage}>
              <div className="app">
                <InvoicePage />
              </div>
            </Route>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
