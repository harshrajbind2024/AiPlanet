import React from "react";
import './Participate.css';
function Participate() {
    return (  
        <div className="parti">
           <h1 className="hh1">Why Participate in <span className="sg">AI Challenges?</span> </h1>
            <div className="sec4">
               
                <div className="s1">
                    {/* <img/> */}
                    <h3 className="s1h">Prove your skills</h3>
                    <p className="s1p">Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                </div>

                <div className="s2"> 
                {/* <img/> */}
                <h3 className="s2h">Learn from community</h3>
                <p className="s2p">One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
                </div>
   <br></br>
                <div className="s3">
                    {/* <img/> */}
                    <h3 className="s3h">Challenge yourself</h3>
                    <p className="s3p">There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>

                </div>


                <div className="s4">
                    {/* <img/> */}
                    <h3 className="s4h">Earn recognition</h3>
                    <p className="s4p">You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>

                </div>


            </div>
        </div>
    );
}

export default Participate;