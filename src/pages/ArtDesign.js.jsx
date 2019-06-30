import React from "react";
import MeshAnimation from '../Mesh/MeshAnimation.js';
import './ArtDesign.css'
import '../App.css'
import { Zoom, Fade, LightSpeed } from 'react-reveal';
import sixteenHours from '../media/16hours.mp4';
import audrey from '../media/audrey.jpg';

class ArtDesign extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      ready: false,
    };
  }

  triggerReveal(){
    setTimeout(() => this.setState({ ready: true }), 500);
  }

  renderItems() {
    return (
        <div className="main">
        <Fade bottom delay={650}>
          <img src={audrey} width={"93%"} />
        </Fade>
        </div>
    );
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
      <LightSpeed top when={this.state.showTitle} unmountOnExit={true}>
        <div className="meshLayer">
          <MeshAnimation />
        </div>
      </LightSpeed>
      {!this.state.showTitle && this.triggerReveal()}
      {this.state.ready && !this.state.showTitle && this.renderItems()}
      <div className="overlay">
        {this.state.showTitle && "art&design"}
        <Fade bottom when={this.state.showTitle} unmountOnExit={true}>
        <p className="overlayDesc">
          simplex and noise algorithms by stefan gustavon & optimized at stanford <br />
          adapted for javascript by joseph gentle, and implemented via react by huey sun (2019)<br />
          welcome to a wavy future of <b>math</b> driven art.
        </p>
        </Fade>
      </div>
      <button className="reveal" onClick={() => this.setState({ showTitle: !this.state.showTitle, ready: false })}>
        {this.state.showTitle ? <b>&nbsp;Gallery&nbsp;</b> : <b>&nbsp;Back&nbsp;</b>}
      </button>
    </div>
    {!this.state.showTitle && comingSoon}
    </div>
    )
  }
}

export default ArtDesign;
