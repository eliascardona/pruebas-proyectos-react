import React from 'react'
import "./componentesMD.css"

const NormalModal = ({ openNotif, setOpenNotif, parentText }) => {
    return (
        openNotif &&
        <div className="globalContainer">
            <div className="modalContainer">                
				<div className="centeredGrid">
                    <h3>
                        {parentText}
                    </h3>
                    <p>
                        {parentText}
                    </p>
                    <br />
                    <button type="button" className="formBtn" onClick={() => setOpenNotif(false)}>
                        Cancelar
                    </button>
				</div>                
            </div>
        </div>
    )
}

export default NormalModal