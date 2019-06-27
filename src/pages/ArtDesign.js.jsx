import React from "react";
import MeshAnimation from '../Mesh/MeshAnimation.js';
import './ArtDesign.css'
import '../App.css'

class ArtDesign extends React.Component{
  render() {
    return (
    <div className="content">
      <div className="meshLayer">
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
    )
  }
}

export default ArtDesign;
