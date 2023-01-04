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
          <Link className="link" to="/?cat=cars"><h6>CARS</h6></Link>
          <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
          <Link className="link" to="/?cat=tech"><h6>TECH</h6></Link>
          <Link className="link" to="/?cat=travel"><h6>TRAVEL</h6></Link>
          <Link className="link" to="/?cat=finance"><h6>FINANCE</h6></Link>
          <Link className="link" to="/?cat=politics"><h6>POLITICS</h6></Link>
          <Link className="link" to="/?cat=lifestyle"><h6>LIFESTYLE</h6></Link>
          <Link className="link" to="/?cat=health"><h6>HEALTH/FITNESS</h6></Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <span>{currentUser?.username}</span>
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