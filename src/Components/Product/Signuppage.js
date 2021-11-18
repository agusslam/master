import React from 'react' 
import { Form, Container, Col, Row } from 'react-bootstrap' 
import { connect } from 'react-redux' 
import { useNavigate } from 'react-router-dom' 
import { loginUserAPI } from '../Actions/auth'; 
import Button from '../Components/Atoms/Button' 
 
class Login extends React.Component { 
    state = { 
        formlogin: 0, 
        username: '', 
        password: '', 
    } 
 
    handleChangeText = (e) => { 
        this.setState({ 
            [e.target.id]: e.target.value , 
            [e.target.id]: e.target.value 
        }) 
    } 
 
    handleLogin = async () => { 
        const {username, password} = this.state  
        const resLogin = await this.props.loginAPI({username, password}).catch(err => err) 
        if(resLogin){ 
            this.props.navigate('/') 
            window.location.reload() 
        }else { 
            window.location.reload() 
        } 
    }    
 
    render() { 
        if (this.props.isLogin){ 
            // this.props.navigate('/register') 
            // <Redirect to="/profile" /> 
            window.location.href = '/'; 
        } 
        return ( 
            <Container fluid> 
                <Row className="wrapper-sign"> 
                    <h1>{this.props.userData}</h1> 
                    <Col md="12" className="input-style"> 
                        <Form.Control 
                            type="text" 
                            placeholder="username" 
                            name="username" 
                            onChange={this.handleChangeText} 
                            id="username" 
                        > 
                        </Form.Control> 
                    </Col> 
                    <Col md="12" className="input-style"> 
                        <Form.Control 
                            type="password" 
                            placeholder="password" 
                            name="password" 
                            onChange={this.handleChangeText} 
                            id="password" 
                        > 
                        </Form.Control> 
                    </Col> 
 
                    <Col md="12" className="input-style"> 
                        {<Button className="btn-submit" onClick={this.handleLogin} title={'Login'} loading={this.props.isLoading} />} 
                    </Col> 
                </Row> 
            </Container> 
        ) 
    } 
} 
 
const mapsStateToProps = (state) => ({ 
    isLoading: state.isLoading, 
    userData: state.user, 
    isLogin: state.isLoggedIn 
}) 
 
const mapsDispatchToProps = (dispatch) => ({ 
    loginAPI: (data) => dispatch(loginUserAPI(data)) 
}) 
 
function WithNavigate(props) { 
    let navigate = useNavigate(); 
    return <Login {...props} navigate={navigate} /> 
} 
 
export default connect(mapsStateToProps, mapsDispatchToProps)(WithNavigate)