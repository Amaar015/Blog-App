import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Do not have an account? <Link className="link" to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
