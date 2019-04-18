import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <h1>Kelmag's</h1>
            <nav>
                <ul style={{
                      listStyleType: "none",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      backgroundColor: "#f1f1f1",
                }}>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                    <li><Link to="/blog" >Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;