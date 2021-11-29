import React from 'react'
import { Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from '../Atoms/Navbar/Login/Index'
import SignInContent from '../Atoms/Content/Signin/SignInContent'
import Foot from '../Atoms/Footer/Home/Footer'


class Homepage extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Route component={Navbar} /> 
                <Route component={SignInContent} />
                <Foot />
            </Container>
        )
    }
}

export default Homepage