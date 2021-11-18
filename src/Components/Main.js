import React from 'react'
// import Navbar from './Navbar/Navbar'
// import Login from '../Container/LoginPage'
import { Container } from 'react-bootstrap'
import HomeBanner from './Banner/HomeBanner'
// import ProductList from './Product/ProductList'
import Footer from './Footer/HomeFooter'
import '../Assets/style.css'

class Main extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                {/* <Navbar /> */}
                <HomeBanner />
                <Footer />               
            </Container>
        )
    }
}

export default Main