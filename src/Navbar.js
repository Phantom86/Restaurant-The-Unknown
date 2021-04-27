import React from 'react'; //import react for this file is important
import './App.css'; //import css files
import Home from './ImageDeck'; 
import ContactUs from './ContactUs'; 
import AboutUs from './AboutUs';
import Food from './Food';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function NavBar() {
  return (
    <Router>
    <div className="Nav">
    <div className="RightSide">
    <div className="links">
    <a href="/Home">Home</a>
    <a href="/Food">Food</a>
    <a href="/ContactUs">Contact Us</a>
    <a href="/AboutUs">About Us</a> 
    </div>
    </div>

    <Switch>
    <Route exact path='/Home' component={Home}></Route>
    <Route exact path='/Food' component={Food}></Route>
    <Route exact path='/ContactUs' component={ContactUs}></Route>
    <Route exact path='/AboutUs' component={AboutUs}></Route>
    </Switch>    
    </div>
    </Router>
  );
}
export default NavBar;