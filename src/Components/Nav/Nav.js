import React from "react";

import "./Nav.css";

import { Link } from "react-router-dom";

const Nav = () => (
  <div className="Nav">
    <Link to="/">
      <h3>Bryan's Shelters</h3>
    </Link>
  </div>
);

export default Nav;
