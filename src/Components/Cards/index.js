import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "18rem",
          padding: "5px",
          margin: "5px",
          border: "1px solid black",
        }}
      >
        <div className="card-body">
          <h5 className="card-title"> ID : {props.item.id}</h5>
          <h5 className="card-title"> Name : {props.item.name}</h5>
          <h5 className="card-title"> Age : {props.item.age}</h5>
          <h5 className="card-title"> Gender : {props.item.gender}</h5>
          <h5 className="card-title"> E-mail : {props.item.email}</h5>
          <h5 className="card-title"> Phone Number : {props.item.phoneNo}</h5>
        </div>
      </div>
      ;
    </div>
  );
};

export default Cards;
