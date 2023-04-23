import React from 'react'
import { useState } from 'react'
import ModalEvento from './ModalEvento'
import './TarjetaDeEventoDos.css'

const TarjetaDeEventoDos = ({ _id, nombreDelEvento, resumenCorto, fecha, hora, modalidad, lugar, imagen, altImagen, resumenCompleto }) => {
    const [show, setShow] = useState(false)
    return (
        <section className='TarjetaDeEventoDos__Container'>
            <div className='TarjetaDeEventoDos__Row'>
                <div className='TarjetaDeEventoDos__Uno'>
                    <h3>{nombreDelEvento}</h3>
                </div>
                
                <div className='TarjetaDeEventoDos__Dos'>
                    <div className='TarjetaDeEventoDos__ImgGrid'>
                        <img src={imagen} alt={altImagen} />
                    </div>
                </div>
                
                <div className='TarjetaDeEventoDos__Tres'>
                    <div className='TarjetaDeEventoDos__SpanGrid'>
                        <div>{fecha}</div>
                        <span>{hora}</span>
                        <span>{modalidad}</span>
                        <span>{lugar}</span>
                    </div>
                </div>

                <div className='TarjetaDeEventoDos__Cuatro'>
                    <div className='justify'>
                        <p>
                            {resumenCorto}
                        </p>
                        <strong                        
                            onClick={() => setShow(true)}
                        >
                            más información
                        </strong>
                    </div>
                </div>
            </div>
            <ModalEvento 
                show={show} 
                setShow={setShow} 
                titulo={nombreDelEvento} 
                contenido={resumenCompleto}
            />
        </section>
    )
}

export default TarjetaDeEventoDos