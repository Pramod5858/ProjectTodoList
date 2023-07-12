import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

export default function Add() {
  const [name, setName] = useState("");
  const [auther, setAuther] = useState("");
  const [added, setAdded] = useState("");

  const HandleAdd = async(event) => {
    event.preventDefault();
console.log(name, auther, added);
let response = await fetch("http://localhost:5500/addDetails", {
    method:"post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({name, auther, added})
})

response = await response.json();

console.log(response);

if(!response){
    alert("Not able to add details")
    Navigate(<Home />);
}
else{
    alert("Successfully added details")
}

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="col">
          <label>Auther</label>
          <input
            type="text"
            value={auther}
            onChange={(e) => {
              setAuther(e.target.value);
            }}
            placeholder="Enter Auther"
          ></input>
        </div>
        <div className="col">
          <label>Added</label>
          <input
            type="text"
            value={added}
            onChange={(e) => {
              setAdded(e.target.value);
            }}
            placeholder="Enter Added"
          ></input>
        </div>
        <div>
          <button onClick={HandleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}
