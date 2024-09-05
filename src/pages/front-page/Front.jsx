import img1 from '../../assets/netflixlogo.png';
import img2 from '../../assets/tv.png';
import img3 from '../../assets/kids.png';
import img4 from '../../assets/download.jpg';
import Email from "../Email/Email";
import './front.css';
import Pages from "../props-pages/Pages";
import Pages2 from "../props-pages/Pages2";
import { Link } from "react-router-dom";
import { TfiPlus } from "react-icons/tfi";
const Front = () => {
    return (
        <>
            <div className="first">
                <div className="overlay">
                    <div className="header">
                       <div className="logo-div">
                       <img src={img1} className="self-logo" />
                        </div>
                      <div  className="signin"><div className="self-button" ><Link to='/signin'>Signin</Link></div>
                        </div>    
                    </div>
                    <div className="main2">
                        <p className="unlim">Unlimited  movies,tv shows, and more</p>
                        {/* <p>&#9776;</p> */}
                        <p className="unlim2"> Watch anywhere. Cancel anytime.</p>
                    </div>
                    <Email />
                   
                </div>
            </div>

            <Pages  heading='Enjoy on your TV' paragraph='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' imgurl={img2}  />
            <Pages2   imgurl={img4} heading='Download your shows to watch offline' paragraph='Save your favorites easily and always have something to watch.' />
            <Pages  heading='Watch everywhere' paragraph='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'   />
            <Pages2  heading='Create profiles for kids' paragraph='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.' imgurl={img3}  />
           
            <div> 
                <div className="main-footer">
                    <h5>Frequently Asked Questions</h5>
                    <ul>
                        {/* <li>What is Netflix?<a href="#"><TfiPlus size={40} style={{ marginRight: '20px', color: 'whitesmoke' }} /></a></li> */}
                        <li>
                        What is Netflix?
                            <div className="dropdown">
                            <a href="#"><TfiPlus size={40} style={{ marginRight: '20px', color: 'whitesmoke' }} /></a>
                                <div className="dropdown-content">
                                    <p className="header">kjsdfffff dksjffffff akshddddddddd aklsdhnhmzhd</p>
                                </div>
                            </div>
                        </li>
                        <li>How much does Netflix Cost?<a href="#"><TfiPlus size={40} style={{ marginRight: '20px', color: 'whitesmoke' }} /></a></li>
                        <li>Where can I Watch?<a href="#"><TfiPlus size={40} style={{ marginRight: '20px', color: 'whitesmoke' }} /></a></li>
                        <li>How do I cancel?<a href="#"><TfiPlus size={40} style={{ marginRight: '20px', color: 'whitesmoke' }} /></a></li>
                        <li>What Can I watch on Netflix?<a href="#"><TfiPlus size={40} style={{ marginRight: '20px', color: 'whitesmoke' }} /></a></li>
                        <li>Is Netflix is good for Kids?<a href="#"><TfiPlus size={40} style={{ marginRight: '20px', color: 'whitesmoke' }} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="gmail">
                <Email />
            </div>

        </>
    );
}
export default Front;