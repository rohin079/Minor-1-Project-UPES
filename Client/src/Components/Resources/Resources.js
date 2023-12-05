import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./resources.css";
import image from './bg.jpg'
import dark from './dark.jpg';

const CategorySelection = (props) => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { name: 'B Tech CSE',  subcategories: ['Year 1', 'Year 2', "Year 3", 'Year 4'] },
    { name: 'B Design',  subcategories: ['Year 1', 'Year 2', "Year 3", 'Year 4','Year 5'] },
    { name: 'B Sc', subcategories: ['Year 1', 'Year 2'] },
    { name: 'B BA', subcategories: ['Year 1', 'Year 2', "Year 3"] },
  ];

  const handleSubcategorySelect = (subcategory) => {
    navigate(`/items/${subcategory}`);
  };

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  useEffect(() => {
    if (props.theme !== 'dark') {
      document.body.style.background = `url(${image}) `;
      document.body.style.backgroundSize = 'cover';
    }
    else {
      document.body.style.background = `url(${dark}) `;
      document.body.style.backgroundSize = 'cover';
    }

    return () => {
      document.body.style.background = null;
    };
  }, [props.theme]);

  return (
    <>
      <div style={{ marginBottom: '150px'}}>
        <h1 className='text-center pt-5' style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>Select A your Year</h1>
        <div className="category-blocks" >
          {categories.map((category) => (
            <div
              key={category.name}
              className={'category-block'}
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
              style={{  backgroundColor: "rgb(23, 23, 65)", backgroundSize: "cover"}}
            >
              <div className="category-overlay" style={{borderRadius:"5%", backgroundColor:"transparent"}}>
                {hoveredCategory === category.name ? (
                  <div className="subcategory-buttons">
                    {category.subcategories.map((subcategory) => (
                      <Button
                        key={subcategory}
                        variant="contained"
                        color="secondary"
                        style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", borderRadius: "10px" }}
                        onClick={() => handleSubcategorySelect(subcategory)}
                      >
                        {subcategory}
                      </Button>
                    ))}
                  </div>
                ) :
                  (category.name)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySelection;
