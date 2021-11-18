import React from 'react'
import { Button } from 'react-bootstrap'

const button = ({ title, onClick, loading }) => {
    if(loading){
        return <Button className="btn-submit" disabled>Loading...</Button>
    }
    return <Button className="btn-submit" type="submit" onClick={onClick}>{title}</Button>
}

export default button