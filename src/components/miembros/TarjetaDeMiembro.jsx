import React from 'react'
import './EstilosGlobalesMiembros.css'

const TarjetaDeMiembro = ({arrayParam}) => {
  return (
    <section className='TarjetaDeMiembro__Container'>
      {
        arrayParam.map((item, index) => (
          <div className='TarjetaDeMiembro__Row' key={index}>
            <div>
              <div className='TarjetaDeMiembro__ImgGrid'>
                <img src={item.imagen} alt={item.altImagen} />
              </div>
            </div>

            <div>
              <div className='justify'>
                <strong className='strongDisplay'>
                  {item.nombre}
                </strong>
                <strong className='strongDisplay'>
                  {item.puesto}
                </strong>
                <p>
                  {item.resumen}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default TarjetaDeMiembro