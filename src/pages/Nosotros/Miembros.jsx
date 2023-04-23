import React from "react";
import NavegacionNosotros from "./NavegacionNosotros";
import SeccionTitulo from "../../components/seccion-titulo/SeccionTitulo";
import TarjetaDeMiembro from "../../components/miembros/TarjetaDeMiembro";
import { informacionMiembros } from "../../components/miembros/informacionMiembros"
import "../../components/miembros/EstilosGlobalesMiembros.css";

const Miembros = () => {
  return (
    <>
    <NavegacionNosotros titulo={"Miembros"} informacion={"Seccion de Miembros"}/>      
      <SeccionTitulo 
        encabezado={"Conoce a los miembros de la fundación"}
        texto={
          "La Fundación DEDICA está estructurada de tal forma que se priorice el protagonismo, la participación, la colaboración y el acompañamiento de todos los que conforman la comunidad integrada tanto por instituciones de educación como de grandes aliados. De manera estratégica la Fundación cuenta con un Consejo Directivo que debe trabajar en la conformación de planes de acción, las estrategias de fortalecimiento para lograr la misión de la Fundación, concretar alianzas que la vinculen con todos los sectores productivos, establecer convenios de colaboración con instituciones académicas y en términos generales representar y liderar formal y legalmente a esta virtuosa Comunidad de Talento y Creatividad en México y Latinoamérica. Con la firme intención de que está extraordinaria estrategia cuente con personas y líderes reconocidos en la Comunidad a nivel internacional, el Consejo Directivo lo conforman el Dr. José Ramón Morales Ávalos, Dr. Oscar Pérez Veyna y el Ing. Manuel Haro Márquez."
        }
      />
      <TarjetaDeMiembro arrayParam={informacionMiembros} />
    </>
  );
};

export default Miembros;