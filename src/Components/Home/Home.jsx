import React from 'react'
import { Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from '../Atoms/Navbar/Login/Index'
import Banner from '../Atoms/Banner/Home/Home'
import ProductList from '../Atoms/Product/List/ProductList'
import ProductAbout from '../Atoms/Product/About/ProductAbout'
import ProductInfo from '../Atoms/Product/Info/ProductInfo'
import Foot from '../Atoms/Footer/Home/Footer'


class Homepage extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Route component={Navbar} /> 
                <Banner />  
                <ProductList /> 
                <ProductAbout />
                <ProductInfo />
                <Foot />
            </Container>
        )
    }
}

export default Homepage