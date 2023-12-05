// ActionAreaCard.js

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Events.css'; // Import the custom styles
import img1 from './acm.jpeg';
import img2 from './csa.png';
import img3 from './Open.png';
import img4 from './csi.png';
import img5 from './csf2.png';
import img6 from './csa2.png';
import img7 from './open2.png';
import img8 from './csi2.png';

export default function ActionAreaCard() {
    return (
        <div className="card-container">
            <h1>EVENTS</h1>
            <div className="cards-wrapper">
                {/* Repeat the Card component to ensure at least 4 cards are visible */}
                <Card className="card">
                    <CardActionArea>
                        <img src={img1} alt="items" />
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div">
                                UPES ACM
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica  this example, I increased the width of each card to 300px and adjusted the margin to reduce the gap between cards. Feel free to experiment with these values to achieve the desired spacing and card size. Remember that the total width of cards plus margins should be less than or equal to the width of the container to ensure that at least 4 cards are visible on the screen. Adjust the values based on your design preferences and screen size.

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <img src={img6} alt="items" />
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div">
                                CSA
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                With the vision of redefining excellence, Cloud Security Alliance (CSA) embarked upon its glorious journey as the youngest and first-ever domain-centric student chapter in UPES in 2017. CSA student chapter is zealously dedicated to raising awareness of best practices to help ensure a secure cloud computing environment, in association with Cloud Security Alliance, Uttarakhand. In the pursuit of its aim, the student chapter has been reputed as a pinnacle of success, which is evident through the plethora of opportunities provided such as technology-centred workshops, technical events, and fun fests. “A community of learners, innovators, and champions of our own success”, quoting this, UPES-CSA strives to nurture its community of student innovators with immense knowledge.

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <img src={img7} alt="items" />
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div">
                                OPEN COMMUNITY
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                At OPEN we aim to spread awareness about the advantages of open softwares. Our dynamic team works on the premise of providing the right support and mentorship to students working on open source projects, thus leading towards various advancements and innovation in this line of work. Our community provides a holistic environment to explore, ideate and originate various solutions to real-world problems, thus contributing towards the welfare and advancement of our society while enhancing our communication, leadership, teamwork and soft skills.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="card">
                    <CardActionArea>
                        <img src={img8} alt="items" />
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div">
                                UPES CSI
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Computer Society of India is a body of computer professionals in India, who wanted to share their ideas, passion and knowledge. The UPES branch of the Computer Society of India, UPES-CSI, was formed in 2010, and saw the motto for a forum to “CREATE, SHARE, and INNOVATE”.

UPES-CSI continued to organise several seminars, workshops, and training sessions, educating its youth with cutting-edge advances. This organisation strives to give the students access to the most recent technological knowledge, a range of creative activities, and the opportunity to network with eminent lecturers who specialise in various technologies.

In the years succeeding its creation, UPES-CSI came to be recognised as one of the Best Student Chapters, acclaiming the zeal, passion and dedication of the team. UPES-CSI is an all-inclusive resource for technocrats looking for affordable advice. As of today, UPES-CSI has collaborated with geeksforgeeks, the biggest computer science portal for geeks in the world. Apart from collaborations, UPES-CSI also hosts its flagship events yearly, with the latest being Arena 2.0, Hackathon 7.0 and Yugmak ‘23

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card className="card">
                    <CardActionArea>
                        <img src={img5} alt="items" />
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div">
                                UPES CSF
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>



                {/* Repeat the Card component to ensure at least 4 cards are visible */}
                {/* ... Add more cards as needed ... */}
            </div>
        </div>
    );
}
