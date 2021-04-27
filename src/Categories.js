import React from 'react';  //import react which is compulsory for Categories.js

//const will also known as contant which indicates the cariable wont be reassigned
//categories is displays 
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
