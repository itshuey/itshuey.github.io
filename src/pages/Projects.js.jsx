import React from "react";
import '../App.css';
import './Projects.css';
import './Glitch.css'
import { RED, YELLOW, BROWN, GREEN } from '../constants.js';

class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      extend: false
    };
  }

  render() {
    return(
      <div>
        <div className={"content"}>
          <div className={"header glitch"}>
            <b><u>VER II</u></b>
          </div>
          <div className={"overlay red glitch"}>
            projects
          </div>
          <div className={"floating glitch"}>
            <br /><br /><b><i>A SELECTED SERIES
            <br />A SELECTED SERIES
            <br />A SELECTED SERIES</i></b>
          </div>
          <div className={"placeholder"} />
          <button className="reveal red glitch">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SOON!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
