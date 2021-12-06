import React from 'react'

// import { Col, Row } from 'react-bootstrap'
import '../Circle/Circle.css'

const circ = ({ aktif }) => {
    if (!aktif) {
        return (
            <div className="numberCircle"><p>1</p></div>)
    }
    return (
        <div className="numberCircleOrange"><p>1</p></div>)
}

export default circ