import React from 'react'
import { Button } from 'react-bootstrap'
import '../Button/Next.css'

const buttonNext = ({ title, onClick, isNext }) => {
    if(!isNext){
        return <Button className="btn-next" disabled>{title}</Button>
    }
    return <Button className="btn-next" type="submit" onClick={onClick}>{title}</Button>
}

export default buttonNext