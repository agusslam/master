import React from 'react'
// import {Col} from 'react-bootstrap'
import '../Panjang/Panjang.css'

const pjg3 = ({ aktif2 }) => {
    if(!aktif2){
        return (
            <div className="garis-grey"></div>
        )
    }
    return (
        <div className="garis-orange"></div>
    )
}

export default pjg3