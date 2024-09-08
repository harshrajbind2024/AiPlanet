// import React from "react";
// import './Explore.css';
// import TextField from "@mui/material/TextField";
// function Explore() {
//     return ( 
//         <div className="exp">
//            <h2 className="h">Explore Challenges</h2>
//            <div className="ediv">
//              {/* <input type=""/> */}
//              <TextField
//           id="outlined-basic"
//           variant="outlined"
//           fullWidth
//           label="Search"
//         />
//         <span className="fil">Filter</span>

//            </div>
//         </div>
//      );
// }

// export default Explore;


import react,  { useState } from 'react';

function Challenges() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1>Explore Challenges</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>Filter</button>
      </div>
    </div>
  );
}

export default Challenges;