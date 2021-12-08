import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import Validator from 'validator'
import '../Signup/SignupContent.css'
import { registerUserAPI } from '../../../../Actions/auth'
import Button from '../../../Atoms/Button/Sign'
import ModalDialog from '../../Modals/Alert'
import loginPro from '../../../../Assets/Images/register.png'

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
        const { username, password, nama, email, phone } = this.state
        const regx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.,])(?=.{8,})")
        const isOK = regx.test(password)
        if (!nama) {
            this.props.setDialog()
            this.props.setTextDialog('Nama lengkap wajib diisi')
        } else if (!username) {
            this.props.setDialog()
            this.props.setTextDialog('Nama Pengguna wajib diisi')
        } else if (!email) {
            this.props.setDialog()
            this.props.setTextDialog('Email wajib diisi')
        } else if (Validator.isEmail(email) === false) {
            this.props.setDialog()
            this.props.setTextDialog('Email tidak valid')
        } else if (!phone) {
            this.props.setDialog()
            this.props.setTextDialog('Telepon wajib diisi')
        } else if (Validator.isMobilePhone(phone) === false) {
            this.props.setDialog()
            this.props.setTextDialog('Telepon tidak valid')
        } else if (!password) {
            this.props.setDialog()
            this.props.setTextDialog('Sandi wajib diisi')
        } else if (!isOK) {
            this.props.setDialog()
            this.props.setTextDialog('Sandi wajib terdiri dari huruf Besar, kecil, angka dan (!@#.,)')
        } else {
            const resRegister = await this.props.registerAPI({
                username, password, nama, email, phone
            }).catch(err => err)
            if (resRegister.status === 200) {
                this.props.setDialog()
                this.props.setTextDialog('Registrasi Berhasil')                 
                window.location.href = '/signin'
            } else {
                this.props.setDialog()
                this.props.setTextDialog('Registrasi Gagal')
                window.location.href = '/register'
            }
        }

    }

    render() {
        return (
            <Container fluid style={{
                backgroundImage: `url(${require('../../../../Assets/Images/bgsign.png').default})`
                , backgroundSize: 'cover'
            }}>
                <Row className="bg-sign">
                    <ModalDialog show={this.props.isOpenDialog} onHide={this.handleClose} title={this.props.titleD} />
                    <Col md="12" className="wrap-signup">
                        <Row className="wrap-box-signup">
                            <Col md="8"></Col>
                            <Col md="4"><h1 className="title-signup">Daftar</h1></Col>
                        </Row>
                        <Row className="wrap-box-signup">
                            <Col md="8" className="box-left-signup"><img className="img-log" src={loginPro} alt="login-pro" /></Col>
                            <Col md="4">
                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="form-input"
                                        name="nama"
                                        onChange={this.handleChangeText}
                                        id="nama"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Pengguna</Form.Label>
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
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="form-input"
                                        name="email"
                                        onChange={this.handleChangeText}
                                        id="email"
                                        placeholder="Masukkan email"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Telepon</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="form-input"
                                        name="phone"
                                        onChange={this.handleChangeText}
                                        id="phone"
                                        placeholder="Masukkan nomor telepon"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sandi</Form.Label>
                                    <Form.Control
                                        type="password"
                                        className="form-input"
                                        name="password"
                                        onChange={this.handleChangeText}
                                        id="password"
                                        placeholder="Masukkan Password"
                                    />
                                </Form.Group>
                                <Button className="btn-submit" onClick={this.handleRegister} title={'Daftar'} loading={this.props.isLoading} />
                            </Col>
                        </Row>
                        <Row className="wrap-box-signup">
                            <Col md="12"></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rootReducer.isLoading,
    isOpenDialog: state.modalReducer.openDialog,
    titleD: state.modalReducer.titleAlert
})

const mapsDispatchToProps = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data)),
    setDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: true }),
    setTextDialog: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
    setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false }),
    changeLoad: () => dispatch({ type: 'CHANGE_LOADING', value: false }),
    setDialog3: () => dispatch({ type: 'CHANGE_DIALOG_REDI', value: true }),
    setTextDialog3: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG3', value: data }),
})

export default connect(mapsStateToProps, mapsDispatchToProps)(Regis)