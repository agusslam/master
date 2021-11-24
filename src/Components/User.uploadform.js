import React from 'react'
import Navbar from './Atoms/Navbar/navbar_dash'
import { Container } from 'react-bootstrap'
import DashUs from './Layouts/User.uploadform'
import Foot from './Atoms/Footer/footer.login'

class DashUser extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />     
                <DashUs /> 
                <Foot />    
            </Container>
        )
    }
}

export default DashUser