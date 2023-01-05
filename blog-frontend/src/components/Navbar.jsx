import React from "react";
import Logo from "../img/bl.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/cathome?cat=cars"><h6>CARS</h6></Link>
          <Link className="link" to="/cathome?cat=food"><h6>FOOD</h6></Link>
          <Link className="link" to="/cathome?cat=tech"><h6>TECH</h6></Link>
          <Link className="link" to="/cathome?cat=travel"><h6>TRAVEL</h6></Link>
          <Link className="link" to="/cathome?cat=finance"><h6>FINANCE</h6></Link>
          <Link className="link" to="/cathome?cat=politics"><h6>POLITICS</h6></Link>
          <Link className="link" to="/cathome?cat=lifestyle"><h6>LIFESTYLE</h6></Link>
          <Link className="link" to="/cathome?cat=health"><h6>HEALTH/FITNESS</h6></Link>
          <Link to={"/profile"}>
          <span>{currentUser?.username}</span>
          </Link>
          { currentUser ? (
          <>
          <span onClick={logout}>Logout</span><span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
          </>
          ) : (
          <Link className="link" to="/login">
            Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
  
export default Navbar;