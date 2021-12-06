import React from 'react'

// import { Col, Row } from 'react-bootstrap'
import '../Circle/Circle.css'

const circ3 = ({ aktif }) => {
    if (!aktif) {
        return (
            <div className="numberCircle"><p>3</p></div>)
    }
    return (
        <div className="numberCircleOrange"><p>3</p></div>)
}

export default circ3