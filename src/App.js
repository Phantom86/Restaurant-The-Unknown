import React from 'react';  //import react which is a compulsory for this page  
import './App.css';  //import the css page for App.js,it is named as App.css
import NavBar from "./Navbar"; //import the Navbar function from Navbar.js
import SideShow from "./Sideshow"; //import the Slideshow function from Slideshow.js



//define app function allong with an return 
function App() {  return(
    <div className="App">
    <NavBar /> 
    <SideShow />
    </div>);
}


export default App;