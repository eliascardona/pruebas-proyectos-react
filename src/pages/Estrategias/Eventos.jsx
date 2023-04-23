import React from "react"
import NavegacionEstrategias from "./NavegacionEstrategias"
import SeccionTitulo from "../../components/seccion-titulo/SeccionTitulo"
import TarjetaDeEventoDos from "../../components/eventos/TarjetaDeEventoDos"
import { informacionEventos } from "../../components/eventos/informacionEventos"

const Eventos = () => {  
  return (
    <>
      <NavegacionEstrategias
        titulo={"Eventos"}
        informacion={"Seccion de Eventos"}
      />
      <SeccionTitulo
        encabezado={"Eventos dentro de Fundación DEDICA"}
        texto={
          "Alineados a las tendencias de atracción del talentos que con su habilidad y creatividad potencien un ecosistema efectivo de innovación digital hacia una transformación digital exitosa, la Fundación DEDICA ha consolidado eventos muy novedosos enfocados a conectar las problemáticas de los sectores públicos, privados y sociedad civil hacia la creación de proyectos tecnológicos prácticos y de alto beneficio."
        }
      />
      {
        informacionEventos.map((evento, i, arr) => {
          return (
            <TarjetaDeEventoDos {...evento} />
          )
        })
      }
    </>
  );
};

export default Eventos;