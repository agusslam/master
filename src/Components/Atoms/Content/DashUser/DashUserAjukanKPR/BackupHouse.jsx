import React from 'react'

import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import ModalDialog from '../../../Modals/Alert'

import { Route } from 'react-router-dom'
import Cookies from 'universal-cookie'

import { connect } from 'react-redux'

import Spin from '../../../Spinner/index'
import ButtonNext from '../../../Button/Next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Sidemenu from '../../../Sidemenu/index'

import { getRumah, getInfo } from '../../../../../Actions/kpr'

import Lingkaran from '../../../Circle/Circle'
import Lingkaran2 from '../../../Circle/Circle2'
import Lingkaran3 from '../../../Circle/Circle3'
import Lingkaran4 from '../../../Circle/Circle4'

import Panjang from '../../../Panjang/Panjang'
import Panjang2 from '../../../Panjang/Panjang2'
import Panjang3 from '../../../Panjang/Panjang3'

import '../DashUserAjukanKPR/PilihHouse.css'

const cookies = new Cookies()

class UserAjukan1 extends React.Component {
    componentDidMount() {
        this.props.getinfo()
        this.props.getListRumah()
        console.log(this.props.isDebitur)
    }

    // componentDidUpdate(){
    //     if (this.props.isDebitur) {
    //         window.location.href = '/dashboardmember'
    //     }
    // }

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
                                    <Col md="12">
                                        {/* <InputGroup className="mb-3 inpt-searc">
                                                <FormControl
                                                    placeholder="Recipient's username"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <Button variant="outline-secondary" id="button-addon2">
                                                    Button
                                                </Button>
                                            </InputGroup> */}
                                    </Col>
                                    <Lingkaran md="2" className="outer" aktif={this.props.circleS1}>
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
                                    <Col md="12"><p>Silahkan Klik pada rumah yang diinginkan.</p></Col>
                                    <Col md="12" className="list-rumah">
                                        <Row>
                                            {<Spin loading={this.props.isLoading} />}
                                            {
                                                this.props.listKPR ?
                                                    this.props.listKPR.result.map((item, index) => {
                                                        return (
                                                            <Col md="4" className="block-house" key={index} onClick={() => this.ClickImages(item._id)}>
                                                                <Row className="centang">
                                                                    <Col md="12"><FontAwesomeIcon style={{ display: 'none' }} id={`idcent${item._id}`} className="cek" icon={faCheckCircle} size='3x'></FontAwesomeIcon></Col>
                                                                </Row>
                                                                <Row className="wrap-list-rumah">
                                                                    <Col md="12" className="img-rumah" style={{
                                                                        backgroundImage: "url(" + "https://apiauthv1.herokuapp.com/house/image/" + item.image + "" + ")",
                                                                        backgroundPosition: 'top',
                                                                        backgroundSize: 'cover',
                                                                        backgroundRepeat: 'no-repeat'
                                                                    }}></Col>
                                                                    <Col md="12" className="title-home">
                                                                        <h5 >{item.namarumah}</h5>
                                                                        <p className="title-dev">Alamat : {item.alamat}</p>
                                                                        <p className="harga-list">Rp {(parseFloat(item.harga)).toLocaleString()},00</p>
                                                                        <p className="title-dev">Developer : {item.developer.namadeveloper}</p>
                                                                        <p className="title-dev">Detail :</p>
                                                                        <p className="title-dev">- LT {item.luas_tanah} m2 / LB {item.luas_bangunan} m2</p>
                                                                        <p className="title-dev">- Kamar : {item.jumlah_kamar}</p>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        )
                                                    }) : null
                                            }
                                        </Row>
                                    </Col>
                                    <Col className="wrap-button-next">
                                        {<ButtonNext className="btn-next" title={'Next'} isNext={this.props.isFill} onClick={this.handleNext} />}
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
    isState: state,
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