import React from "react";
import '../App.css';
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
      <div className="content">
        <h1> P2 </h1>
      </div>
    )

    return(
      <div>
        <div className="content">
          <h1> P1 </h1>
          <button onClick={() => this.setState({ extend: !this.state.extend })}> Extend! </button>
        </div>
        {this.state.extend && extension}
      </div>
    );
  }
}

export default Projects;
