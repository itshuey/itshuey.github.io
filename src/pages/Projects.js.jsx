import React from "react";
import '../App.css';
import './Projects.css';
import shimmer from '../media/shimmer.jpg';
import { Zoom, Fade, LightSpeed } from 'react-reveal';


class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      background: "defaultBG",
      showTitle: true,
      currentProject: "",
      netflix_tab: "home",
      gradebook_tab: "home",
      tweetme_tab: "home",
      website_tab: "home",
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
          <b><i><br/>
          <br/>A SELECTED SERIES
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

  renderProjectTitle(title, tags, background) {
    return (
      <div className="projectTitle">
        <div className="projectHeader"> {title} </div>
        <div className="projectTags"> {tags} </div>
        <button className="projectDemo"
          onClick={() => this.setState({ currentProject: title, background: "defaultBG" })}
          onMouseEnter={() => this.setState({ background: background })}
          onMouseLeave={() => this.setState({ background: "defaultBG" })}
          >
            DEMO / INFO
        </button>
      </div>
    );
  }

  renderProjectTags(current, state) {
    let source, updateTab;
    let isHome = state == "home";
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

    let Type = isHome ? "span" : "div";
    let style = isHome ? "row" : "col";
    let tagName = "tags tags-" + style + " tags-" + state;

    function getTagClass(current) {
      let name = "tag " + current + "-tag";
      if (current == state) name += " current";
      return name;
    }

    return (
      <div className={tagName}>
        {!isHome && <Type className="home-tag tag" onClick={() => updateTab("home")}>home</Type>}
        <Type className={getTagClass("desc")}  onClick={() => updateTab("desc")}>desc</Type>
        <Type className={getTagClass("demo")} onClick={() => updateTab("demo")}>demo</Type>
        <Type className={getTagClass("technical")} onClick={() => updateTab("technical")}>
          {state == "home" ? "technical" : "tech"}
        </Type>
        <a target="_blank" href={source} className="tag source">source</a>
      </div>
    );
  }

  renderProject(render, tags) {
    let title = this.state.currentProject;
    let description, demo, technical;
    let contentState, content;
    let shouldShowTitle;

    demo = (<div className="this-is-it">
              <div>DEMO</div>
              <div style={{ "margin-top": "-80px"}}> SOON </div>
            </div>
          );
          
    technical = (<div className="technical"> ~ DETAILS SOON ~ </div>);

    if (title == "Netflix+"){
      contentState = this.state.netflix_tab;
      description = (<div className="description">
                      I watch a lot of Netflix. My bucketlist is full of movies and TV that I’m determined to get around to:
                      Taxi Driver, Arrested Development, Pretty Little Liars, you get the picture.
                      <br/><br/>
                      Unfortunately, Netflix often has to remove content due to licensing restrictions,
                      which is usually unannounced. To make sure I never miss out, I made a chrome extension
                      that adds an indicator to titles that are expiring!
                    </div>);

      demo = (<iframe className="embedded-demo" width="600" height="70%"
                src="https://www.youtube.com/embed/JLpCABzAXuU" frameborder="1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>);

      technical = (<div className="technical">
                    When you open Netflix, the extension constructs a whatsonnetflix.com URL
                    for the current and next month, and sends a fetch request to grab the source html. A cheerio-based
                    parse function (packaged by browserify and added to the window) extracts the tabular data into a map
                    of title to expiration date.
                    <br/><br/>

                    The extension then adds mutation observers to the content panels in Netflix's browsing page,
                    grabs the title from the image metadata, and checks it against the map of expiration dates it has stored.
                    If it is one of the expiring movies, it creates a span with an icon and date and injects it into the source html!
                  </div>);

    } else if (title == "gradeBook") {
      contentState = this.state.gradebook_tab;
      description = (<div className="description">
                      <div style={{ "text-align": "left" }}> A java application that </div>
                      <div style={{ "text-align": "center" }}><i> stores input assignments </i></div>
                      <div style={{ "text-align": "right" }}> to calculate your grades! </div>
                    </div>);

    } else if (title == "tweet-me") {
      contentState = this.state.tweetme_tab;
      description = (<div className="description">
                      <div style={{ "text-align": "left" }}> A python application </div>
                      <div style={{ "text-align": "center" }}> that uses a <i> markov-chain algorithm</i></div>
                      <div style={{ "text-align": "right" }}> to generate mock tweets! </div>
                    </div>)

      technical = (<div className="technical">
                    Tweet-me uses tweepy to scrape a twitter handle, parsing the response into plain text,
                    and feeds it into a markov-chain algorithm which stores the key, value pair of old word, new word.
                    To generate a tweet, it picks a random starting word, and randomly selects from the keys.
                  </div>);

    } else if (title == "hueysun.com") {
      contentState = this.state.website_tab;
      description = (<div className="description">
                      <div style={{ "text-align": "left" }}> Hope you've been enjoying my site! </div>
                      <div style={{ "text-align": "left" }}> It's built in react.js, and is version two </div>
                      <div style={{ "text-align": "center" }}> of my <i> yearly wesbite rebuild </i></div>
                      <div style={{ "text-align": "right" }}> with the cool new stuff I picked up! </div>
                    </div>);

      demo = (<div className="this-is-it"> THIS ~<br/>IS <br/>IT! </div>);

      technical = (<div className="technical">
                    This website is built in React.js. The slides are based on react-slick, with a
                    few modifications to scolling behavior and display. The homepage animation was done in raw javascript,
                    and the net animation was done in three.js and bundled into react as a component.
                  </div>);
    };

    if (contentState == "home") {
      content = (
        <div className="project-title">
          <div className="outline-header"> {title} </div>
          <div className="solid-header"> {title} </div>
        </div>
      );
    } else if (contentState == "desc") {
      content = description;
    } else if (contentState == "demo") {
      content = demo;
    } else if (contentState == "technical") {
      content = technical;
    }

    let contentNames = "content " + title;
    let extras = (
        <div className="state">
          {contentState == "technical" ? "tech" : contentState}
        </div>
    );

    return (
      <div className={contentNames}>
        <div className="project-body"> {content} </div>
        {!(contentState == "home" || contentState == "demo") && extras}
        {this.renderProjectTags(this.state.currentProject, contentState)}
        <div className="text-button projects-x"
            onClick={()=>this.setState({ currentProject: "" })}>x</div>
      </div>
    );
  }

  renderContents() {
    let background = this.state.background;
    if (this.state.currentProject != "") {
      return this.renderProject(this.state.currentProject);
    };

    return (
      <div className={"content"}>
        <div className={"background " + background}/>
        <div className={"projectsGrid"}>
          {this.renderProjectTitle("gradeBook", "Java, MySQL, AWS, NetBeans, Swing", "redBG")}
          {this.renderProjectTitle("Netflix+", "Javascript, Browserify, Node.js", "yellowBG")}
          {this.renderProjectTitle("tweet-me", "Python, Beautiful Soup, etc.", "greenBG")}
          {this.renderProjectTitle("hueysun.com", "Javascript, React.js, HTML, CSS", "shimmerBG")}
        </div>
        <div className={"text-button projects-back"}
          onClick={() => this.setState({ showTitle: true, background: "defaultBG" })}>
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
