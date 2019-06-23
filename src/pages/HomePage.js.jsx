import React from "react";
import CircleAnimation from './CircleAnimation.js.jsx'
import Typist from 'react-typist';

class HomePage extends React.Component{
  render() {
    return (
    <div>
      <Typist
        cursor={{ show: false }}
        className={"maintext"}
        avgTypingDelay={250}
        stdTypingDelay={0}
        startDelay={1000}
        onTypingDone={this.props.onTypingDone}>
        <h1>huey.</h1>
      </Typist>
      <CircleAnimation />
    </div>
    )
  }
}

export default HomePage;
