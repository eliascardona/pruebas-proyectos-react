import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ImagenBarraNavegacion.css";

const ImagenBarraNavegacion = ({ h1, p, nav_item1, nav_item2, nav_item3, nav_item4 }) => {
  let location = useLocation();
  return (
    <>
      <section className="ImagenBarraNavegacion">
        <h1>{h1}</h1>
        <p>{p}</p>

        <nav>
          <ul className="ImagenBarraNavegacion__lista">
            <Link
              className={
                location.pathname === `/${nav_item1}`
                  ? "ImagenBarraNavegacion__elementos selected"
                  : "ImagenBarraNavegacion__elementos"
              }
              to={`/${nav_item1}`}
            >
              {nav_item1}
            </Link>
            <Link
              className={
                location.pathname === `/${nav_item2}`
                  ? "ImagenBarraNavegacion__elementos selected"
                  : "ImagenBarraNavegacion__elementos"
              }
              to={`/${nav_item2}`}
            >
              {nav_item2}
            </Link>
            <Link
              className={
                location.pathname === `/${nav_item3}`
                  ? "ImagenBarraNavegacion__elementos selected"
                  : "ImagenBarraNavegacion__elementos"
              }
              to={`/${nav_item3}`}
            >
              {nav_item3}
            </Link>
            <Link
              className={
                location.pathname === `/${nav_item4}`
                  ? "ImagenBarraNavegacion__elementos selected"
                  : "ImagenBarraNavegacion__elementos"
              }
              to={`/${nav_item4}`}
            >
              {nav_item4}
            </Link>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default ImagenBarraNavegacion;