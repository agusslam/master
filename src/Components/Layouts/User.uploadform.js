import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Cookies from 'universal-cookie'

import { connect } from 'react-redux'

import Spin from '../Atoms/Spinner'
import Button from '../../Components/Atoms/Button/Next'

// import FontAwesomeIcon from '../../Components/Atoms/Additional/Centang'
import Lingkaran from '../../Components/Atoms/Additional/Circle'
import Lingkaran2 from '../../Components/Atoms/Additional/Circle2'

import Panjang from '../../Components/Atoms/Additional/Panjang'

import { getRumah } from '../../Actions/kpr'
import formKPR from '../../Assets/Form/FORM_KPR001.pdf'

import { Uploadfkpr } from '../../Actions/kpr'

const cookies = new Cookies()


class DashuserUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage = async (ev) => {
        ev.preventDefault();

        const data = new FormData();
        let btnImg = document.querySelector('#formFile')
        let formkpr = btnImg.files[0]
        
        data.append('image', formkpr)

        const resUpload = await this.props.uploadFKPR(data).catch(err => err)
        console.log(resUpload)
        if(resUpload){
            // console.log(resUpload)
            cookies.set('_fkpr', resUpload.fileName)
            cookies.set('_step2', true)
            this.props.next2Action()
            this.props.step2Action()
        }else { alert("Somethink Error") }
    }

    componentDidMount() {
        console.log(this.props.isState)
    }

    handleNext = () => {
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
                                <Lingkaran2 className="lingkaran" aktif={this.props.circleS2}><h1 className="text-step">2</h1></Lingkaran2><Panjang className="persegipanjang" aktif2={this.props.panjangS2} />
                            </Col>
                        </Row>
                        <Row className="wrap-formuploadkpr">
                            <Col md="12">
                                <p>1. Silahkan Download Form permohonan kredit KPR berikut : <a href={formKPR} download="FORM_KPR"> Form KPR KB Bukopin </a> </p>
                            </Col>
                            <Col md="12">
                                <p>2. Mohon untuk mengisi Form permohonan yang sudah di download</p>
                            </Col>
                            <Col md="12">
                                <p>3. Upload Form Permohonan KPR yang sudah diisi :</p>
                            </Col>
                            <Col md="6">
                                <form>
                                    <div>
                                        <input type="file" id="formFile" />
                                    </div>
                                    <br />
                                    <div>
                                        <button onClick={this.handleUploadImage}>Upload</button>
                                    </div>
                                </form>
                            </Col>
                            <Col md="6">
                                {<Spin loading={this.props.isLoading} />}
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                {<Button className="btn-next" title={'Next'} isNext={this.props.isFill} onClick={this.handleNext} />}
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
    isFill: state.rumahReducer.isFil2,
    isCent: state.rumahReducer.isCentang,
    isState: state.rumahReducer,
    circleS1: state.rumahReducer.circleStep1,
    panjangS1: state.rumahReducer.persegiStep1,
    circleS2: state.rumahReducer.circleStep2,
    panjangS2: state.rumahReducer.persegiStep2,
})

const mapsDispatchToProps = (dispatch) => {
    return {
        getListRumah: () => dispatch(getRumah()),
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        centangAction: () => dispatch({ type: 'CHANGE_CHECK', value: true }),
        step1Action: () => dispatch({ type: 'CHANGE_STEP1', value: true }),
        uploadFKPR: (data) => dispatch(Uploadfkpr(data)),
        next2Action: () => dispatch({ type: 'CHANGE_NEXT2', value: true }),
        step2Action: () => dispatch({ type: 'CHANGE_STEP2', value: true }),
}}

export default connect(mapsStateToProps, mapsDispatchToProps)(DashuserUploadForm)