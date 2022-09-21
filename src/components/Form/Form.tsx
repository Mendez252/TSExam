import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

interface formProps {
  refresh: () => {};
}

const Form = ({ refresh }: formProps) => {
  const [error, setError] = useState({ name: "" });
  const [input, setInput] = useState({
    name: "",
    last_name: "",
    birthday: "",
  });

  const onHandleChange = (e: React.FormEvent) => {
    if ((e.target as HTMLInputElement).name === "name") {
      setInput({ ...input, name: (e.target as HTMLInputElement).value });
    }
    if ((e.target as HTMLInputElement).name === "last_name") {
      setInput({ ...input, last_name: (e.target as HTMLInputElement).value });
    }
    if ((e.target as HTMLInputElement).name === "birthday") {
      setInput({ ...input, birthday: (e.target as HTMLInputElement).value });
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const { name, last_name, birthday } = input;

      axios({
        url: "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/carlosmendez",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          origin: "x-requested-with",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ name, last_name, birthday }),
      }).catch((error) => console.log(error));
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_container">
      <label className="label">Name</label>
      <input
        required
        className="input"
        name="name"
        type="text"
        maxLength={30}
        value={input.name}
        onChange={onHandleChange}
      />
      {error.name && <p className="error">{error.name}</p>}

      <label className="label">Last Name</label>
      <input
        required
        className="input"
        name="last_name"
        type="text"
        maxLength={30}
        value={input.last_name}
        onChange={onHandleChange}
      />
      {error.name && <p className="error">{error.name}</p>}

      <label className="label">Birthday</label>
      <input
        required
        className="input"
        name="birthday"
        type="text"
        value={input.birthday}
        onChange={onHandleChange}
      />
      {error.name && <p className="error">{error.name}</p>}
      <button className="form_button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
