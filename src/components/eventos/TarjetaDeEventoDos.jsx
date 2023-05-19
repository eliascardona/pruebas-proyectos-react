import React, { useState } from 'react'
import './TarjetaDeEventoDos.css'
import NormalModal from '../NormalModal'

const TarjetaDeEventoDos = ({ text }) => {
    const [openNotif, setOpenNotif] = useState(false)
    return (
        <section>
            <article className='TarjetaDeEventoDos__Container'>
                <div className='TarjetaDeEventoDos__Row'>
                    <div className='TarjetaDeEventoDos__Uno'>
                        <h3>{text}</h3>
                    </div>
                    
                    <div className='TarjetaDeEventoDos__Dos'>
                        {text}
                    </div>
                    
                    <div className='TarjetaDeEventoDos__Tres'>
                        {text}
                    </div>

                    <div className='TarjetaDeEventoDos__Cuatro'>
                        <div className='justify'>
                            <p>
                                {text}
                            </p>
                            <strong>
                                más información
                            </strong>
                        </div>
                    </div>
                </div>
            </article>
            <NormalModal openNotif={openNotif} setOpenNotif={setOpenNotif} />
        </section>
    )
}

export default TarjetaDeEventoDos