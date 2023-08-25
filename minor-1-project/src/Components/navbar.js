import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            {/* NAVBAR */}
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>M</span>inor
                        <span>P</span>roject
                    </h2>
                </div>

                <div className="menu-link">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">AlumniConnect</a></li>
                    </ul>
                </div>
            </nav>

            {/* BODY SECTION */}
            <section className="hero-section">
                <p>WELCOME TO </p>
                <h1>COLLEGE CONNECT</h1>

            </section>

        </>
    )
}

export default Navbar;