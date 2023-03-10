import React from "react";
import { NavLink } from "react-router-dom";

class TopBar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <NavLink to="/" className="roots">
          Market
        </NavLink>
        <NavLink to="/exchange" className="roots">
          Exchange
        </NavLink>
      </div>
    );
  }
}

export default TopBar;
