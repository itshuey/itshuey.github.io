import React from "react";
import '../App.css';
import './Projects.css';
import { RED, YELLOW, BROWN, GREEN } from '../constants.js';


class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      extend: false,
    };
  }

  render() {
    let title = (
      <div className={"content"}>
        <div className={"header"}>
          <b><u>VER II</u></b>
        </div>
        <div className={"overlay red neon"}>
          projects
        </div>
        <div className={"floating"}>
          <br /><br /><b><i>A SELECTED SERIES
          <br />A SELECTED SERIES
          <br />A SELECTED SERIES</i></b>
        </div>
        <div className={"placeholder"} />
        <button className={"reveal red"} onClick={() => this.setState({ showTitle: false })}>
          <b>!!!</b>
        </button>
      </div>
    );

    return this.state.showTitle ? title : this.renderContents();
  }

  renderProjectTitle(title, tags) {
    return (
      <div className="projectTitle">
        <div className="projectHeader"> {title} </div>
        <div className="projectTags"> {tags} </div>
        <button className="projectDemo">
            DEMO / INFO
        </button>
      </div>
    );
  }

  renderContents() {
    return (
      <div className={"content"}>
        <div className={"projectsGrid"}>
          {this.renderProjectTitle("gradeBook", "Java, MySQL, AWS, NetBeans, Swing")}
          {this.renderProjectTitle("Netflix+", "Javascript, Browserify, Node.js")}
          {this.renderProjectTitle("tweet-me", "Python, Beautiful Soup, etc.")}
          {this.renderProjectTitle("hueysun.com", "Javascript, React.js, HTML, CSS")}
        </div>
        <div className={"projectsButton back"} onClick={() => this.setState({ showTitle: true })}>
          <b>BACK</b>
        </div>
        <div className={"projectsButton more"} onClick={() => this.setState({ showTitle: true })}>
          <b>MORE</b>
        </div>
      </div>
    );
  }

}

export default Projects;
