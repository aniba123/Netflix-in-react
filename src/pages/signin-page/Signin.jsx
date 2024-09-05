import './signin.css';
import img1 from '../../assets/netflixlogo.png';
import Email from "../Email/Email";
import { Link } from "react-router-dom";
const Signin =()=>{
    return(
        <>
         <div className="first">
                <div className="overlay">
                <div className="header">
                    <div className="logo-div">
                    <Link to='/'><img src={img1} className="self-logo" /></Link>
                    </div>
                </div>
                <div className="signin-main">
                    <div className="second-one">
                        Sign In
                    </div>
                    <input type="email" className="input-type" placeholder="Email OR mbil number"></input>
                    <input type="email" className="input-type2" placeholder="Password"></input>
                    <button  className="input-type3" >Sign In</button>
                    <div className="OR">OR</div>
                    <button  className="input-type4" >Use a Sign-In Code </button>
                    <div  className="input-type5" >Forget Password ? </div>
                </div>
            </div>
                                
            </div>
        </>
    );
}
export default Signin;