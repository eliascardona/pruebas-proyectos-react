import React, { useEffect, useRef, useState } from 'react'
import EditModal from '../components/modals/EditModal'
import { storage } from '../firebase/base'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage'
import '../gStyles.css'
import PerfilUI from '../components/perfil/PerfilUI'

const Perfil = () => {
    const [openNotif, setOpenNotif] = useState(false)
    const [imageUpload, setImageUpload] = useState(null)
    const [progress, setProgress] = useState(0)
    const uploaderRef = useRef(null)
    
    const uploadFile = () => {
        if (imageUpload == null) return
        
        const imageRef = ref(storage, `photos/${imageUpload.name}`)
        const uploadTask = uploadBytesResumable(imageRef, imageUpload)
        
        uploadTask.on("state_changed",
            (error) => {
                console.log(error)
            },
            
            (snap) => {
                const prog = (snap.bytesTransferred / snap.totalBytes)*100
                setProgress(prog)
            },
            
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(URL => console.log(URL))
            }
        )
    }    
    
    return (
        <section>
            <PerfilUI nombre={"Juan"} email={"juan@email.com"} />
            <button type='button' className='formBtn' onClick={() => setOpenNotif(true)}>
                subir foto
            </button>
            <EditModal 
                openNotif={openNotif}
                setOpenNotif={setOpenNotif}
                onFileChange={e => setImageUpload(e.target.files[0])}
                uploaderRef={uploaderRef}
                upFile={uploadFile}
            />
        </section>
    )
}

export default Perfil