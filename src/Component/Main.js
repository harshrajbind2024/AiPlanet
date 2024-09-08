import React from "react";
import './Main.css';
import Navbar from "./Navbar";

function Main() {
    return ( 
        <div className="main">

         <Navbar/>

         <div className="a">
          
           <div className="b">
              <div className="c">
               
               <div>
                {/* <p className="line"></p> */}
               <h1 className="h1">Accelerate Innovation with Global AI Challenges</h1>
               </div>

               <p className="p">AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
              </div>
              <br/>
              <button className="btt">Create Challenge</button>
           </div>
         </div>
         <div className="side">
            {/* <img src="" /> */}
         </div>
        </div>
     );
}

export default Main;