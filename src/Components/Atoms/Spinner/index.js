import React from 'react'
import { Spinner } from 'react-bootstrap'

const spinner = ({ loading }) => {
    if(loading){
        return <Spinner animation="border" variant="warning"></Spinner>
    }
    return null
}

export default spinner