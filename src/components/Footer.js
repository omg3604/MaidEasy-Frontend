import React from 'react'
import './Footer.css'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className="footer text-dark fixed-bottom">
                <div className=" container col-md-6 p-1 text-center">
                    &copy; {year} MaidEasy | All rights reserved
                </div>  
        </footer>
    )
}

export default Footer;