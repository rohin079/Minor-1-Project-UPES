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
        <div className="card-container"style={{ backgroundColor: "rgb(23, 23, 65)"}}>
            <h1 style={{color:"white"}}>EVENTS</h1>
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
                                Established in the year 2010, The UPES ACM Student Chapter primarily
                                focuses on creating interest, developing logical thinking ability and
                                spreading awareness about the technological and computing information
                                among the people. Started as a small unit, the UPES ACM society evolved
                                consistently year by year and is now the only student chapter with
                                international exposure. The UPES ACM team believes in working together
                                as a family and always standing as a constant support for each other.
                                Currently a team of about 400 members, the chapter works as hard as
                                possible and put all our hearts and sweat to make sure that it functions
                                properly and stands to people’s expectations.
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
                                Cybersentinel, as you all know, is not just a student organization; it's a community of individuals who are deeply passionate about technology and cybersecurity. Founded on January 28, 2020, on International Data Privacy Day, our mission is to empower students and make them cyber-aware. We are a multifaceted group engaged in a wide array of tech-related activities. We not only conduct CTFs, Workshops, Talks, Challenges, and provide Solutions and guidance as a team of cybersecurity enthusiasts but also delve into various technology domains. We design websites, explore cutting-edge tech trends, and offer a holistic approach to tech education. Our team is comprised of the next generation of technology enthusiasts, equipped to tackle a myriad of technological challenges, and dedicated to developing both robust Cyber-Armor and versatile tech expertise.
                                UPES CYBER SENTINEL even has a wing for girls who want to excel in the security field. Miss In Cyber is an initiative to empower girls in the domain of cyber security.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>



                {/* Repeat the Card component to ensure at least 4 cards are visible */}
                {/* ... Add more cards as needed ... */}
            </div>
            <button className="share-btn">Edit the Events</button>
        </div>
    );
}
