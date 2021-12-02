import React from 'react'
import { Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from '../Atoms/Navbar/Login/Index'
import SignUpCont from '../Atoms/Content/Signup/SignupContent'
import Foot from '../Atoms/Footer/Home/Footer'


class Homepage extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Route component={Navbar} /> 
                <Route component={SignUpCont} />
                <Foot />
            </Container>
        )
    }
}

export default Homepage