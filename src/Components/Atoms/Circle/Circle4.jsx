import React from 'react'

// import { Col, Row } from 'react-bootstrap'
import '../Circle/Circle.css'

const circ4 = ({ aktif }) => {
    if (!aktif) {
        return (
            <div className="numberCircle"><p>4</p></div>)
    }
    return (
        <div className="numberCircleOrange"><p>4</p></div>)
}

export default circ4