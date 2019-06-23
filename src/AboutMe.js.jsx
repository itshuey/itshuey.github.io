import React from "react";
import { RED, YELLOW, BROWN, GREEN } from './constants.js';
import './App.css';
import { AnimatedText } from "./AnimatedText";
import selfie from './media/polaroid.jpg';
import soundcloud from './media/soundcloud.png';
import facebook from './media/facebook.png';
import instagram from './media/instagram.png';
import email from './media/email.png';

class AboutMe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pomFontColor: "white",
      mathFontColor: "white",
      csFontColor: "white",
      filmFontColor: "white",
      designFontColor: "white",
      renderSelfie: false,
    };
  }

  render() {
    return (
      <div className="aboutMePage">
      <div className="smallColumn">
        <div className="photo">
          {this.state.renderSelfie && <img src={selfie} className="selfie"/>}
        </div>

      </div>
      <div className="column">
      <AnimatedText
        textColor={"white"}
        overlayColor={GREEN}
      >
      &nbsp;&nbsp;about <span onMouseEnter={() => this.setState({ renderSelfie: true })}><u>me</u></span>&nbsp;&nbsp;
      </AnimatedText>
      <p className="desc">
        senior at
            <span
              style={{ color: this.state.pomFontColor }}
              onMouseEnter={() => this.setState({ pomFontColor: GREEN })}
              > <b>pomona college</b><br />
            </span>
        studying
            <span
              style={{ color: this.state.mathFontColor }}
              onMouseEnter={() => this.setState({ mathFontColor: GREEN })}
              > math</span> and
            <span
              style={{ color: this.state.csFontColor }}
              onMouseEnter={() => this.setState({ csFontColor: GREEN })}
              > cs</span> <br />
        into
            <span
              style={{ color: this.state.filmFontColor }}
              onMouseEnter={() => this.setState({ filmFontColor: "white" })}
              > film</span> &
              <span
                style={{ color: this.state.designFontColor }}
                onMouseEnter={() => this.setState({ designFontColor: GREEN })}
                > design</span> <br />
      </p>
      </div>
      <div className="smallColumn">

      </div>
      <div className="icons">
        <a href="http://www.facebook.com"><img src={facebook} className="icon"/></a>
        <a href="http://www.soundcloud.com"><img src={soundcloud} className="icon" /></a>
        <a href="http://www.instagram.com"><img src={instagram} className="icon" /></a>
        <a href="http://www.gmail.com"><img src={email} className="icon" /></a>
      </div>
      </div>
    )
  }
}

export default AboutMe;
