import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <>
      <div className="container-fluid text-center my-5">
        <h1>
          Amazing <span className="orange-tpt">Training</span> Programs
        </h1>
        <hr
          style={{
            width: "25vw",
            margin: "0px auto",
            border: "1.5px solid orangered",
            opacity: "0.7",
          }}
        />
        <p className="text-muted">
          We are much appreciated in the field of Training as well. Techpile
          offers you the best development training via experienced consultants.
        </p>
        <br />
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Cards;
