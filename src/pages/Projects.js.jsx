import React from "react";
import '../App.css';
import './Projects.css';
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
          <div className={"header"}>
            <b><u>VER II</u></b>
          </div>
          <div className={"overlay2 neon"}>
            projects
          </div>
          <div className={"floating"}>
            <br /><br /><b><i>A SELECTED SERIES
            <br />A SELECTED SERIES
            <br />A SELECTED SERIES</i></b>
          </div>
          <div className={"placeholder"} />
          <button className="reveal2">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SOON!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
