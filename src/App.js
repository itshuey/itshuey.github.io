import React from 'react';
import './App.css';
import { YELLOW, RED, GREEN } from './constants.js';
import HomePage from './pages/HomePage.js.jsx';
import AboutMe from './pages/AboutMe.js.jsx';
import MeshAnimation from './Mesh/MeshAnimation.js';
import AdditionalInfo from './pages/AdditionalInfo.js.jsx';
import sixteenHours from './media/16hours.mp4';

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

  renderBody() {
    return (
    <div>
      <div className="content" style={{ backgroundColor: "black"}}>
          <AboutMe />
      </div>
      <div className="content" style={{ backgroundColor: "black"}}>
        <div className="blacklayer">
          <MeshAnimation />
        </div>
        <div className="overlay">
          <span className="underline">art</span>&design
          <p className="overlayDesc">
            simplex and noise algorithms by stefan gustavon & optimized at stanford <br />
            adapted for javascript by joseph gentle, and implemented via react by huey sun (2019)<br />
            welcome to a wavy future of <b>math</b> driven art.
          </p>
        </div>
      </div>
      <div className="content" style={{ backgroundColor: "black"}}>
        <div className="App-intro">
          art&design
          <p className="desc">
            selected projects
          </p>
        </div>
      </div>
      <div className="content" style={{ backgroundColor: "black"}}>
        <video controls="controls" src={sixteenHours} />
      </div>
    </div>
    );
  }

  render(){
    return (
      <div className="App">
        <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
          <HomePage onTypingDone={() => this.loadingFunctions()}/>
        </div>
        {this.state.finishedAnimation && this.renderBody()}
      </div>
    );
  }
}

export default App;
