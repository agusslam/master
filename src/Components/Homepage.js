import React from 'react'
import Navbar from './Navbar/HomeNavbar'
// import Login from './Product/LoginPage'
import { Container } from 'react-bootstrap'
import Banner from './Banner/HomeBanner'
import ProductList from './Product/HomeProduct'
import ProductAbout from './Product/HomeAbout'
import ProductInfo from './Product/HomeInfo'
import Footer from './Footer/HomeFooter'
import '../Assets/style.css'

class Homepage extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />
                <Banner />
                {/* <Login /> */}
                <ProductList /> 
                <ProductAbout />
                <ProductInfo />
                <Footer />
            </Container>
        )
    }
}

export default Homepage