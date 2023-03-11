import React from "react";
import { NavLink } from "react-router-dom";

class TopBar extends React.Component {
  render() {
    return (
      <div className="top-bar-container">
        <div className="top-bar">
          <p>Mallrave</p>
          <span className="material-symbols-outlined">
            hub
          </span>
        </div>
      </div>
    );
  }
}

export default TopBar;
