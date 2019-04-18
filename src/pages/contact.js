import React from 'react';
import Footer from '../components/footer';
import Header from '../components/Header';

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>Contact</h1>
            <p>
                Make sure to contact us by email or phone number if you have any suggestions or questions
            </p>
            <div>
                <span>Phone : </span>
                <i>+212652525389</i>
            </div>
            <div>
                <span>Email : </span>
                <i>khaliilelmaghraoui@gmail.com</i>
            </div>
            <div>
                <span>Twitter : </span>
                <i><a href='https://twitter.com/_kelmag' target="_blank">Follow Me</a></i>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;