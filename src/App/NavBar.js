import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="col-3 app__navbar">
      <ul>
        <li>
          <Link to="/" className="app__navbar--link w-100">
            Home
          </Link>
        </li>
        <li>
          <Link to="/todos" className="app__navbar--link w-100">
            Todos List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
