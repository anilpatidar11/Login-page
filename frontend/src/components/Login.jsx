import React, { useState } from "react";
import "../form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const url = "https://login-page-u9sr.onrender.com"
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "url/user/login",
        formData
      );
      console.log(res);
      if (res.data.status) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/welcome");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

return (
  <div className="login-wrapper">
    <div className="form-box">
      <form onSubmit={handleLogin}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
);

};

export default Login;







