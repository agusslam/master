import React from 'react'
import { Button } from 'react-bootstrap'

const button = ({ title, onClick, isNext }) => {
    if(!isNext){
        return <Button className="btn-next" disabled>Next</Button>
    }
    return <Button className="btn-next" type="submit" onClick={onClick}>{title}</Button>
}

export default button