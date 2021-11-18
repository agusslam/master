import React from 'react'
import Navbar from './Atoms/Navbar/navbar_dash'
import { Container } from 'react-bootstrap'
import Dashadmin from './Layouts/Admin'
import Foot from './Atoms/Footer/footer.login'

class DashAdmin extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />     
                <Dashadmin /> 
                <Foot />    
            </Container>
        )
    }
}

export default DashAdmin