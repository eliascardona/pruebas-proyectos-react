import React, { useState } from 'react'
import './Evento.css'
import NormalModal from '../modals/NormalModal'

const Evento = ({ text }) => {
    const [openNotif, setOpenNotif] = useState(false)
    return (
        <section>
            <article className='Evento__Container'>
                <div className='Evento__Row'>
                    <div className='Evento__Uno'>
                        <h3>Data de firestore</h3>
                    </div>
                    
                    <div className='Evento__Dos'>
                        <img src='https://picsum.photos/200/200' alt='lala' />
                    </div>
                    
                    <div className='Evento__Tres'>
                        {text}
                    </div>

                    <div className='Evento__Cuatro'>
                        <strong onClick={() => setOpenNotif(true)}>
                            más información
                        </strong>
                    </div>
                </div>
            </article>
            <NormalModal openNotif={openNotif} setOpenNotif={setOpenNotif} parentText={text} />
        </section>
    )
}

export default Evento