import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("poulet");
    const response = await axios.post("http://localhost:4242/api/auth/login", {
      email,
      password,
    },
    {
      withCredentials: true, // IMPORTANT : permet d'inclure les cookies
    });
    if (response.status === 200) {
      console.log(response.status);
      // remplir le local storage  ----
      navigate("/movies");
    }
  };
  return (
    <div>
      <form action="" id="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p className="item">
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p className="item">
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p className="item">
          <input type="submit" value="Login" />
        </p>
      </form>
    </div>
  );
};

export default Login;
