import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [userPhone, setUserPhone] = useState();

  const handlerSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    const data = {
      name: name,
      userId: userId,
      userPhone: userPhone,
    };
    axios
      .post("http://localhost:4000/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <form>
        <h1>Client Form</h1>
        <br></br>
        <label htmlFor="uname">Name : </label>
        <input
          type="text"
          placeholder="Enter User Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label htmlFor="UId">User Id : </label>
        <input
          type="text"
          placeholder="Enter User Name"
          value={userId}
          onChange={(event) => {
            setUserId(event.target.value);
          }}
        />
        <br />
        <label htmlFor="UPhone">User Phone : </label>
        <input
          type="text"
          placeholder="Enter User Id"
          value={userPhone}
          onChange={(event) => {
            setUserPhone(event.target.value);
          }}
        />
        <br />
        <button type="submit" onClick={handlerSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
