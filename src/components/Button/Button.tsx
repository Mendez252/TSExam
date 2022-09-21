import React, { useState } from "react";
import "./Button.css";

//README: status=['sucess','warning','error']

interface Props {
  title: string;
  flag: string;
}

const Button: React.FC<Props> = ({ title, flag = "" }) => {
  const [status, setStatus] = useState(flag);

  const onHandleClick = () => {
    console.log("clicked");
  };

  const checkFlag = () => {
    if (status === "") return "generic";
    if (status === "error") return "generic error";
    if (status === "sucess") return "generic sucess";
    if (status === "warning") return "generic warning";
  };

  return (
    <div className={checkFlag()} onClick={onHandleClick}>
      {title}
    </div>
  );
};

export default Button;
