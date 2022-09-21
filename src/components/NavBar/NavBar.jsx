import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import Searchbar from "../Searchbar/Searchbar";
import "./NavBar.css";

const NavBar = ({ user = true, notification_count = 0 }) => {
  const checkNotification = () => {
    if (notification_count <= 0) return;
    else return "notification";
  };

  return (
    <div className="navbar_container">
      <i className="fa-sharp fa-solid fa-tornado icon"></i>
      <p>TORNADO</p>
      <p>---</p>
      <p>---</p>
      <Searchbar />
      {user ? (
        <div className="user_container">
          <div count={notification_count} className={checkNotification()}>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div count={notification_count} className={checkNotification()}>
            <i className="fa-solid fa-bell"></i>
          </div>
          <img
            className="navbar_user"
            src={
              "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
            }
          />
        </div>
      ) : (
        "LOGIN"
      )}
    </div>
  );
};

export default NavBar;
