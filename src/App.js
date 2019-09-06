import React from 'react';
import './App.css';
import { YELLOW, RED, GREEN } from './constants.js';
import HomePage from './pages/HomePage.js.jsx';
import AboutMe from './pages/AboutMe.js.jsx';
import ArtDesign from './pages/ArtDesign.js.jsx';
import Projects from './pages/Projects.js.jsx'
import AdditionalInfo from './pages/AdditionalInfo.js.jsx';
import MobilePage from './pages/MobilePage.js.jsx';
import { Carousel } from 'huey-website-carousel'
import 'huey-website-carousel/lib/styles/carousel.min.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: YELLOW,
      finishedAnimation: true,
      fontColor: "white",
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  loadingFunctions() {
    setTimeout(() => this.setState({ backgroundColor: "black" }), 800);
    setTimeout(() => this.setState({ finishedAnimation: true }), 1100);
  }

  render(){
    const { width, height } = this.state;
    const isMobile = width <= 500;
    const isShort = height <= 0;
    if (isMobile) return <MobilePage/>;
    if (isShort) return <MobilePage/>;

    let saved = (
      <div className="content" style={{ backgroundColor: this.state.backgroundColor}}>
        <HomePage onTypingDone={() => this.loadingFunctions()} />
      </div>);

    const settings = {
      showStatus: false,
      showThumbs: false,
      dynamicHeight: true,
    };

    return (
      <div className="App">
      <Carousel {...settings}>
        <div name="slide"> <HomePage/> </div>
        <div name="slide"> <AboutMe/> </div>
        <div name="resizable slide"> <ArtDesign/> </div>
        <div name="slide"> <Projects/> </div>
      </Carousel>
    </div>
    );
  }
}

export default App;
