import React from 'react'
import Navbar from './Atoms/Navbar/navbar_login'
import { Container } from 'react-bootstrap'
import Banner from './Atoms/Banner/banner.home'
import ProductList from './Atoms/Productlist/produclist.home'
import ProductAbout from './Atoms/About/about.home'
import ProductInfo from './Atoms/Productlist/product.info'
import Foot from './Atoms/Footer/footer.login'


class Homepage extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />
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