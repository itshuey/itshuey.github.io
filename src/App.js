import React from 'react';
import './App.css';
import { YELLOW, RED, GREEN } from './constants.js';
import { Carousel } from 'react-responsive-carousel';
import HomePage from './pages/HomePage.js.jsx';
import AboutMe from './pages/AboutMe.js.jsx';
import ArtDesign from './pages/ArtDesign.js.jsx';
import MeshAnimation from './Mesh/MeshAnimation.js';
import AdditionalInfo from './pages/AdditionalInfo.js.jsx';
import sixteenHours from './media/16hours.mp4';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
    };
    return (
      <div className="App">
      <Carousel {...settings}>
        <div>
          <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
            <HomePage onTypingDone={() => this.loadingFunctions()}/>
          </div>
        </div>
        <div>
            <AboutMe />
        </div>
        <div>
            <ArtDesign />
        </div>
      </Carousel>
    </div>
    );
  }
}

export default App;
