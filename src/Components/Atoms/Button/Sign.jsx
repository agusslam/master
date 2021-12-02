import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

import '../Button/Sign.css'

const button = ({ title, onClick, loading }) => {
    if(loading){
        return <Button variant="custom" disabled><Spinner animation="border" variant="secondary" size="sm" /> Loading...</Button>
    }
    return <Button variant="custom" type="submit" onClick={onClick}>{title}</Button>
}

export default button