import React from "react";
import './pages.css';
const Pages=(props)=>{
    return(
        <>
         <div className="space"></div>
        <div className="main-page">
            <div className="text-area">
           <h6> {props.heading} </h6>
             <p className="para1"> {props.paragraph} </p>
            </div>
            <div className="img-div1"> <img  className="self-img" src={props.imgurl}></img></div>
            </div>
        </>
    );
}
export default Pages; 