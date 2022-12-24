import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/todos" activeClassName="active">
          Todos
        </NavLink>
        <NavLink to="/myCPN" activeClassName="active">
          MyComponent
        </NavLink>
        <NavLink to="/users" activeClassName="active">
          users
        </NavLink>
      </div>
    );
  }
}

export default Nav;
