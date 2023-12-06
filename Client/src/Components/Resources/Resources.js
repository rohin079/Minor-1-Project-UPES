import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import "./resources.css";
import image from './bg.jpg'
import dark from './dark.jpg';

const CategorySelection = (props) => {
  // const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { name: 'B Tech CSE',  subcategories: ['Year 1', 'Year 2', 'Year 3', 'Year 4'] },
    { name: 'B Design',  subcategories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'] },
    { name: 'B Sc', subcategories: ['Year 1', 'Year 2', 'Year 3'] },
    { name: 'B BA', subcategories: ['Year 1', 'Year 2', 'Year 3'] },
  ];

  const handleSubcategorySelect = (subcategory) => {
    const driveFolderLink = getDriveFolderLink(subcategory);
    window.location.href = driveFolderLink;
  };

  const getDriveFolderLink = (subcategory) => {

    const folderLinks = {
      'B Tech CSE': {
        'Year 1': 'https://drive.google.com/drive/folders/1wGxszEinS9QozSbI1wnFY80oKGKxm6bL?usp=sharing',
        'Year 2': 'https://drive.google.com/drive/folders/1e4k4bBjE1b0hA0rRu1KZR_vq2wKhaUnw?usp=sharing',
        'Year 3': 'https://drive.google.com/drive/folders/1vnwADgKJIYgtmu8TqzgrFu0LtI4Q87px?usp=sharing',
        'Year 4': 'https://drive.google.com/drive/folders/19j8IaBktDS84krLufp-JVnlQxJVgVre6?usp=sharing',
      },
      'B Design': {
        'Year 1': 'https://drive.google.com/drive/folders/1oHSFRJFYgpBIec2aj5l-Z1xlvnG_s8vA?usp=sharing',
        'Year 2': 'https://drive.google.com/drive/folders/1lVezET4328mwuRZgUmIbsTQ_W4FclOKc?usp=sharing',
        'Year 3': 'https://drive.google.com/drive/folders/1ZLJUq7WrAYhCXR_1QLsZADHMDR_kg9mZ?usp=sharing',
        'Year 4': 'https://drive.google.com/drive/folders/1f-S1OHJhA25TdfqRqY1ZQtf0mRytG9V8?usp=sharing',
        'Year 5': 'https://drive.google.com/drive/folders/1yHpQn_b7ECQLYtZMwuW2TqFbSpkU1ylH?usp=sharing',
      },
      'B Sc': {
        'Year 1': 'https://drive.google.com/drive/folders/1bRsEsexO7rD218pRkze7xcXzd8rBQMrZ?usp=sharing',
        'Year 2': 'https://drive.google.com/drive/folders/1wsS9pLlQP-uUp6-JSpGk2Adi-g5MrYrU?usp=sharing',
        'Year 3': 'https://drive.google.com/drive/folders/124BGKkqaMatb_lCZrHbjbeilXIYkAM0s?usp=sharing',
      },
      'B BA': {
        'Year 1': 'https://drive.google.com/drive/folders/1R2rgo4cyZm874s1oSLFFefhnHM62FIto?usp=sharing',
        'Year 2': 'https://drive.google.com/drive/folders/1Ry4Zu_N-tdEo6X5wvYmznDVduwQmseIH?usp=sharing',
        'Year 3': 'https://drive.google.com/drive/folders/1VGCYlkmcFLNNHLwyX7mMnzXPAOdosX2o?usp=sharing',
      },
    };

    // Get the folder link based on the selected category and subcategory
    return folderLinks[hoveredCategory][subcategory];
  };

  useEffect(() => {
    if (props.theme !== 'dark') {
      document.body.style.background = `url(${image}) `;
      document.body.style.backgroundSize = 'cover';
    } else {
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
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
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
                ) : (
                  category.name
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySelection;
