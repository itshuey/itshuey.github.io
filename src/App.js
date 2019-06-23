import React from 'react';
import logo from './logo.svg';
import CircleAnimation from './CircleAnimation.js.jsx';
import { YELLOW, RED, GREEN } from './constants.js';
import HomePage from './HomePage.js.jsx';
import Example from './Example.js.jsx';
import Typist from 'react-typist';
import sixteenHours from './media/16hours.mp4';

import AboutMe from './AboutMe.js.jsx';
import './App.css';

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

  handleChange() {
    this.setState({
      fontColor: YELLOW,
    });
  }

// onMouseEnter={() => this.setState({ fontColor: YELLOW })}
// onMouseLeave={() => this.setState({ fontColor: "white" })}
// style={{ color: this.state.fontColor }}

  renderBody() {
    return (
    <div>
      <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
          <AboutMe />
      </div>
      <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
        <video controls="controls" src={sixteenHours} />
      </div>
      <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
        <div className="App-intro">
          art&design
          <p className="desc">
            selected projects
          </p>
        </div>
      </div>
    </div>
    );
  }

  render(){
    return (
      <div className="App">
        <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
        <Typist
          cursor={{ show: false }}
          className={"maintext"}
          avgTypingDelay={250}
          stdTypingDelay={0}
          startDelay={1000}
          onTypingDone={() => this.loadingFunctions()}>
          <h1>huey.</h1>
        </Typist>
          <HomePage />
        </div>
        {this.state.finishedAnimation && this.renderBody()}
      </div>
    );
  }
}

export default App;
