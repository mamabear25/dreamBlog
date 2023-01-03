import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({...prev,[e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await axios.post("/auth/register", inputs)
      navigate("/login")
    } catch (err) {
      setError(err.response.data);
    }
  }

  return (
    <div className="authe">
      <h1>Signup</h1>
      <form className="form">
        <input required type="text" placeholder="firstName" name="firstName" onChange={handleChange}/>
        <input required type="text" placeholder="lastName" name="lastName" onChange={handleChange}/>
        <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
        <input required type="email" placeholder="email" name="email" onChange={handleChange}/>
        <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Signup</button>
        { err && <p>{err}</p>}
        <span>Do you have an account? 
          <br></br>
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
  
export default Register;