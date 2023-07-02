import React from "react";
import "./Dashboard.css";

import Activities from "./activities";
import Pie from "./pie";
import Schedule from "./Schedule";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            <h2 className="fa fa-home">Board.</h2>
          </li>
          <li>
            <i className="fa fa-exchange"></i> Dashboard
          </li>
          <li>
            <i className="fa fa-exchange"></i> Transactions
          </li>
          <li>
            <i className="fa fa-calendar"></i> Schedules
          </li>
          <li>
            <i className="fa fa-users"></i> Users
          </li>
          <li>
            <i className="fa fa-cog"></i> Settings
          </li>
        </ul>
      </div>
      <div className="main">
        <h1>Dashboard</h1>
        <div className="cards-container">
          <div
            className="card"
            style={{ backgroundColor: "rgb(196, 244, 206)" }}
          >
            <i className="fa fa-dollar"></i>
            <h2>Total Revenues</h2>
            <p>$10,000</p>
          </div>
          <div
            className="card"
            style={{ backgroundColor: "rgb(244, 210, 151 )" }}
          >
            <i className="fa fa-exchange"></i>
            <h2>Total Transactions</h2>
            <p>500</p>
          </div>
          <div
            className="card"
            style={{ backgroundColor: "rgb(255, 154, 231)" }}
          >
            <i className="fa fa-thumbs-up"></i>
            <h2>Total Likes</h2>
            <p>1,000</p>
          </div>
          <div
            className="card"
            style={{ backgroundColor: "rgb(223, 194, 244)" }}
          >
            <i className="fa fa-user"></i>
            <h2>Total Users</h2>
            <p>500</p>
          </div>
        </div>
        <div>
          <Activities />
        </div>

        <div className="row-container">
          <div className="column">
            <Pie />
          </div>
          <div className="column">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
