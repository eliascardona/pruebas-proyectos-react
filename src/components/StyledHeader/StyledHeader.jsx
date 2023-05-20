import React from "react";
import "./StyledHeader.css";
import { auth } from "../../firebase/base"
import { signOut } from "firebase/auth";

const StyledHeader = ({ h1 }) => {
  const logOut = async () => {
    await signOut(auth)
  }

  return (
    <>
      <section className="StyledHeader">
        <h1>{h1}</h1>
        <p onClick={() => logOut()}>cerrar sesión</p>
      </section>
    </>
  );
};

export default StyledHeader;