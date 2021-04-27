//import react and useState from react for Food.js is compulsory
//useState is a hook which allows to add react state to function components
//note:try to use react.usestate();
import React, { useState } from 'react'; 
import Menu from './Menu';  //imports the menu function from Menu.js
import Categories from './Categories'; //imports the Categories function from Categories.js
import items from './fooddata'; //imports the items from fooddata.js

//The first general category is All where the user will see all the menu as one without any filtration
//Felt easier to implement this outside then implementing it inside food function since it gave me error really dont know why 
//Do some research later and improve
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

//define Food function
function Food() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Food;
