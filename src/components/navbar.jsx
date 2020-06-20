import React, { Component } from "react";

//stateless Functional component
const NavBar = ({ totalCounters }) => {
  console.log('NavBar-Rendered')
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-1">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
