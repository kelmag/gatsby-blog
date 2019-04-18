import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/Header';

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <h1>About Us</h1>
            <p>
                This is my personal blog, I'll be posting all of my articles and stuff down here!
                I hope you'll have a great time discovering.
            </p>
            <div>
                <h4>Contact me ?</h4>
                <p><Link to="/contact">Click Here</Link></p>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutPage;