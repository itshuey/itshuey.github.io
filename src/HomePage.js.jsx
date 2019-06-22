import React from "react";
import logo from './logo.svg';
import { RED, YELLOW, BROWN, GREEN } from './constants.js';
import CircleAnimation from './CircleAnimation.js.jsx'
import Typist from 'react-typist';

class HomePage extends React.Component{

  render() {
    return (
      <div>
      <CircleAnimation />
    </div>
    )
  }
}

export default CircleAnimation;
