import React from 'react'
import { Button } from 'react-bootstrap'
import '../Button/Upload.css'

const buttonupload = ({ title, onClick, aktif }) => {
    if(!aktif){
        return <Button className="btn-upload" onClick={onClick}>Upload</Button>
    }
    return <Button className="btn-upload disabled" type="submit">Success Upload</Button>
}

export default buttonupload