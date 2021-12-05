import React from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import '../Modals/Alert.css'
import { connect } from 'react-redux'

class modalAlert extends React.Component {

    handleClose = async () => {
        this.props.setCloseDialog()
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.isOpenDialog}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Row className="Head-Dialog">
                        <Col md="12"></Col>                        
                    </Row>
                    <Row>
                        <Col md="1" className="left-dialog"></Col>
                        <Col md="10">
                            <Row>
                                <Col md="12" className="title-alert-maaf">
                                {this.props.title}
                                </Col>
                                <Col md="12" className="button-confirm">
                                    <Button className="btn-ok-confirm" onClick={this.handleClose}>OK</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="1" className="right-dialog"></Col>
                    </Row>
                    <Row className="foot-dialog">
                        <Col md="12"></Col>
                    </Row>
                    
                </Modal>
            </>
        )
    }
}

const mapsStateToProps = (state) => ({
    isOpenDialog: state.modalReducer.openDialog
})

const mapsDispatchToProps = (dispatch) => {
    return {
        setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(modalAlert)




