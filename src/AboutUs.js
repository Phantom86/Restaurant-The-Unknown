import React from 'react';  //import react
import './App.css'; //import css file by the name of App


//Define the component
//this component is incharge of all the about us page related things
function AboutUs() {

    //using return is where it accepts a single object argument with data and also returns it with a react element
    return (


        //In react we use className instead of class because its a unique way to classify or identify a class in react js
        //Also used header 1 and header 4
        //styles is directly added into the App.css folder to minimize confusion
        <div className="WebDetails">

        <h1>Organization’s story</h1>
        
        <h4>Organizer, Shan, opened the first Foodies Bay Restaurant in Taiping, Perak on September 27, 1977.Today, there are 37 areas all through Arizona, California, Illinois, Louisiana, Nevada, Oregon, Tennessee, and Washington.Foodies Bay Restaurants are well known with a substantial gathering of people including families, kids, seniors and business experts.Our benevolent condition is perfect for praising unique events, facilitating a business lunch or assembling for a flavorful dinner with loved ones.Open day by day for lunch and dinner,Foodies Bay offers a choice of naturally arranged things utilizing just the best fixings accessible.Top picks incorporate Certified Angus Beef®, crisp fish, rotisserie chicken, infant back pork ribs, new prepared pot pie, strength plates of mixed greens, wood-let go pizzas, pasta, sandwiches, burgers and more. Foodies Bay is heated merchandise and treats including our Six-Layer Chocolate Motherlode Cake, Scratch Carrot Cake and delectably rich cream cheddar pies are prevalent top choices with our visitors.</h4>

        </div>
    )
}

//exporting the default function
export default AboutUs;