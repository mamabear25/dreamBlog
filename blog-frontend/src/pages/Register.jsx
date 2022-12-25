import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div className="authe">
        <h1>Signup</h1>
        <form className="form">
          <input required type="text" placeholder="firstName" />
          <input required type="text" placeholder="lastName" />
          <input required type="text" placeholder="username" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Signup</button>
          <p>This is an error!</p>
          <span>Do you have an account? 
            <br></br>
            <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    );
  }
  
  export default Register;