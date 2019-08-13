import React from "react";
import '../App.css';
import './Projects.css';
import shimmer from '../media/shimmer.jpg';


class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      currentProject: "",
      netflix_tab: "desc",
      gradebook_tab: "desc",
      tweetme_tab: "desc",
      website_tab: "desc",
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

  renderProjectTags(current, source) {
    return (
      <div className="tags">
        <a className="tag">description</a>
        <a className="tag">demo</a>
        <a className="tag">technical</a>
        <a className="tag">source</a>
      </div>
    );
  }

  renderProject(render, tags) {
    let title = this.state.currentProject;
    let description, demo, technical;
    let contentState, content;

    if (title == "Netflix+"){
      contentState = this.state.netfix_tab;
      description = "A chrome extension that modifies netflix's website to include \
                    indicators for expiring content that show as you browse!";

    } else if (title == "gradeBook") {
      contentState = this.state.gradebook_tab;

      description = "A java application that stores input assignments to calculate your grades! \
                    Features local XML storage or cloud storage via a AWS MySQL database.";

    } else if (title == "tweet-me") {
      contentState = this.state.tweetme_tab;
      description = "Tweet-me takes in an input twitter handle or local .txt file and \
                    uses a markov-chain algorithm to generate a tweet in that style!";

    } else if (title == "hueysun.com") {
      contentState = this.state.website_tab;
      description = "Hope you've been enjoying my website! It's built in react.js, \
                    and is version two of my yearly effort to rebuild my site with \
                    the things I leared in the previous year.";

    };

    if (contentState = "desc") {
      content = description;
    } else if (contentState = "demo") {
      content = demo;
    } else if (contentState = "technical") {
      content = technical;
    }

    return (
      <div className="content">
        <div className="project-content">
          <div className="project-title">
            {title}
          </div>
          <div className="project-body">
            {content}
          </div>
          <div className="project-tags">
            {this.renderProjectTags()}
          </div>
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
