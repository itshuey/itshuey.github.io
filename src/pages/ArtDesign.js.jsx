import React from "react";
import MeshAnimation from '../Mesh/MeshAnimation.js';
import './ArtDesign.css'
import '../App.css'
import { Zoom, Fade, LightSpeed } from 'react-reveal';
import sixteenHours from '../media/16hours.mp4';

class ArtDesign extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
    };
  }


  renderItems() {
    return null;
    // return (
    //     <div className="main">
    //     <Fade bottom duration={4000}>
    //       <video>
    //         <source src={sixteenHours} type="video/mp4" />
    //       </video>
    //     </Fade>
    //     </div>
    // )
  }


  render() {
    let comingSoon = (
      <div className="content" >
        <h1> Coming Soon... &lt;3 </h1>
      </div>
    )

    let animatedTitle = (
      <div className={"title"}>
        <span className={"art"}>art</span>
        <span className={"design"}>&design</span>
      </div>
    )

    return (
    <div>
    <div className="content">
      {!this.state.showTitle && animatedTitle}
      <LightSpeed top when={this.state.showTitle}>
        <div className="meshLayer">
          <MeshAnimation />
        </div>
      </LightSpeed>
      <div className="overlay">
        {this.state.showTitle && "art&design"}
        <Fade bottom when={this.state.showTitle}>
        <p className="overlayDesc">
          simplex and noise algorithms by stefan gustavon & optimized at stanford <br />
          adapted for javascript by joseph gentle, and implemented via react by huey sun (2019)<br />
          welcome to a wavy future of <b>math</b> driven art.
        </p>
        </Fade>
        {!this.state.showTitle && this.renderItems()}
      </div>
      <button className="reveal" onClick={() => this.setState({ showTitle: !this.state.showTitle })}>
        {this.state.showTitle ? <b>&nbsp;Gallery&nbsp;</b> : <b>&nbsp;Back&nbsp;</b>}
      </button>
    </div>
    {!this.state.showTitle && comingSoon}
    </div>
    )
  }
}

export default ArtDesign;
