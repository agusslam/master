import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import {connect} from 'react-redux'

import {registerUserAPI} from '../../Actions/auth'
import Button from '../../Components/Atoms/Button'

import loginPro from '../../Assets/images/register.png'

class Regis extends React.Component {

    state = {
        username: '',
        password: '',
        nama: '',
        email: '',
        phone: '',        
    }

    handleChangeText = (e) => {
        // console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value
        })
    }

    handleRegister = async () => {
        const {username, password, nama, email, phone} = this.state 
        const resRegister = await this.props.registerAPI({
            username,password, nama, email, phone
        }).catch(err => err)
        if(resRegister){
            this.setState = {
                username: '',
                password: '',
                nama: '',
                email: '',
                phone: '',        
            }
            alert("Register Sukses")
            console.log(resRegister)
        }else {
            window.location.reload()
        }
    }

    render() {
        return (
            <Container fluid id="#main-component" style={{
                backgroundImage: `url(${require('../../Assets/images/bgsign.png').default})`
            ,backgroundSize: 'cover'}}>
                <Row className="bg-sign">
                    <Col md="12" className="wrap-login">
                        <Row className="wrap-box2">
                            <Col md="8"></Col>
                            <Col md="4"><h1 className="title-signup">Sign Up</h1></Col>
                        </Row>
                        <Row className="wrap-box2">
                            <Col md="8" className="box-left"><img className="img-log" src={loginPro} alt="login-pro" /></Col>
                            <Col md="4">
                                <Form.Group className="mb-3">
                                    <Form.Label>Fullname</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        className="form-input"
                                        name="nama"
                                        onChange={this.handleChangeText}
                                        id="nama"
                                />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        className="form-input"
                                        name="username"
                                        onChange={this.handleChangeText}
                                        id="username"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        className="form-input"
                                        name="email"
                                        onChange={this.handleChangeText}
                                        id="email"
                                />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        className="form-input"
                                        name="phone"
                                        onChange={this.handleChangeText}
                                        id="phone"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        className="form-input"
                                        name="password"
                                        onChange={this.handleChangeText}
                                        id="password"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="wrap-box2">
                            <Col md="8"></Col>
                            <Col md="4"><Button className="btn-submit" onClick={this.handleRegister} title={'Register'} loading={this.props.isLoading} /></Col>
                        </Row>
                        <Row className="wrap-box2">
                            <Col md="12"></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rootReducer.isLoading
})

const mapsDispatchToProps = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(mapsStateToProps, mapsDispatchToProps)(Regis)