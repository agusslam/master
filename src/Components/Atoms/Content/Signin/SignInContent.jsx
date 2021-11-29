import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

import '../Signin/SignInContent.css'
import loginPro from '../../../../Assets/Images/loginprof.png'

import { connect } from 'react-redux'
import { loginUserAPI } from '../../../../Actions/auth';
import Button from '../../Button/Sign.jsx'


class SignIn extends React.Component {

    state = {
        username: '',
        password: '',
    }

    componentDidMount(){
        console.log(this.props.stateIs)
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
        console.log(resLogin)
        if(resLogin.status === 200){
            if(resLogin.role === 'admin'){
                window.location.href = '/dashboardadmin'
            }else {
                window.location.href = '/dashboardmember'
            }
        }else {
            alert("Wrong User Or Password")
            window.location.reload()
        }
    }   

    render() {
        if (this.props.isLogin){
            if(this.props.Role === 'admin'){
                window.location.href = '/dashboardadmin';
            }else {
                window.location.href = '/dashboardmember';
                console.log(this.props)
            }            
        }

        return (
            <Container fluid={true} className="p-0" style={{
                backgroundImage: `url(${require('../../../../Assets/Images/bgsign.png').default})`
            , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
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
                                        {<Button className="btn-submit" onClick={this.handleSignIn} title={'Sign In'} loading={this.props.isLoading} />}
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

const mapsStateToProps = (state) => {
    return {
        isLoading: state.rootReducer.isLoading,
        userData: state.rootReducer.user,
        isLogin: state.rootReducer.isLoggedIn,
        Role: state.rootReducer.akses,
        stateIs: state
    }    
}

const mapsDispatchToProps = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(mapsStateToProps, mapsDispatchToProps)(SignIn)