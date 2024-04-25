/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./forms.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswod, setShowPasswod] = useState(false);

  const showPasswodhandler = () => {
    setShowPasswod(prev => !prev);
   
  };

  // Form submit handlers
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "")
      return toast.error(`Email is required, Please enter a valid email`);

    if (password.trim() === "")
      return toast.error(`Password is required, Please enter a valid password`);

    console.log({ email, password });
  };
  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Login to your account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPasswod ? "text" : "password"}
          placeholder="Password"
        />

        {showPasswod ? (
          <i
            onClick={showPasswodhandler}
            className="bi bi-eye-slash-fill show-password-icon"
          ></i>
        ) : (
          <i
            onClick={showPasswodhandler}
            className="bi bi-eye-fill show-password-icon"
          ></i>
        )}

        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        Don't have an account{" "}
        <Link to="/register" className="form-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Form;
