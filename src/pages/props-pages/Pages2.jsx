import './pages2.css';
const Pages2=(props)=>{
    return(
        <>
         <div className="space"></div>
        <div className="main-page">
               <div className="img-div"> <img  className="self-img" src={props.imgurl}></img></div>
                <div className="text-area2">
           <h6 className="heading" > {props.heading} </h6>
             <p className="para2"> {props.paragraph} </p>
            </div>
            </div>
        </>
    );
}
export default Pages2; 