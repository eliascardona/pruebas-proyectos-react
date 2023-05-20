import React, { useState } from 'react'
import './Perfil.css'

const PerfilUI = ({ nombre, email, uid }) => {
    const [isInput, setIsInput] = useState(false)
    function editMode() {
        setIsInput(true)
    }
    return (
        <div className="Container">
            <div className="Row">                
                <div className="a">
                    <div>Editar perfil</div>
                    <div>Facturación</div>
                    <div>Soporte</div>
                </div>

                <div>
                    <h3 className='mh3'>Página de perfil</h3>
                    <div className="b">
                        <div>
                            <div>Nombre</div>
                            <div onClick={() => editMode()}>
                                editar
                            </div>
                            {
                                isInput === true ? (
                                    <div>
                                        <input type='text' placeholder='nombre' />
                                    </div>
                                        
                                ) : (
                                    <div>
                                        {nombre}
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <div>Email</div>
                            <div onClick={() => editMode()}>
                                editar
                            </div>
                            {
                                isInput === true ? (
                                    <div>
                                        <input type='text' placeholder='email' />
                                    </div>
                                        
                                ) : (
                                    <div>
                                        {email}
                                    </div>
                                )
                            }                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfilUI