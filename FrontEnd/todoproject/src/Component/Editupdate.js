import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import (useParams)

export default function Editupdate() {
  const [name, setName] = useState("");
  const [auther, setAuther] = useState("");
  const [added, setAdded] = useState("");

  const params = useParams();

  useEffect(() => {

    const getidDetails = async () => {
   
        console.log(params);
    
        const response = await fetch(
          `http://localhost:5500/getidDetails/${params.id}`,
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        let result = await response.json();
    
        console.log(result.temp);
        setName(result.temp.name);
        setAuther(result.temp.auther);
        setAdded(result.temp.added);
      };


    getidDetails();
  }, []);



//   console.log(name, auther, added);

  const HandleEdit = async() => {
    console.log(name, auther, added);

    const response = await fetch(
        `http://localhost:5500/putidDetails/${params.id}`,
        {
          method: "put",
            body: JSON.stringify({name, auther, added}),
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
  
      let result = await response.json();

      console.log(result);

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
          <button onClick={HandleEdit}>Edit</button>
        </div>
      </div>
    </div>
  );
}
