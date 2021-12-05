import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

import '../Signin/SignInContent.css'
import loginPro from '../../../../Assets/Images/loginprof.png'
import logoGoogle from '../../../../Assets/Images/google.png'
import logoTweet from '../../../../Assets/Images/twitter.png'
import logoFace from '../../../../Assets/Images/facebook.png'

import { connect } from 'react-redux'
import { loginUserAPI } from '../../../../Actions/auth';
import Button from '../../Button/Sign.jsx'

import ModalDialog from '../../Modals/Alert'


class SignIn extends React.Component {

    state = {
        username: '',
        password: '',
    }

    componentDidMount() {
        // console.log(this.props.stateIs)
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value
        })
    }

    handleSignIn = async () => {
        const { username, password } = this.state
        if (!username) {
            this.props.setDialog()
            this.props.setTextDialog('Username wajib diisi')
        } else if (!password) {
            this.props.setDialog()
            this.props.setTextDialog('Password wajib diisi')
        } else {
            const resLogin = await this.props.loginAPI({ username, password }).catch(err => err)
            // console.log(resLogin)
            if (resLogin.status === 200) {
                if (resLogin.role === 'admin') {
                    window.location.href = '/dashboardadmin'
                } else {
                    window.location.href = '/dashboardmember'
                }
            } else {
                this.props.setDialog()
                this.props.setTextDialog('Username / Password Salah')
                this.props.changeLod()
            }
        }

    }

    render() {
        if (this.props.isLogin) {
            if (this.props.Role === 'admin') {
                window.location.href = '/dashboardadmin';
            } else {
                window.location.href = '/dashboardmember';
                // console.log(this.props)
            }
        }

        return (
            <Container fluid={true} style={{
                backgroundImage: `url(${require('../../../../Assets/Images/bgsign.png').default})`
                , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
            }}>
                <Row className="bg-sign">
                    <ModalDialog show={this.props.isOpenDialog} onHide={this.handleClose} title={this.props.titleD} />
                    <Col md="12" className="wrap-login">
                        <Row className="wrap-box2">
                            <Col md="8"></Col>
                            <Col md="4"><h1 className="title-signup">Sign In</h1></Col>
                            <Col md="8"></Col>
                            <Col md="4" className="wrap-logo-brand">
                                <Row>
                                    <Col md="4" className="wrap-bg-logo"><a href="https://account.google.com"><img className="img-logo-brand" src={logoGoogle} alt="login-pro" /></a></Col>
                                    <Col md="4" className="wrap-bg-logo"><a href="https://www.facebook.com"><img className="img-logo-brand" src={logoFace} alt="login-pro" /></a></Col>
                                    <Col md="4" className="wrap-bg-logo"><a href="https://twitter.com"><img className="img-logo-brand" src={logoTweet} alt="login-pro" /></a></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="wrap-box-sign">
                            <Col md="8" className="box-left"><img className="img-log2" src={loginPro} alt="login-pro" /></Col>
                            <Col md="4">
                                <Row>
                                    <Col md="12">
                                        <Row>
                                            <Col md="3"><hr className="style-hr-1" /></Col>
                                            <Col md="6"><p className="style-text">or Sign in with Email</p></Col>
                                            <Col md="3"><hr className="style-hr-1" /></Col>
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
                                                placeholder="Masukkan username"
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
                                                placeholder="Masukkan password "
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md="12">
                                        <Row>
                                            <Col md="6" className="style-keep"><Form.Check type="checkbox" label="Tetap Masuk" /></Col>
                                            <Col md="6" className="style-forgot"><p>Lupa Password</p></Col>
                                        </Row>
                                    </Col>
                                    <Col md="12" className="style-but">
                                        {<Button className="btn-submit" onClick={this.handleSignIn} title={'Sign In'} loading={this.props.isLoading} />}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="wrap-box2">
                            <Col md="8"></Col>
                            <Col md="4"><hr className="style-hr-1" /></Col>
                            <Col md="8"></Col>
                            <Col md="4" className="style-don"><p>Belum memiliki akun ? <a href="/signup" className="style-signu">Daftar</a></p></Col>
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
        isOpenDialog: state.modalReducer.openDialog,
        titleD: state.modalReducer.titleAlert
    }
}

const mapsDispatchToProps = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data)),
    setDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: true }),
    setTextDialog: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
    setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false }),
    changeLod: () => dispatch({ type: 'CHANGE_LOADING', value: false })
})

export default connect(mapsStateToProps, mapsDispatchToProps)(SignIn)