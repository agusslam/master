import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import jwt from 'jsonwebtoken'

import { connect } from 'react-redux'

import Spin from '../Atoms/Spinner'
import Button from '../Atoms/Button/Next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Sidemenu from '../Atoms/Sidemenu'

import { getRumah, getInfo } from '../../Actions/kpr'

import Lingkaran from '../Atoms/Additional/Circle'
import Lingkaran2 from '../Atoms/Additional/Circle2'
import Lingkaran3 from '../Atoms/Additional/Circle3'
import Lingkaran4 from '../Atoms/Additional/Circle4'

import Panjang from '../Atoms/Additional/Panjang'
import Panjang2 from '../Atoms/Additional/Panjang2'
import Panjang3 from '../Atoms/Additional/Panjang3'

const cookies = new Cookies()

class UserAjukan1 extends React.Component {
    componentDidMount() {
        this.props.getListRumah()
        if (cookies.get('_sel')) {
            this.props.nextAction()
        }
        // const resInfo = this.props.getinfo().catch(err => err)
        // if(resInfo) { 
        //     alert("Maaf anda sudah pernah mengajukan KPR")
        //     window.location.href = '/dashboardmember'
        // }else { alert("no")}
    }

    ClickImages = (e) => {
        cookies.set('_sel', e)
        // this.props.centangAction()
        document.querySelector('.ceklisrumah').style.display = 'none'
        document.querySelector(`#idcent${e}`).style.display = 'block'
        this.props.nextAction()
        cookies.set('_step1', true)
        this.props.step1Action()
    }

    handleNext = () => {
        window.location.href = '/ajukankpr/formkpr'
    }


    render() {
        return (
            <Container fluid id="bg-dashburd">
                <Row className="wrapper-dashburd">
                    <Sidemenu />
                    <Col md="9">
                        <Row className="wrapper-side-right">
                            <Col md="12">
                                <h2 className="title-dashburd">Pengajuan KPR</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right1">
                                <Row className="wrap-ajukan">
                                    <Col md="12"><h5>Form Pengajuan KPR</h5></Col>
                                    <Col md="12"><h5>Search</h5></Col>
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
                                    <Panjang2 md="2" className="segipanjang" aktif3={this.props.panjangS2} />
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
                                                            <Col md="4" key={index} onClick={() => this.ClickImages(item._id)}>
                                                                <Row className="centang">
                                                                    <Col md="12" style={{ display: 'none' }} id={`idcent${item._id}`} className="ceklisrumah" ><FontAwesomeIcon icon={faCheckCircle} size='3x'></FontAwesomeIcon></Col>
                                                                </Row>
                                                                <Row className="wrap-list-rumah">
                                                                    <Col md="12" className="img-rumah" style={{
                                                                        backgroundImage: `url(${require('../../Assets/images/upload_rumah/' + item.image + '').default})`
                                                                        , backgroundSize: 'cover'
                                                                    }}></Col>
                                                                    <Col md="12" className="title-home">
                                                                        <h5 >{item.namarumah}</h5>
                                                                        <p>Alamat : {item.alamat}</p>
                                                                        <p>Rp {item.harga},00</p>
                                                                        <p className="title-dev">Developer : {item.developer.namadeveloper}</p>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        )
                                                    }) : null
                                            }
                                        </Row>
                                    </Col>
                                    <Col className="wrap-button-next">
                                        {<Button className="btn-next" title={'Next'} isNext={this.props.isFill} onClick={this.handleNext} />}
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
    circleS4: state.rumahReducer.circleStep4
})

const mapsDispatchToProps = (dispatch) => {
    return {
        getListRumah: () => dispatch(getRumah()),
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        centangAction: () => dispatch({ type: 'CHANGE_CHECK', value: true }),
        step1Action: () => dispatch({ type: 'CHANGE_STEP1', value: true }),
        getinfo: () => dispatch(getInfo())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserAjukan1)