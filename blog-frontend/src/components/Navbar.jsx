import React from "react";
import Logo from "../img/Blogologo.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useState } from "react";
import Flogo from "../img/bl.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  }
  
  return (
    <div className="flex w-screen border-b border-gray-200 flex-col fixed top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-3 bg-black opacity-90">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to={"/"}>
          <img className="h-16" src={Flogo} alt="" />
          </Link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={handleNavOpen}>
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div id="nav-links" class={`w-full flex-grow lg:flex block sm:hidden lg:items-center lg:w-auto ${isNavOpen ? 'block' : 'hidden'}`}>
          <div class="text-sm lg:flex-grow">
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" to="/cathome?cat=cars">CARS</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" to="/cathome?cat=food">FOOD</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" to="/cathome?cat=tech">TECH</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" to="/cathome?cat=travel">TRAVEL</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" to="/cathome?cat=finance">FINANCE</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" to="/cathome?cat=politics">POLITICS</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" to="/cathome?cat=lifestyle">LIFESTYLE</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" to="/cathome?cat=health">HEALTH/FITNESS</Link>
          </div>
          <div class="text-sm">
              { currentUser ? (
              <>
              <Link className="block mt-4 lg:inline-block lg:mt-0 text-white py-4 px-2 rounded-full bg-pink-900 hover:bg-white hover:text-pink-900 mr-4" to="/profile">
                {currentUser?.username}
              </Link>
              <span onClick={logout} 
                className="block mt-4 lg:inline-block lg:mt-0 p-2 rounded-full text-white hover:bg-gray-900 hover:text-white mr-4 cursor-pointer">
                Logout
              </span>
              <Link className="block mt-4 lg:inline-block lg:mt-0 rounded-full text-white hover:text-black decoration-black" to="/write">Write</Link>
              </>
              ) : (
                <Link className="block mt-4 lg:inline-block lg:mt-0 text-white py-2 px-2 rounded-full bg-gray-900 hover:text-white" to="/login">
                Login
                </Link>
              )}
          </div>
        </div>     
      </nav>
    </div>

  );
}
  
export default Navbar;