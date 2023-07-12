import React, { useEffect, useState } from "react";
//import Add from "./Add";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch("http://localhost:5500/list");

      const result = await response.json();
      setData(result.details);
    };

    getDetails();
  }, []);

  console.log(data);

  // const HandleEdit = () => {
  //   <div className="modal" tabindex="-1">
  //     <div className="modal-dialog">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title">Modal title</h5>
  //           <button
  //             type="button"
  //             className="btn-close"
  //             data-bs-dismiss="modal"
  //             aria-label="Close"
  //           ></button>
  //         </div>
  //         <div className="modal-body">
  //           <p>Modal body text goes here.</p>
  //         </div>
  //         <div className="modal-footer">
  //           <button
  //             type="button"
  //             className="btn btn-secondary"
  //             data-bs-dismiss="modal"
  //           >
  //             Close
  //           </button>
  //           <button type="button" className="btn btn-primary">
  //             Save changes
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>;
  // };

  const HandleDelete = async (id) => {
    const response = await fetch(`http://localhost:5500/deleteDetails/${id}`, {
      method: "delete",

    });

    const result = await response.json();

    if (result) {
      alert("SUccessfully deleted");
    } else {
      alert("No details deleted");
    }
  };

  return (
    <div className="container">
      <div>Blue border</div>
      <div>EntertoDo</div>
      <div className="border border-light-subtle">
        <h5>The Todos;</h5>

        <div className="row border border-light-subtle">
          {data.map((doto) => {
            return (
              <div className="container" key={doto._id}>
                <div className="row">
                  <div className="col">
                    <h6>Name:{doto.name}</h6>
                    <h6>Auther:{doto.auther}</h6>
                    <h6>Added:{doto.added}</h6>
                  </div>
                  <div>
                    <button>Save</button>
                    <Link to={"/getidupdate/"+ doto._id}>Update</Link>
                    <button onClick={() => HandleDelete(doto._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div></div>
        </div>
        <div>Create Node APIs</div>
      </div>
    </div>
  );
}
