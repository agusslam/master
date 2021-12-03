import React from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import '../Modals/Profile.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import thumbnail from '../../../Assets/Images/thumnail.png'
import { getDebtInfo, logout } from '../../../Actions/auth'

class modalAlert extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
    }

    handleClose = async () => {
        this.props.setCloseDialog()
    }

    handleLogout = () => {
        this.props.logoutAct()
    }

    componentDidMount() {
        this.props.infoUser()
        // console.log(this.props.infoProfile)
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.isOpenDialog}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    dialogClassName="custom-dialog"
                >
                    <Row>
                        <Col md="12" className="times-style"><FontAwesomeIcon icon={faTimesCircle} size="3x" onClick={this.handleClose} className="style-cursor"/></Col>
                        <Col md="12" className="prof-2">
                            <Row>
                                <Col md="3"><img className="thumbnail-image-prof"
                                    src={thumbnail}
                                    alt="user pic"
                                /></Col>
                                <Col md="9" className="title-name"><h5>{this.props.infoProfile ? this.props.infoProfile.result.nama : null}</h5></Col>
                            </Row>
                        </Col>
                        <Col md="12" className="detail-prof">
                            <Row>
                                <Col md="2"><h5>Nama</h5></Col>
                                <Col md="1"><h5>:</h5></Col>
                                <Col md="9"><h5>{this.props.infoProfile ? this.props.infoProfile.result.nama : null}</h5></Col>
                            </Row>
                            <Row>
                                <Col md="2"><h5>Email</h5></Col>
                                <Col md="1"><h5>:</h5></Col>
                                <Col md="9"><h5>{this.props.infoProfile ? this.props.infoProfile.result.email : null}</h5></Col>
                            </Row>
                            <Row>
                                <Col md="2"><h5>Phone</h5></Col>
                                <Col md="1"><h5>:</h5></Col>
                                <Col md="9"><h5>{this.props.infoProfile ? this.props.infoProfile.result.phone : null}</h5></Col>
                            </Row>
                        </Col>
                        <Col md="12" className="wrap-btn-prof">
                            <Button className="btn-profile">Ubah Profile</Button>
                        </Col>
                        <Col md="12" className="wrap-btn-prof2">
                            <Button className="btn-profile" onClick={this.handleLogout}>Keluar</Button>
                        </Col>
                    </Row>
                </Modal>
            </>
        )
    }
}

const mapsStateToProps = (state) => ({
    isOpenDialog: state.modalReducer.openDialog,
    infoProfile: state.rootReducer.infoDebi
})

const mapsDispatchToProps = (dispatch) => {
    return {
        setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false }),
        infoUser: () => dispatch(getDebtInfo()),
        logoutAct: () => dispatch(logout())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(modalAlert)




