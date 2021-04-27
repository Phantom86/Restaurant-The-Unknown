import React from 'react'; //import react js is compulsory for ContactUs.js
import './App.css'; //import the css file

//define Contact Us function
function ContactUs() {

    //Displays all the information about the contact details
    //Can be added manually in the code for more contact options 
    return (
        <div className="ContactDetails">

        <h1>Contact Us </h1>
        <h4>Contact Number : 011-11232776 </h4>
        <h4>Email : foodiesbay@gmail.com </h4>
        <h6>For any furthur enquiries email us along with the issue</h6>


        </div>
    )
}

//export only ContactUs function
export default ContactUs;