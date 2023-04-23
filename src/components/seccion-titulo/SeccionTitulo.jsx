import React from 'react'
import "./SeccionTitulo.css"

const SeccionTitulo = ({ encabezado, texto }) => {
  return (
    <div className='Seccion__Container'>
        <div className="Seccion__Inner">
          <div className="Seccion__Inner">
            <h2>{encabezado}</h2>
            {/* --------- divider --------- */}
            <div className="Seccion__LineDivider"></div>
            {/* --------- divider --------- */}
            <p>{texto}</p>
          </div>
        </div>
    </div>
  )
}

export default SeccionTitulo