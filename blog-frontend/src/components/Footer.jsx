import React from "react";
import Flogo from "../img/bl.png";

const Footer = () => {
  const posy = "darey"
  const user = posy;
    return (
      <footer className="w-screen bg-gray-800 text-white py-4">
          <img className="h-16" src={Flogo} alt="" />
          <p className="text-center font-medium">Made by techMomma for silverOkonkwo 2022</p>
      </footer>
  
    );
  }
  
  export default Footer;