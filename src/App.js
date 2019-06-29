import React from 'react';
import './App.css';
import { YELLOW, RED, GREEN } from './constants.js';
import HomePage from './pages/HomePage.js.jsx';
import AboutMe from './pages/AboutMe.js.jsx';
import ArtDesign from './pages/ArtDesign.js.jsx';
import Projects from './pages/Projects.js.jsx'
import AdditionalInfo from './pages/AdditionalInfo.js.jsx';
import sixteenHours from './media/16hours.mp4';
import { Carousel } from 'huey-website-carousel'
import 'huey-website-carousel/lib/styles/carousel.min.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: YELLOW,
      finishedAnimation: true,
      fontColor: "white",
    };
  }

  loadingFunctions() {
    setTimeout(() => this.setState({ backgroundColor: "black" }), 800);
    setTimeout(() => this.setState({ finishedAnimation: true }), 1100);
  }

  render(){
    const settings = {
      showStatus: false,
      showThumbs: false,
      dynamicHeight: true,
    };
    return (
      <div className="App">
      <Carousel {...settings}>
        <div name="slide">
          <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
            <HomePage onTypingDone={() => this.loadingFunctions()}/>
          </div>
        </div>
        <div name="slide">
          <AboutMe />
        </div>
        <div name="slide">
          <ArtDesign />
        </div>
        <div name="resizable slide">
          <Projects />
        </div>
      </Carousel>
    </div>
    );
  }
}

export default App;
