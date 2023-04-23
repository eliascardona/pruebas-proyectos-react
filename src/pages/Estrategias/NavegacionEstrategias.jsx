import React from 'react'
import ImagenBarraNavegacion from '../../components/imagen-barra-navegacion/ImagenBarraNavegacion'

const NavegacionEstrategias = ({titulo,informacion}) => {
  return (
    <>
      <ImagenBarraNavegacion
        h1={titulo}
        p={informacion}
        nav_item1={"OSIL"}
        nav_item2={"Eventos"}
        nav_item3={"Desarrollo de Proyectos"}
        nav_item4={"Posicionamiento de Talento"}
      />
    </>
  )
}

export default NavegacionEstrategias