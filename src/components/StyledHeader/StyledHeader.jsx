import React from "react";
import "./StyledHeader.css";

const StyledHeader = ({ h1, p }) => {
  return (
    <>
      <section className="StyledHeader">
        <h1>{h1}</h1>
        <p>{p}</p>
      </section>
    </>
  );
};

export default StyledHeader;