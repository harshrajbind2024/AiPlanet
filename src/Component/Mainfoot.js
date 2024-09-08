// import React from "react";
// import "./Mainfoot.css";
// function Mainfoot() {
//   return (
//     <div className="mf">
//       <div className="a">


//         <div className="b1">
//             {/* <img/> */}
//            <div className="c1">
//                 <p className="c1p1">100K+ </p>
//                 <p className="c1p2">AI model submissions</p>
//            </div>
//         </div>

//          <span className="line"></span>


//         <div className="b2">
//           {/* <img/> */}
//           <div className="c2">
//             <p className="c2p1">50K+</p>
//             <p className="c2p2">Data Scientists</p>
//           </div>
//         </div>

//         <div className="b">
//           {/* <img/> */}
         
//          <div className="c3">
//            <p className="c3p1">100+</p>
//            <p className="c3p2">AI Challenges hosted</p>
//          </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Mainfoot;


import React from 'react';
import "./Mainfoot.css";

function Mainfoot() {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <rect x="15" y="3" width="3" height="6"/>
            <rect x="7" y="3" width="3" height="6"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div className="content">
          <span className="number">100K+</span>
          <span className="text">AI model submissions</span>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="8.5" cy="7" r="4"/>
            <line x1="20" y1="8" x2="20" y2="14"/>
            <line x1="20" y1="15" x2="20" y2="21"/>
            <line x1="16" y1="11" x2="12" y2="7"/>
          </svg>
        </div>
        <div className="content">
          <span className="number">50K+</span>
          <span className="text">Data Scientists</span>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <rect x="3" y="11" width="18" height="11"/>
            <path d="M15 16h4"/>
            <path d="M19 7l-.86-.86a4 4 0 0 0-5.14 0L10 7"/>
          </svg>
        </div>
        <div className="content">
          <span className="number">100+</span>
          <span className="text">AI Challenges hosted</span>
        </div>
      </div>
    </div>
  );
}

export default Mainfoot;