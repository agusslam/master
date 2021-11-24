import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Cookies from 'universal-cookie'

import { connect } from 'react-redux'

import Spin from '../Atoms/Spinner'
import Button from '../../Components/Atoms/Button/Next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

// import FontAwesomeIcon from '../../Components/Atoms/Additional/Centang'
import Lingkaran from '../../Components/Atoms/Additional/Circle'
import Panjang from '../../Components/Atoms/Additional/Panjang'


// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { getRumah } from '../../Actions/kpr'

const cookies = new Cookies()

class Dashuser extends React.Component {
    componentDidMount() {
        this.props.getListRumah()
        if (cookies.get('_sel')) {
            this.props.nextAction()
        }
        // console.log(this.props.isState)
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
        window.location.href = '/dashboardmember/uploadform'
    }

    render() {
        return (
            <Container fluid id="#main-component">
                <Row className="bg-sign">
                    <Col md="12" className="wrap-dash">
                        <Row className="wrap-box2-head" style={{
                            backgroundImage: `url(${require('../../Assets/images/headdash.png').default})`
                            , backgroundSize: 'cover'
                        }}>
                        </Row>
                        <Row>
                            <Col md="12" className="wrap-step">
                                <Lingkaran className="lingkaran" aktif={this.props.circleS1}><h1 className="text-step">1</h1></Lingkaran><Panjang className="persegipanjang" aktif2={this.props.panjangS1} />
                                <div className="lingkaran-grey"><h1 className="text-step-grey">2</h1></div><div className="persegipanjang-grey"></div>
                            </Col>
                        </Row>
                        <Row className="list-rumah">
                            {<Spin loading={this.props.isLoading} />}
                            {
                                this.props.listKPR ?
                                    this.props.listKPR.result.map((item, index) => {
                                        return (
                                            <Col md="4" key={index} onClick={() => this.ClickImages(item._id)}>
                                                <Row className="centang">
                                                    <Col md="12" style={{display: 'none'}} id={`idcent${item._id}` } className="ceklisrumah" ><FontAwesomeIcon icon={faCheckCircle} size='3x'></FontAwesomeIcon></Col>
                                                </Row>
                                                <Row className="wrap-list-rumah">
                                                    <Col md="12" className="img-rumah" style={{
                                                        backgroundImage: `url(${require('../../Assets/images/upload_rumah/' + item.image + '').default})`
                                                        , backgroundSize: 'cover'
                                                    }}></Col>
                                                    <Col md="12">
                                                        <h5>{item.namarumah}</h5>
                                                        <p>Lokasi : {item.lokasi}</p>
                                                        <p>Tipe : {item.tipe}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        )
                                    }) : null
                            }
                        </Row>
                        <Row>
                            <Col md="12">
                                {<Button className="btn-next" title={'Next'} isNext={this.props.isFill} onClick={this.handleNext}/>}
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
    panjangS1: state.rumahReducer.persegiStep1
})

const mapsDispatchToProps = (dispatch) => {
    return {
        getListRumah: () => dispatch(getRumah()),
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        centangAction: () => dispatch({ type: 'CHANGE_CHECK', value: true }),
        step1Action: () => dispatch({ type: 'CHANGE_STEP1', value: true })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Dashuser)