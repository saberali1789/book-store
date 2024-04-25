import { useState } from "react";
import "./forms.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  // Form submit handlers
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "")
      return toast.error(`Email is required, Please enter a valid email`);
    if (username.trim() === "")
      return toast.error(`Username is required, Please enter a valid email`);

    if (password.trim() === "")
      return toast.error(`Password is required, Please enter a valid password`);

    console.log({ email, username, password });
  };
    
    return (
      <div className="form-wrapper">
        <ToastContainer theme="colored" />
        <h1 className="form-title">Create new account</h1>
        <form onSubmit={formSubmitHandler} className="form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
  
       
  
          <button className="form-btn">Register</button>
        </form>
        <div className="form-footer">
          Already have an account{" "}
          <Link to="/login" className="form-link">
            Login
          </Link>
        </div>
      </div>
    );
  };
  


export default Register/* eslint-disable react/no-unescaped-entities */


