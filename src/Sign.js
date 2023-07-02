import React from "react";
import { Link } from "react-router-dom";
import "./Sign.css";

const Sign = () => {
  return (
    <div className="container">
      <div className="left-half">
        <h1>Board</h1>
      </div>
      <div className="right-half">
        <div className="signinbox">
          <h4>Sign In</h4>
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/dashboard">
              <button type="submit">Sign In</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
