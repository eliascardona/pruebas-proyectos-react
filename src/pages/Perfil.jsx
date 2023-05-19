import React, { useRef, useState } from 'react'
// import { auth, db, storage } from '../base'
import EditModal from '../components/EditModal'

const Perfil = () => {
    const [openNotif, setOpenNotif] = useState(false)
    // const nameRef = useRef()
    // const programRef = useRef()
    // const bioRef = useRef()
    // const uploaderRef = useRef()
    // const infoRef = useRef()
    // const photoRef = useRef()
    // const [fileUrl, setFileUrl] = useState(null)
 
    // const onFileChange = async (e) => {
    //     const file = e.target.files[0]
    //     const fileRef = storage.ref("fotos-de-perfil").child(auth.currentUser.uid)
    //     const task = await fileRef.put(file)
    //     var percentage = ((task.bytesTransferred/task.totalBytes)*100)
    //     uploaderRef.current.value = percentage
    //     setFileUrl(await fileRef.getDownloadURL())
    // }

    return (
        <div>
            <EditModal openNotif={openNotif} setOpenNotif={setOpenNotif}  />
            <button type='button' onClick={() => setOpenNotif(true)}>
                subir foto
            </button>
        </div>
    )
}

export default Perfil
