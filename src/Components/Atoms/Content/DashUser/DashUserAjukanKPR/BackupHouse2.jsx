import React from 'react'

import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import ModalDialog from '../../../Modals/Alert'

import { Route } from 'react-router-dom'
import Cookies from 'universal-cookie'

import { connect } from 'react-redux'

import ButtonNext from '../../../Button/Next'
import Spin from '../../../Spinner/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Sidemenu from '../../../Sidemenu/index'

import { getRumah, getInfo } from '../../../../../Actions/kpr'

import Lingkaran from '../../../Circle/Circle'
import Lingkaran2 from '../../../Circle/Circle2'
import Lingkaran3 from '../../../Circle/Circle3'
import Lingkaran4 from '../../../Circle/Circle4'

import Panjang from '../../../Panjang/Panjang'
import Panjang2 from '../../../Panjang/Panjang2'
import Panjang3 from '../../../Panjang/Panjang3'
import PagingHouse from '../DashUserAjukanKPR/PagingSearchHouse'
import '../DashUserAjukanKPR/PilihHouse.css'

const cookies = new Cookies()
// const API_URL_IMG = "https://apiauthv1.herokuapp.com/house/image/"
// const API_URL_IMG = "http://localhost:8008/house/image/"

class UserAjukan1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            data: [],
            perPage: 2,
            currentPage: 0
        }
    }

    componentDidMount() {
        // this.props.getinfo()
        // this.props.getListRumah()

        // const data = this.props.listKPR
        // console.log(data)
        // this.receivedData()
        console.log(this.props.isState)

    }

    ClickImages = (e) => {
        let cekHijau = document.querySelectorAll('.cek')
        for (let i = 0; i < cekHijau.length; i++) {
            cekHijau[i].style.display = 'none'
        }
        document.querySelector(`#idcent${e}`).style.display = 'block'
        cookies.set('_sel', e)
        this.props.nextAction()
        cookies.set('_step1', true)
        this.props.step1Action()
    }

    handleNext = () => {
        window.location.href = '/ajukankpr/formkpr'
    }


    render() {
        return (
            <Container fluid={true} id="bg-dashburd" style={{
                backgroundImage: `url(${require('../../../../../Assets/Images/bgdashboard.png').default})`
                , backgroundSize: 'cover'
            }}>
                <Row className="wrapper-dashburd">
                    <Route component={Sidemenu} />
                    <ModalDialog show={this.props.isOpenDialog} onHide={this.handleClose} title={this.props.titleD} />
                    <Col md="9">
                        <Row className="wrapper-side-right">
                            <Col md="12">
                                <h2 className="title-dashburd">Pengajuan KPR</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right1">
                                <Row className="wrap-ajukan">
                                    <Col md="12"><h5>Form Pengajuan KPR</h5></Col>
                                    <Col md="8" className="wrap-step">
                                        <Lingkaran aktif={this.props.circleS1} />
                                        <Panjang md="2" aktif2={this.props.panjangS1} />
                                        <Lingkaran2 aktif={this.props.circleS2} />
                                        <Panjang2 md="2" aktif2={this.props.panjangS2} /> 
                                        <Lingkaran3 aktif={this.props.circleS3} />
                                        <Panjang3 md="2" aktif2={this.props.panjangS3} /> 
                                        <Lingkaran4 aktif={this.props.circleS4} />
                                        {/* <div className="numberCircle"><p>1</p></div>
                                        <div className="garis-grey"></div>
                                        <div className="numberCircle"><p>2</p></div>
                                        <div className="garis-grey"></div>
                                        <div className="numberCircle"><p>3</p></div>
                                        <div className="garis-grey"></div>
                                        <div className="numberCircle"><p>4</p></div> */}
                                    </Col>
                                    <Col md="4" className="wrap-search">
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="masukkan lokasi rumah"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                onChange={this.handleChangeTextSearch}
                                                id="key"
                                                className="style-input-search"
                                            />
                                            <Button variant="outline-secondary" className="style-btn-search" id="button-addon2" onClick={() => this.ClickSearch()}>
                                            <FontAwesomeIcon icon={faSearch} />
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                    {/* <Lingkaran md="2" className="outer" aktif={this.props.circleS1}>
                                        <Row className="inner">
                                            <Col md="12" className="step-angka"><h1>1</h1></Col>
                                        </Row>
                                    </Lingkaran>
                                    <Panjang md="2" className="segipanjang" aktif2={this.props.panjangS1}></Panjang>
                                    <Lingkaran2 md="2" className="outer" aktif={this.props.circleS2}>
                                        <Row className="inner">
                                            <Col md="12" className="step-angka"><h1>2</h1></Col>
                                        </Row>
                                    </Lingkaran2>
                                    <Panjang2 md="2" className="segipanjang" aktif2={this.props.panjangS2} />
                                    <Lingkaran3 md="2" className="outer" aktif={this.props.circleS3}>
                                        <Row className="inner">
                                            <Col md="12" className="step-angka"><h1>3</h1></Col>
                                        </Row>
                                    </Lingkaran3>
                                    <Panjang3 md="2" className="segipanjang" aktif2={this.props.panjangS3}></Panjang3>
                                    <Lingkaran4 md="2" className="outer" aktif={this.props.circleS4}>
                                        <Row className="inner">
                                            <Col md="12" className="step-angka"><h1>4</h1></Col>
                                        </Row>
                                    </Lingkaran4>
                                    <Col md="3">
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="masukkan lokasi rumah"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                onChange={this.handleChangeTextSearch}
                                                id="key"
                                                className="style-input-search"
                                            />
                                            <Button variant="outline-secondary" className="style-btn-search" id="button-addon2" onClick={() => this.ClickSearch()}>
                                                B
                                            </Button>
                                        </InputGroup>
                                    </Col> */}
                                    <Col md="12"><p>Silahkan Klik pada rumah yang diinginkan.</p></Col>
                                    {/* <Col md="12" className="list-rumah"> */}
                                    {<Spin loading={this.props.isLoading} />}
                                    <PagingHouse />
                                    {/* </Col> */}
                                    <Col className="wrap-button-next">
                                        {<ButtonNext className="btn-next" title={'Lanjut'} isNext={this.props.isFill} onClick={this.handleNext} />}
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="12" className="wrapper-side-right2">

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rumahReducer.isLoading,
    listKPR: state.rumahReducer.listRum,
    isFill: state.rumahReducer.isFil,
    isCent: state.rumahReducer.isCentang,
    isState: state.rumahReducer,
    circleS1: state.rumahReducer.circleStep1,
    panjangS1: state.rumahReducer.persegiStep1,
    circleS2: state.rumahReducer.circleStep2,
    panjangS2: state.rumahReducer.persegiStep2,
    circleS3: state.rumahReducer.circleStep3,
    panjangS3: state.rumahReducer.persegiStep3,
    circleS4: state.rumahReducer.circleStep4,
    isDebitur: state.rumahReducer.infoDebitur,
    isOpenDialog: state.modalReducer.openDialog,
    titleD: state.modalReducer.titleAlert,
})

const mapsDispatchToProps = (dispatch) => {
    return {
        getListRumah: () => dispatch(getRumah()),
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        step1Action: () => dispatch({ type: 'CHANGE_STEP1', value: true }),
        getinfo: () => dispatch(getInfo()),
        setDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: true }),
        setTextDialog: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
        setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false }),
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserAjukan1)