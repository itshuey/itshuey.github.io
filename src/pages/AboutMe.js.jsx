import React from "react";
import '../App.css';
import './AboutMe.css'
import { RED, YELLOW, BROWN, GREEN } from '../constants.js';
import { AnimatedText } from "../AnimatedText";
import Zoom from 'react-reveal/Zoom';
import selfie from '../media/polaroid.jpg';
import family from '../media/family.jpg';
import soundcloud from '../media/soundcloud.png';
import facebook from '../media/facebook.png';
import instagram from '../media/instagram.png';
import email from '../media/email.png';


class AboutMe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pomFontColor: "white",
      mathFontColor: "white",
      csFontColor: "white",
      filmFontColor: "white",
      designFontColor: "white",
      renderPictures: false,
      renderTitle: true,
      renderTransition: false,
      hideMain: false,
      showMore: false,
    };

    this.handleTransition = this.handleTransition.bind(this);
  }

  iconsUnlocked() {
    return (this.state.pomFontColor == GREEN && this.state.mathFontColor == GREEN &&
            this.state.csFontColor == GREEN && this.state.designFontColor == GREEN &&
            this.state.renderPictures);
  }

  renderTitle() {
    let title = (
      <React.Fragment>
        <div className={"overlay green"}>
          about me!
        </div>
        <div className={"overlay green glitch1"}>
          about me!
        </div>
        <div className={"overlay green glitch2"}>
          about me!
        </div>
        <button className={"reveal green"} onClick={this.handleTransition}>
          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let's go&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
        </button>
      </React.Fragment>
    );

    let transition = (
      <div className={"aboutMeTransition"}>
        <div className={"slideIn right"}>
          我
        </div>
        <div className={"slideIn left"}>
          wó (me)
          <div style={{ fontSize: "36px" }}>
          an interactive page<br/>
          </div>
        </div>
      </div>
    )

    return (
      <Zoom><div>
        <div className={this.state.renderTransition ? "content fadeToGreen" : "content"}>
          {this.state.hideMain ? transition : title }
        </div>
      </div></Zoom>
    )
  }

  handleTransition() {
    this.setState({ renderTransition: true });
    setTimeout(() => {
      this.setState({ hideMain: true })
    }, 200);
    setTimeout(() => {
      this.setState({ renderTitle: false, renderTransition: false })
    }, 2900);
  }

  render() {
    let iconBar = (
      <div>
        <div className={"icons"}>
          <Zoom top delay={100} appear={true} when={this.iconsUnlocked()}>
            <a href={this.iconsUnlocked() && "https://www.facebook.com/hueey1"}>
              <img src={facebook} className={"icon hover animation"} />
            </a>
          </Zoom>
          <Zoom top delay={300} appear={true} when={this.iconsUnlocked()}>
            <a href={this.iconsUnlocked() && "https://soundcloud.com/hueywastaken/"}>
              <img src={soundcloud} className={"icon hover animation"} />
            </a>
          </Zoom>
          <Zoom top delay={500} appear={true} when={this.iconsUnlocked()}>
            <a href={this.iconsUnlocked() && "https://www.instagram.com/hueywastaken/"}>
              <img src={instagram} className={"icon hover animation"} />
            </a>
          </Zoom>
          <Zoom top delay={700} appear={true} when={this.iconsUnlocked()}>
            <a href={this.iconsUnlocked() && "mailto:hssa2016@pomona.edu"}>
              <img src={email} className={"icon hover animation"} />
            </a>
          </Zoom>
        </div>
      </div>
    );

    let mainPage = (
      <div className="content">
        <div className={"photo2"}>
          <Zoom right appear={true} when={this.state.renderPictures}>
            <img src={family} className={"family"}/>
          </Zoom>
        </div>
        <div className={"photo"}>
          <Zoom left delay={1000} appear={true} when={this.state.renderPictures}>
            <img src={selfie} className={"selfie"}/>
          </Zoom>
        </div>
        <Zoom>
        <AnimatedText textColor={"white"} overlayColor={GREEN}>
          &nbsp;&nbsp;about&nbsp;
          <span onMouseEnter={() => this.setState({ renderPictures: true })}>
              <u>me</u>
          </span>
          &nbsp;&nbsp;
        </AnimatedText>
        <p className={"desc"}>
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
        </Zoom>
        {iconBar}
        <a className={"about-more link"} onClick={() => this.setState({ showMore: true })}>
          {this.state.showMore ? "in development!" : "more!"}
        </a>
        <a className={"about-back link"} onClick={() => this.setState({ renderTitle: true, hideMain: false })}>
          back~
        </a>
      </div>
      )

    return this.state.renderTitle ? this.renderTitle() : mainPage;
  }
}

export default AboutMe;
