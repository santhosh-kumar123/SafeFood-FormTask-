import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  let [state, setState] = useState(false);
  let handleClick = () => {
    setState(true);
  };
  return (
    <section className="navbarsection">
      <div className="navbardiv">
        <ul>
          <li>
            {state && (
              <Link to="/sidenavbar" style={{ marginLeft: "0px" }}></Link>
            )}
          </li>
          <li>
            <Link color="primary" to="/" onClick={handleClick}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
