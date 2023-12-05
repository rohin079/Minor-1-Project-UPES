import React from 'react'
import './alumni.css'

function Alumni() {
  return (
    <div id="about">
      <h2 className="about-title">Alumni Talk</h2>
      <div className="about-data">
        <div className="about-img">
          <img src="https://www.kindpng.com/picc/m/40-405645_college-student-images-png-transparent-png.png" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">Sarah Thompson</h2>
          <p className="about-text">
          Graduation Year: 2010</p>
          <p>Degree: Bachelor of Arts in Journalism</p>
         <p> Current Occupation: Senior Editor at Global News Network</p>
            <p>Bio: Sarah has been working in the field of journalism for over a decade. After graduating, she started as a reporter at a local newspaper and worked her way up to becoming a senior editor at a prestigious global news network. Sarah is passionate about investigative journalism and has won several awards for her impactful reporting.
                    </p>
        </div>
		
      </div>
      <br /><br /><br />
	  <div className="about-data">
        <div className="about-img">
          <img src="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">Alex Rodriguez</h2>
          <p className="about-text">
          Graduation Year: 2015</p><p>
Degree: Bachelor of Science in Computer Science</p><p>
Current Occupation: Software Engineer at Tech Innovations Inc.</p><p>
Bio: Alex is a software engineer specializing in artificial intelligence and machine learning. Since graduating, Alex has worked on cutting-edge projects at Tech Innovations Inc., contributing to advancements in automation and technology. Alex is also a regular speaker at tech conferences, sharing insights into the latest trends in the industry.
                    </p>
        </div>
      </div>
	<br /><br /><br />
	  <div className="about-data">
        <div className="about-img">
          <img src="https://www.pngarts.com/files/7/Female-College-Student-PNG-Photo.png" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">Dr. Maya Patel</h2>
          <p className="about-text">
          Graduation Year: 2007</p><p>
Degree: Doctor of Medicine</p><p>
Current Occupation: Pediatrician at City General Hospital</p><p>
Bio: Dr. Maya Patel pursued her passion for medicine after graduating, specializing in pediatrics. She currently serves as a dedicated pediatrician at City General Hospital, where she has made significant contributions to child healthcare. Dr. Patel is actively involved in community outreach programs, providing medical support and education to underserved populations.
                    </p>
        </div>
      </div>    
	  </div>
  )
}

export default Alumni