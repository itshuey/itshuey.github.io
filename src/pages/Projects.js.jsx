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
    let extension = (
      <div className={"content"}>
        <div className={"title"}> Projects </div>
      </div>
    )

    return(
      <div>
        <div className={"content"}>
          <div className={"placeholder"} />
          <br /><br />projects page in work...
        </div>
      </div>
    );
  }
}

export default Projects;
