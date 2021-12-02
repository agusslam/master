import React from 'react'
import { Button } from 'react-bootstrap'
import '../Button/Upload.css'

const buttonupload2 = ({ title, onClick, aktif }) => {
    if(aktif === 0){
        return <Button className="btn-upload" onClick={onClick}>Unggah</Button>
    }else if(aktif === 1){
        return <Button className="btn-upload disabled" type="submit">Unggah</Button>
    }else {
        return <Button className="btn-upload disabled" type="submit">Sukses Unggah</Button>
    }
    
}

export default buttonupload2