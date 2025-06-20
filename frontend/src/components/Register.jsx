
import React, { useState } from 'react';
import "../form.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  });
const url = "https://login-page-u9sr.onrender.com"
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${url}/user/register`, formData);
      alert("Signup Successfully");
      navigate("/");
    } catch (err) {
      alert("Signup failed");
    }
  };

return (
  <div className="register-wrapper">
    <div className="form-box">
      <form onSubmit={handleRegister}>
        <input name='firstName' placeholder='First Name' onChange={handleChange} value={formData.firstName} />
        <input name='lastName' placeholder='Last Name' onChange={handleChange} value={formData.lastName} />
        <input name='username' placeholder='Username' onChange={handleChange} value={formData.username} />
        <input name='password' placeholder='Password' type="password" onChange={handleChange} value={formData.password} />
        <button type='submit'>Register</button>
      </form>
    </div>
  </div>
);

};

export default Register;














