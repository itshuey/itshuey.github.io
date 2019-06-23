import React from "react";
import { RED, YELLOW, BROWN, GREEN } from '../constants.js';

class CircleAnimation extends React.Component{
  render() {
    return(
      <svg className="initialAnimation">
        <circle className="dotAnimation browndot" cx="350" cy="55%" fill={GREEN} />
        <circle className="dotAnimation greendot" cx="300" cy="55%" fill={BROWN} />
        <circle className="dotAnimation reddot" cx="200" cy="55%" fill={RED} />
        <circle className="dotAnimation yellowdot" cx="250" cy="55%" fill={YELLOW} />
      </svg>
    )
  }
}

export default CircleAnimation;
