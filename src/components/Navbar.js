import React from "react";
import "../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>My Library Catalogue</h1>
      </div>
      <div>
        <Link to="/favorites">
          <h3>My Favorite Books</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
