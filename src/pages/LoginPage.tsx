import React from "react";
import "./style/LoginPage.css";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="main_container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
