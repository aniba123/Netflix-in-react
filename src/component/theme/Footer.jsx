// import React from "react";
import Email from '../../pages/Email/Email';
import './footer.css';
const Footer = () => {
    return (
        <>
            <div className="space"></div>
            <div className="bottom-links">
                <div className="links">
                    <a href="#" style={{ color: "white" }} >Questions? Contact us.</a>
                    <div className="main1">
                        <div className="div1links">
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Speed Test</a></li>
                            </ul>
                        </div>
                        <div className="div2links">
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Cookie Preferences</a></li>
                                <li><a href="#">Legal Notices</a></li>
                            </ul>
                        </div>
                        <div className="div3links">
                            <ul>
                                <li><a href="#">
                                    Account</a></li>
                                <li><a href="#">
                                    Ways to Watch</a></li>
                                <li><a href="#">Corporate Information</a></li>
                                <li><a href="#">
                                    Only on Netflix</a></li>
                            </ul>
                        </div>
                        <div className="div4links">
                            <ul>
                                <li><a href="#">

                                    Media Center</a></li>
                                <li><a href="#">

                                    Terms of Use</a></li>
                                <li><a href="#">
                                    Contact Us</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;