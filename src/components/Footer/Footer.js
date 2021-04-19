import React from 'react';
import './Footer.scss';

function Footer(){
    return(
        <div className="footer">
            <p>Sitemap</p>
            <div className="col-wrapper">
                <div className="col">
                    <h4>About Product</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Legal</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Support</h4>
                        <ul>
                            <li>Product Support</li>
                            <li>Community</li>
                            <li>Report Abuse</li>
                        </ul>
                    </div>
                <div className="col">
                <h4>Account</h4>
                    <ul>
                        <li>My Account</li>
                        <li>Create Account</li>
                        <li>My Renewals</li>
                    </ul>
                </div>
            </div>
            <p>This side and all works are trademark of gylim0604</p>
        </div>
    )
}

export default Footer;