import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const centang = ({ centung }) => {
    if(!centung){
        return <FontAwesomeIcon icon={faCheckCircle} size='3x' style={{ display: 'none' }} />
    }
    return <FontAwesomeIcon icon={faCheckCircle} size='3x'/>
}

export default centang