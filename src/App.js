import React from 'react';
import logo from './logo.svg';
import CircleAnimation from './CircleAnimation.js.jsx'
import { YELLOW } from './constants.js'
import HomePage from './HomePage.js.jsx'
import Example from './Example.js.jsx'
import Typist from 'react-typist';
import sixteenHours from './media/16hours.mp4'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: YELLOW,
      finishedAnimation: true
    };
  }

  loadingFunctions() {
    setTimeout(() => this.setState({ backgroundColor: "black" }), 2000);
    setTimeout(() => this.setState({ finishedAnimation: true }), 2800);
  }

  renderBody() {
    return (
    <div>
    <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
      <div className="blacklayer" />
      <div className="App-intro">
        about me
        <p className="desc">
          senior at pomona college <br />
          studying math and cs <br />
          into film & design
        </p>
      </div>
    </div>
      <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
        <video controls="controls" src={sixteenHours} />
      </div>
    </div>
    );
  }

  render(){
    let content = this.state.finishedAnimation ? this.renderBody() : null;
    return (
      <div className="App">
        <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
        <Typist
          cursor={{ show: false }}
          className={"maintext"}
          avgTypingDelay={280}
          stdTypingDelay={0}
          startDelay={50}
          onTypingDone={this.loadingFunctions()}>
          <h1>huey.</h1>
        </Typist>
          <HomePage />
        </div>
        {content}
      </div>
    );
  }
}

export default App;
