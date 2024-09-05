import React from "react";
import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
import './email.css';
const Email = () => {
    return (
        <>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="bottom">
                <div className="email">
                    <input type="email" className="self-box" placeholder="Email Address" style={{ color: "white" }} />
                </div>
                <div className="link"><button className="self-link" ><Link to='/getstarted' >Get Started</Link>  <p style={{padding:"5px"}} > &#62;</p></button></div>
            </div>
        </>
    );
}
export default Email;