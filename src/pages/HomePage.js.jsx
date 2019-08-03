import React from "react";
import CircleAnimation from '../Quan/CircleAnimation.js.jsx';
import RawCircleAnimation from '../Quan/RawCircleAnimation.js'
import Typist from 'react-typist';

class HomePage extends React.Component{

  render() {
    let oldTypist = (
      <Typist
        cursor={{ show: false }}
        className={"maintext"}
        avgTypingDelay={250}
        stdTypingDelay={0}
        startDelay={1000}
        onTypingDone={this.props.onTypingDone}>
        <h1>huey.</h1>
      </Typist>
    );

    return (
      <div className="meshLayer">
          <RawCircleAnimation />
      </div>
    );
  }
}

export default HomePage;
