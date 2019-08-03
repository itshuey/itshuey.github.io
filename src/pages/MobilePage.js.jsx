import React from "react";
import './MobilePage.css';

class MobilePage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mobilePage">
        <div className="mobileTitle">
          it's huey!
        </div>
        <div className="mobileBody">
          ^_^
        </div>
        <div className="mobileText">
          <a href="https://www.youtube.com/watch?v=TF_tcrHGLVA">this</a> is my favorite song right now <br/>
          currently in love with <span className="favoriteColor">this color</span><br/>
          sucker for a good animal fact
          <div className="mobileTagline">
          [ cooler on your laptop! ]
          </div>
        </div>
      </div>

    );
  }

}

export default MobilePage;
