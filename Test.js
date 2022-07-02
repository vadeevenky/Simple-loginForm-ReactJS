import React, { useState } from "react";

function Test() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = (event) => {
    setUsername(event.target.value);
    // console.log(event.target.value);
  };
  const passHandler = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const logindata = {
      name: username,
      pass: password,
    };

    console.log(logindata);
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={userHandler}
          placeholder="username"
          value={username}
        />
        <br />
        <input
          type="password"
          onChange={passHandler}
          placeholder="password"
          value={password}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Test;
