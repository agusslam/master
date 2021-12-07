import React from 'react'
import { Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from '../Atoms/Navbar/Login/Index'
import Banner from '../Atoms/Banner/Home/KprBanner'
import CariRumah from '../Atoms/Content/Kpr/KprContent'
// import ProductInfo from '../Atoms/Product/Info/ProductInfo'
import Foot from '../Atoms/Footer/Home/Footer'


class KPRpage extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Route component={Navbar} /> 
                <Banner />  
                <CariRumah />
                {/* <SimulasiKpr /> */}
                <Foot />
            </Container>
        )
    }
}

export default KPRpage