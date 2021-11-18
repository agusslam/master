import React from 'react'
import Navbar from './Atoms/Navbar/navbar_login'
import { Container } from 'react-bootstrap'
import SignIn from './Layouts/Signin'
import Foot from './Atoms/Footer/footer.login'

class Homepage extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />     
                <SignIn /> 
                <Foot />    
            </Container>
        )
    }
}

export default Homepage