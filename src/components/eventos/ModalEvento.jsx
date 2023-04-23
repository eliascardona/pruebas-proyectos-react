import React from 'react'
import { Modal } from 'react-bootstrap'
import "./ModalEvento.css"

const ModalEvento = ({ show, setShow, titulo, contenido }) => {
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
                        <h3>Incríbete: </h3>
                        Whats App{'  |  '}App de eventos
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalEvento