import React from "react";
import { RED, YELLOW, BROWN, GREEN } from '../constants.js';
import '../App.css';
import './AboutMe.css';

class AdditionalInfo extends React.Component{
  render() {
    return (
      <div>
        <p className="desc" style={{color:"white"}}>
          Hey, I'm Huey.<br />
          I was born in Singapore,<br />
          and grew up in Sunnyvale, CA.<br />
        </p>
        <p className="desc" style={{color:GREEN}}>
          Some of my favorite movies:<br />
          The Grand Budapest Hotel,<br />
          Resevoir Dogs, and<br />
          Casablanca.
        </p>
      </div>
    )
  };
}

export default AdditionalInfo;
