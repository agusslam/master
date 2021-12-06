import React from 'react'

// import { Col, Row } from 'react-bootstrap'
import '../Circle/Circle.css'

const circ2 = ({ aktif }) => {
    if (!aktif) {
        return (
            <div className="numberCircle"><p>2</p></div>)
    }
    return (
        <div className="numberCircleOrange"><p>2</p></div>)
}

export default circ2