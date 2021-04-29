import React from "react";
import "./Home.css";
import TE from './TE.jpg'; 

function Home() {
  return (
    <div className="home">
      <div className="home__container">

          <img className="home__image" src={TE} alt="TE" border="0" />
      </div>
    </div>
  );
}

export default Home;
