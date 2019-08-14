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

  renderProjectTags(current) {
    let source, updateTab;
    switch (current) {
      case "Netflix+":
        source="https://github.com/itshuey/netflix-features";
        updateTab = (tab) => this.setState({ netflix_tab: tab });
        break;
      case "gradeBook":
        source="https://github.com/itshuey/gradeBook";
        updateTab = (tab) => this.setState({ gradebook_tab: tab });
        break;
      case "tweet-me":
        source="https://github.com/itshuey/twitter-markov-generator";
        updateTab = (tab) => this.setState({ tweetme_tab: tab });
        break;
      case "hueysun.com":
        source="https://github.com/itshuey/itshuey.github.io";
        updateTab = (tab) => this.setState({ website_tab: tab });
        break;
    }
    return (
      <div className="tags">
        <span className="tag" onClick={() => updateTab("desc")}>desc</span>
        <span className="tag" onClick={() => updateTab("demo")}>demo</span>
        <span className="tag" onClick={() => updateTab("technical")}>technical</span>
        <a target="_blank" href={source} className="tag">source</a>
      </div>
    );
  }

  renderProject(render, tags) {
    let title = this.state.currentProject;
    let description, demo, technical;
    let contentState, content;

    demo = (<div className="demo"> ~ DEMO SOON ~ </div>);
    technical = (<div className="technical"> ~ DETAILS SOON ~ </div>);

    if (title == "Netflix+"){
      contentState = this.state.netflix_tab;
      description = (<div className="netflix-description">
                      <div style={{ "text-align": "left" }}> A chrome extension </div>
                      <div style={{ "text-align": "center" }}> that <i> injects expiry indicators </i></div>
                      <div style={{ "text-align": "right" }}> into default browsing view! </div>
                    </div>);

    } else if (title == "gradeBook") {
      contentState = this.state.gradebook_tab;
      description = (<div className="gradebook-description">
                      <div style={{ "text-align": "left" }}> A java application that </div>
                      <div style={{ "text-align": "center" }}><i> stores input assignments </i></div>
                      <div style={{ "text-align": "right" }}> to calculate your grades! </div>
                    </div>);

    } else if (title == "tweet-me") {
      contentState = this.state.tweetme_tab;
      description = (<div className="tweetme-description">
                      <div style={{ "text-align": "left" }}> A python application </div>
                      <div style={{ "text-align": "center" }}> that uses a <i> markov-chain </i></div>
                      <div style={{ "text-align": "right" }}> to generate mock tweets! </div>
                    </div>)

    } else if (title == "hueysun.com") {
      contentState = this.state.website_tab;
      description = (<div className="website-description">
                      <div style={{ "text-align": "left" }}> Hope you've been enjoying my site! </div>
                      <div style={{ "text-align": "left" }}> It's built in react.js, and is version two </div>
                      <div style={{ "text-align": "center" }}> of my <i> yearly wesbite rebuild </i></div>
                      <div style={{ "text-align": "right" }}> with the cool new stuff I picked up! </div>
                    </div>)

    };

    if (contentState == "desc") {
      content = description;
    } else if (contentState == "demo") {
      content = demo;
    } else if (contentState == "technical") {
      content = technical;
    }

    return (
      <div className="content">
        <div className="project-content">
          <div className="project-title">
            <div className="outline-header"> {title} </div>
            <div className="solid-header"> {title} </div>
          </div>
          <div className="project-body">
            {content}
          </div>
          {this.renderProjectTags(this.state.currentProject)}
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
