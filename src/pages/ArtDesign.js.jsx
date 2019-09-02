import React from "react";
import MeshAnimation from '../Mesh/MeshAnimation.js';
import './ArtDesign.css'
import '../App.css'
import { Zoom, Fade, LightSpeed } from 'react-reveal';
import sixteenHours from '../art/16hours.mp4';
import audrey from '../art/audrey.jpg';

class ArtDesign extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      ready: false,
    };
  }

  componentDidMount() {
    function importAll(r) {
      return r.keys().map(r);
    };

    this.setState({
      posters: importAll(require.context('../art/posters', false, /\.(png|jpe?g|svg)$/)),
    });
  }

  triggerReveal(){
    setTimeout(() => this.setState({ ready: true }), 500);
  }

  renderItems() {
    function renderItems(group, scale) {
      return group.map((image) => <img src={image} width={scale} height={scale}/>
      );
    }

    let header = (
      <Fade bottom delay={650}>
        <img src={audrey} width={"100%"} />
      </Fade>
    );

    let posters = (
      <Fade bottom cascade delay={200}>
        <div className="posters">
          {renderItems(this.state.posters, "18%")}
        </div>
      </Fade>
    );

    let hr16 = (
      <div className="videos" width="90%">
        <video muted loop autoplay oncanplay="this.muted=true">
          <source src={sixteenHours} type="video/mp4" />
        </video>
      </div>
    );

    let videoContent = (
      <Fade bottom cascade delay={200}>
        <div className="her-vimeo">
          <iframe
            src="https://player.vimeo.com/video/284876435"
            height="600px" frameborder="0" allow="autoplay"
            allowfullscreen={false}
          />
        </div>
      </Fade>
    );

    return (
        <div className="main">
          <div className="artBody">
            {header}
            {posters}
            {videoContent}
          </div>
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
      <div className={this.state.showTitle ? "content" : "content art-portfolio"}>
        {!this.state.showTitle && animatedTitle}
        <LightSpeed top when={this.state.showTitle} unmountOnExit={true}>
          <div className="meshLayer">
            <MeshAnimation />
          </div>
        </LightSpeed>
        {!this.state.showTitle && this.triggerReveal()}
        {this.state.ready && !this.state.showTitle && this.renderItems()}
        <div className="overlay yellow">
          {this.state.showTitle && "art&design"}
          <Fade bottom when={this.state.showTitle} unmountOnExit={true}>
          <p className="overlayDesc">
            simplex and noise algorithms by stefan gustavon & optimized at stanford <br />
            adapted for javascript by joseph gentle, and implemented via react by huey sun (2019)<br />
            welcome to a wavy future of <b>math</b> driven art.
          </p>
          </Fade>
        </div>
        <button className="reveal yellow" onClick={() => this.setState({ showTitle: !this.state.showTitle, ready: false })}>
          {this.state.showTitle ? <b>&nbsp;&nbsp;Gallery&nbsp;&nbsp;</b> : <b>&nbsp;&nbsp;Back&nbsp;&nbsp;</b>}
        </button>
      </div>
      {!this.state.showTitle && comingSoon}
    </div>
    )
  }
}

export default ArtDesign;
