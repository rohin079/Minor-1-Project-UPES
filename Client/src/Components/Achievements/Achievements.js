// Achievements.js

import React from 'react';
import './Achievements.css'; // Import CSS styles
import Image1 from './achv6.jpg'; // Import images
import Image2 from './achv1.png';
import Image3 from './achv5.jpg';
import Image4 from './achv4.jpg';
import Image5 from './achv7.jpg';

const Achievements = () => {
  const achievementsData = [
    {
        image: Image1,
        title: 'Achievement 1',
        content: 'Hii, my name is Dipendra Malik. I am happy to share that I recently particiapted in a hackathon and secured 1st position.The hackathon take place at IIT, Delhi on 25th and 26th November 2023. Final round constitued 5 teams. I designed a prototype of a website which can be used to connect students and teachers.  ',
      },
      {
        image: Image3,
        title: 'Achievement 2',
        content: 'Hello, I am Kush Rawat pursuing M.Tech from UPES.It is with immense pleasure that my research paper got published in IEEE. The paper was about the use of AI in the field of education. The paper discusses about the use of AI in the field of education and how it can be used to improve the quality of education. The idea was to use AI to make the learning process more interactive and fun.',
      },
      {
        image: Image2,
        title: 'Achievement 3',
        content: 'Greetings friends! I am Prerna Singh, student from School of Modern Media, UPES. I want to share the information that I recently participated in Uttarakhand Shooting Competition,2023 and I bagged second position in it. The competition took place in Dehradun and I was awarded with a cash prize of 1 lakh rupees.',
      },
      {
        image: Image4,
        title: 'Achievement 4',
        content: 'I am Trisha Bhatt and I would like to take a moment to happily announce that I recently particiapted in the National Tech Symposium, a premier coding competition spanning across India. The event took place at NIT, Rourkela. Deep knowledge in algorithmic challenges and precise coding techniques helped me to propel to the top, surpassing numerous competitors nationwide.',
      },
      {
          image: Image5,
          title: 'Achievement 5',
          content: 'Winning the district-level badminton tournament was an exhilarating experience for me, Divyanshi Puhan. Stepping onto the court filled me with a blend of nerves and excitement, but my determination to give my best never wavered. Match after match, I pushed my limits, relying on strategic moves and swift footwork to secure each victory. Standing victorious at the tournament end was not just about winning a title; it was a testament to my unwavering dedication and countless hours of training. The joy of triumphing in the tournament is a cherished moment that fuels my passion for badminton and motivates me to aim higher in my athletic journey.',
        },
  ];

  return (
    <div className="achievements-page">
      <h1 className="achievements-title">Achievements</h1>
      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="achievement-block">
            <img className="achievement-image" src={achievement.image} alt={`Achievement ${index + 1}`} />
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="share-btn">Share Your Achievement</button>
    </div>
  );
};

export default Achievements;
