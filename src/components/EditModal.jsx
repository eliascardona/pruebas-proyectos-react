import React from 'react'
import "./componentesMD.css"

const EditModal = ({ openNotif, setOpenNotif, formRef, onSubmit, onEditFileChange, uploaderRef }) => {
    return (
        openNotif &&
        <div className="globalContainer">
            <div className="modalContainer">                
				<div className="centeredGrid">
					<form ref={formRef} onSubmit={onSubmit}>
						<h3>Select a file</h3>
    	                <label htmlFor="edit" className="fileLabel">
	                        <input type="file" id="edit" className="fileInput" accept="image/*" onChange={onEditFileChange} />
            	            <div>
        	                    <ion-icon name="cloud-upload-outline"></ion-icon>
    	                    </div>
	                    </label>
                	    <progress value="0" max="100" ref={uploaderRef} className="progress">
	                        0%
            	        </progress>
    	                <button type="button" className="formBtn" onClick={() => setOpenNotif(false)}>
	                        Cancelar
        	            </button>
					</form>
				</div>                
            </div>
        </div>
    )
}

export default EditModal