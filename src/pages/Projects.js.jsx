import React from "react";
import '../App.css';
import './Projects.css';
import shimmer from '../media/shimmer.jpg';


class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      currentProject: ""
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
          <br /><br />
          <b><i>A SELECTED SERIES
          <br/>A SELECTED SERIES
          <br/>A SELECTED SERIES</i></b>
        </div>
        <div className={"placeholder"} />
        <button className={"reveal red"}
          onClick={() => this.setState({ showTitle: false })}>
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
        <button className="projectDemo"
          onClick={() => this.setState({ currentProject: title })}>
            DEMO / INFO
        </button>
      </div>
    );
  }

  renderProject(render, tags) {
    let title = this.state.currentProject;
    let description, demo;

    if (title == "Netflix+"){
      description = "A chrome extension that adds an expiry indicator into browsing view!";

    } else if (title == "gradeBook") {
      description = "A java application that stores input assignments to calculate your grades! \
                    Features local storage via xml or cloud storage via AWS RDS MySql.";

    } else if (title == "tweet-me") {
      description = "Tweet-me takes in an input twitter handle or local .txt file and \
                    uses a markov-chain algorithm to generate a tweet in that style!";

    } else if (title == "hueysun.com") {
      description = "Hope you've been enjoying my website! It's built in react.js, \
                    and is version two of my yearly effort to rebuild my site with \
                    the things I leared in the previous year.";

    };

    return (
      <div className="content">
        <div className="project-title">
          {title}
        </div>
        <div className="project-body">
          <div className="project-description">{description}</div>
          <div className="project-demo">{demo}</div>
        </div>
        <div className="text-button projects-x"
          onClick={()=>this.setState({ currentProject: "" })}>
          x
        </div>

      </div>
    );
  }

  renderContents() {
    let background = this.state.background;
    if (this.state.currentProject != "") {
      return this.renderProject(this.state.currentProject);
    };

    return (
      <div className={"content " + background}>
        <div className={"projectsGrid"}>
          {this.renderProjectTitle("gradeBook", "Java, MySQL, AWS, NetBeans, Swing")}
          {this.renderProjectTitle("Netflix+", "Javascript, Browserify, Node.js")}
          {this.renderProjectTitle("tweet-me", "Python, Beautiful Soup, etc.")}
          {this.renderProjectTitle("hueysun.com", "Javascript, React.js, HTML, CSS")}
        </div>
        <div className={"text-button projects-back"}
          onClick={() => this.setState({ showTitle: true, background: "" })}>
          <b>BACK</b>
        </div>
        <a href={"https://github.com/itshuey"} className={"text-button projects-more"}
          onClick={() => this.setState({ background: "shimmerBG" })}>
          <b>MORE (GITHUB)</b>
        </a>
      </div>
    );
  }
}

export default Projects;
