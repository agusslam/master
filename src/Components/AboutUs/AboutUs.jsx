import React from 'react'
import { Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from '../Atoms/Navbar/Login/Index'
import Banner from '../Atoms/Banner/Home/AboutBanner'
import AboutU  from '../Atoms/Content/About/AboutContent'
import Foot from '../Atoms/Footer/Home/Footer'


class About extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Route component={Navbar} /> 
                <Banner />
                <AboutU />  
                <Foot />
            </Container>
        )
    }
}

export default About