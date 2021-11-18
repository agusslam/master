import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import { connect } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { loginUserAPI } from '../../Actions/auth';

import Button from '../Atoms/Button'

import NavBarYellow from '../Atoms/Navbar/navbar_login'

import loginProf from '../../Assets/images/loginprof.png'

import '../../Assets/CSS/style.contlogin.css'

class Login extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value
        })
    }

    handleLogin = async () => {
        const { username, password } = this.state
        const resLogin = await this.props.loginAPI({ username, password }).catch(err => err)
        if (resLogin) {
            this.props.navigate('/')
            window.location.reload()
            // console.log(resLogin)
        } else {
            window.location.reload()
        }
    }

    render() {
        if (this.props.isLogin) {
            // this.props.navigate('/register')
            // <Redirect to="/profile" />
            window.location.href = '/';
        }
        return (
            <Container fluid id="main-component">
                <NavBarYellow />
            </Container>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rootReducer.isLoading,
    userData: state.rootReducer.user,
    isLogin: state.rootReducer.isLoggedIn
})

const mapsDispatchToProps = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate} />
}


export default connect(mapsStateToProps, mapsDispatchToProps)(WithNavigate)