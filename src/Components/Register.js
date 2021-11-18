import React from 'react'
import { Form, Container, Col, Row } from 'react-bootstrap'

import {connect} from 'react-redux'

import {registerUserAPI} from '../Actions/auth'

import Button from '../Components/Atoms/Button'

class Register extends React.Component {

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
            console.log(resRegister)
        }else {
            window.location.reload()
        }
    }

    render() {
        return (
                <Container fluid>
                    <Row className="wrapper-sign">
                        <Col md="12">
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={this.handleChangeText}
                                id="username"
                            >
                            </Form.Control>
                        </Col>
                        <Col md="12">
                            <Form.Control
                                type="password"
                                placeholder="password"
                                name="password"
                                onChange={this.handleChangeText}
                                id="password"
                            >
                            </Form.Control>
                        </Col>
                        <Col md="12">
                            <Form.Control
                                type="text"
                                placeholder="nama lengkap"
                                name="nama"
                                onChange={this.handleChangeText}
                                id="nama"
                            >
                            </Form.Control>
                        </Col>
                        <Col md="12">
                            <Form.Control
                                type="text"
                                placeholder="email"
                                name="email"
                                onChange={this.handleChangeText}
                                id="email"
                            >
                            </Form.Control>
                        </Col>
                        <Col md="12">
                            <Form.Control
                                type="text"
                                placeholder="phone number"
                                name="phone"
                                onChange={this.handleChangeText}
                                id="phone"
                            >
                            </Form.Control>
                        </Col>                        
                        <Col md="12">
                            <Button type="btn-submit" onClick={this.handleRegister} title={'Register'} loading={this.props.isLoading}>Register</Button>
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


export default connect(mapsStateToProps, mapsDispatchToProps)(Register)