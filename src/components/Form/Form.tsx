import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Button from "../Button/Button";

interface formProps {
  reload: () => {};
}

interface Errors {
  name: string;
  last_name: string;
  birthday: string;
}

const Form = ({ reload }: formProps) => {
  const [error, setError] = useState({ name: "", last_name: "", birthday: "" });
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

    setError(
      validateInput({
        ...input,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      })
    );
  };

  const onReset = () => {
    setInput({
      name: "",
      last_name: "",
      birthday: "",
    });
  };

  const validateInput = (input) => {
    let error: Errors = { name: "", last_name: "", birthday: "" };

    if (!input.name) {
      console.log(error.name);
      error.name = "*field is required";
    }
    if (!input.last_name) {
      error.last_name = "*field is required";
    }
    if (!input.birthday) {
      error.birthday = "*field is required";
    }

    return error;
  };

  const onSubmit = async (e: React.FormEvent) => {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      e.preventDefault();
      const { name, last_name, birthday } = input;
      console.log("clicked");

      if (!input.name || !input.last_name || !input.birthday) {
        alert("There are empty fields");
      } else {
        await axios
          .post(
            "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/carlosmendez",
            JSON.stringify({ name, last_name, birthday }),
            { headers }
          )
          .catch((error) => console.log(error));
        onReset();
        reload();
        console.log(error);
      }
    } catch (error) {}
  };

  return (
    <div className="form_container">
      <div className="input_container">
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
        {error.name && <p className="error_input">{error.name}</p>}
      </div>

      <div className="input_container">
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
        {error.name && <p className="error_input">{error.name}</p>}
      </div>

      <div className="input_container">
        <label className="label">Birthday</label>
        <input
          required
          className="input"
          name="birthday"
          type="date"
          value={input.birthday}
          onChange={onHandleChange}
          placeholder="dd-mm-yyyy"
        />
        {error.name && <p className="error_input">{error.name}</p>}
      </div>
      <button className="generic submit_button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
