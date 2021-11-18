import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import loginPro from '../../Assets/images/loginprof.png'

import { connect } from 'react-redux'
import { loginUserAPI } from '../../Actions/auth';
import Button from '../../Components/Atoms/Button'


class SignIn extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value ,
            [e.target.id]: e.target.value
        })
    }

    handleSignIn = async () => {
        const {username, password} = this.state 
        const resLogin = await this.props.loginAPI({username, password}).catch(err => err)
        if(resLogin){
            if(resLogin.role === 'admin'){
                window.location.href = '/dashboardadmin'
            }else {
                window.location.href = '/dashboardmember'
            }
            // this.props.navigate('/')
            // window.location.reload()
            // console.log(resLogin)
        }else {
            alert("Wrong User Or Password")
            window.location.reload()
        }
    }   

    render() {
        if (this.props.isLogin){
            if(this.props.Role === 'admin'){
                window.location.href = '/dashboardadmin';
                // console.log(this.props.Role)
            }else {
                window.location.href = '/dashboardmember';
                console.log(this.props)
            }            
        }

        return (
            <Container fluid id="#main-component" style={{
                backgroundImage: `url(${require('../../Assets/images/bgsign.png').default})`
            , backgroundSize: 'cover'}}>
                <Row className="bg-sign">
                    <Col md="12" className="wrap-login">
                        <Row className="wrap-box2">
                            <Col md="8"></Col>
                            <Col md="4"><h1 className="title-signup">Sign In</h1></Col>
                        </Row>
                        <Row className="wrap-box2">
                            <Col md="8" className="box-left"><img className="img-log2" src={loginPro} alt="login-pro" /></Col>
                            <Col md="4">
                                <Row>
                                    <Col md="12">
                                        <Row>
                                            <Col md="4"><hr className="style-hr-1" /></Col>
                                            <Col md="4"><p className="style-text">or Sign in with Email</p></Col>
                                            <Col md="4"><hr className="style-hr-1" /></Col>
                                        </Row>
                                    </Col>
                                    <Col md="12" className="style-inp-login">
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
                                    <Col md="12">
                                        <Row>
                                            <Col md="6" className="style-keep"><p>Keep me logged In</p></Col>
                                            <Col md="6" className="style-forgot"><p>Forgot Password</p></Col>
                                        </Row>
                                    </Col>
                                    <Col md="12" className="style-but">
                                        {<Button className="btn-signin" onClick={this.handleSignIn} title={'Sign In'} loading={this.props.isLoading} />}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rootReducer.isLoading,
    userData: state.rootReducer.user,
    isLogin: state.rootReducer.isLoggedIn,
    Role: state.rootReducer.akses,
})

const mapsDispatchToProps = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})


export default connect(mapsStateToProps, mapsDispatchToProps)(SignIn)