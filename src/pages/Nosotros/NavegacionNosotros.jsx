import React from 'react'
import ImagenBarraNavegacion from '../../components/imagen-barra-navegacion/ImagenBarraNavegacion'

const NavegacionNosotros = ({titulo,informacion}) => {
  return (
    <>
        <ImagenBarraNavegacion
        h1={titulo}
        p={informacion}
        nav_item1={"Proposito"}
        nav_item2={"Liderazgo"}
        nav_item3={"Miembros"}
        nav_item4={"Estructura"}
        
      />
    </>
  )
}

export default NavegacionNosotros