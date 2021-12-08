import React from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import '../Modals/AlertRedirect.css'
import { connect } from 'react-redux'

class modalAlertRedi extends React.Component {

    handleClose = async () => {
        this.props.setCloseDialogRedi()
        window.location.href = '/signin'
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.isOpenDialogRedi}
                    onHide={this.handleRedi}
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
                                    <Button className="btn-ok-confirm" onClick={this.handleRedi}>OK</Button>
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
    isOpenDialog3: state.modalReducer.openDialog3
})

const mapsDispatchToProps = (dispatch) => {
    return {
        setCloseDialogRedi: () => dispatch({ type: 'CHANGE_DIALOG_REDI', value: false })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(modalAlertRedi)




