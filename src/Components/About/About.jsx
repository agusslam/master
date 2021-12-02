import React from 'react'
import { Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from '../Atoms/Navbar/Login/Index'
// import Banner from '../Atoms/Banner/Home/ContactBanner'
// import ContactCon from '../Atoms/Content/Contact/ContactContent'
import Foot from '../Atoms/Footer/Home/Footer'


class About extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Route component={Navbar} /> 
                {/* <Banner /> */}
                {/* <ContactCon />   */}
                <Foot />
            </Container>
        )
    }
}

export default About