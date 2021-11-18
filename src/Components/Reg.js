import React from 'react'
import Navbar from './Atoms/Navbar/navbar_login'
import { Container } from 'react-bootstrap'
import Reg from './Layouts/Register'
import Foot from './Atoms/Footer/footer.login'

class Homepage extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />     
                <Reg />  
                <Foot />   
            </Container>
        )
    }
}

export default Homepage