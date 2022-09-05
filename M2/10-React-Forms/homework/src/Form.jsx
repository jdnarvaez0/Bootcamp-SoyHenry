import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = function (e) {
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  function validate(input) {
    let errors = {};
    if (!input.username) {
      errors.username = "Username is required";
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = "Username is invalid";
    }

    if (!input.password) {
      errors.password = "Password is required";
    } else if (!/(?=.*[0-9])/.test(input.password)) {
      errors.password = "Password is invalid";
    }

    return errors;
  }

  return (
    <div className="container">
      <h1>Form ReactJs</h1>
      <form>
        <div>
          <label>Username:</label>
          <input
            className={`${errors.username && "danger"}`}
            key="userName"
            type="text"
            placeholder="User"
            name="username"
            value={input.username}
            onChange={handleInputChange}
          />
          {errors.username && <p className="danger">{errors.username}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            className={`${errors.password && "danger"}`}
            key="password"
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
          />
          {errors.password ? <p className="danger">{errors.password}</p> : null}
        </div>

        <div className="buttonForm">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
