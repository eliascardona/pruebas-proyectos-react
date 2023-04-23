import React from 'react'
import { Modal } from 'react-bootstrap'
import "./EstilosGlobalesMiembros.css"

const ModalMiembro = ({ show, setShow, titulo, contenido }) => {
    return (
        <>
            <Modal
                show={show}
                fullscreen="xxl-down"
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                    <strong>
                        {titulo}
                    </strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='justify'>
                        <p>
                            {contenido}
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalMiembro