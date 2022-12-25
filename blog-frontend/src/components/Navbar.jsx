import React from "react";
import Logo from "../img/bl.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="links">
            <Link className="link" to="/?cat=cars"><h6>CARS</h6></Link>
            <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
            <Link className="link" to="/?cat=travel"><h6>TRAVEL</h6></Link>
            <Link className="link" to="/?cat=lifestyle"><h6>LIFESTYLE</h6></Link>
            <Link className="link" to="/?cat=technology"><h6>TECH</h6></Link>
            <Link className="link" to="/?cat=health"><h6>HEALTH/FITNESS</h6></Link>
            <span>Jane</span>
            <span>Logout</span>
            <span className="write">
              <Link className="link" to="/write">Write</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;