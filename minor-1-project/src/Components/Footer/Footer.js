import React from "react";
import './Footer.css'
export default function Footer() {
    return(
        <div class = "row">
            <div class="col">
                <img src="./GradHat.webp" alt="GrduationHat" class="HatLogo"/>
                <p class="textunderimg">Let's Grow Together!!</p>
            </div>
            <div class="col">
                <h3>Useful Links</h3>
                <p>About us</p>
                <p>Study Resources</p>
                <p>Student Chapters</p>
                <p>Gallery</p>
                <p>FAQs</p>
            </div>

            <div class="col">
                <h3>Contact Us</h3>
                <p class="email">Email: abc@gmail.com</p>
                <p>Mobile: +91-1122334455</p>
            </div>

            <div class="col">
                <h3>Follow Us</h3>
                <p class="facebook"><i class="fab fa-facebook-square"></i>&nbsp; Facebook</p>
                <p class="instagram"><i class="fab fa-instagram"></i>&nbsp; Instagram</p>
                <p class="twitter"><i class="fab fa-twitter"></i>&nbsp; Twitter</p>
                <p class="linkedin"><i class="fab fa-linkedin"></i>&nbsp; LinkedIn</p>
            </div>
            </div>
    )
};