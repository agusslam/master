import React from 'react'
import { Button } from 'react-bootstrap'

import '../Button/Sign.css'

const button = ({ title, onClick, loading }) => {
    if(loading){
        return <Button variant="custom" disabled>Loading...</Button>
    }
    return <Button variant="custom" type="submit" onClick={onClick}>{title}</Button>
}

export default button