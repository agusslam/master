import React from 'react'

import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import '../DashUserSimulasi/DashSimulasi.css'
import { Route } from 'react-router-dom'
import Cookies from 'universal-cookie'

import { connect } from 'react-redux'

import Spin from '../../../Spinner/index'
import ButtonNext from '../../../Button/Next'

import Sidemenu from '../../../Sidemenu/index'

import '../DashUserSimulasi/DashSimulasi.css'

class UserSimulasi extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            harga:'',
            rate:'',
            uangmuka:'',
            angsuran120: ''
        }
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value ,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
        })
    }

    ClickHitung = (e) => {
        const {harga, rate, uangmuka} = this.setState
        let hargaNew = Math.floor(this.state.harga)
        let rateNew = Math.floor(this.state.rate)
        let uangmukaNew = Math.floor(this.state.uangmuka)
        let rateTahun = (rateNew/100)/12
        // utk120bulan
        let power = Math.pow((rateTahun+1),120)
        let bwh = rateTahun/(1-(1/power))*(hargaNew-uangmukaNew)
        // utk60bulan
        let power2 = Math.pow((rateTahun+1),60)
        let bwh2 = rateTahun/(1-(1/power2))*(hargaNew-uangmukaNew)
        // utk180bulan
        let power3 = Math.pow((rateTahun+1),180)
        let bwh3 = rateTahun/(1-(1/power3))*(hargaNew-uangmukaNew)

        this.props.ubahAngsuran120(bwh)
        this.props.ubahAngsuran60(bwh2)
        this.props.ubahAngsuran180(bwh3)
    }

    render() {

        return (
            <Container fluid={true} id="bg-dashburd" style={{
                backgroundImage: `url(${require('../../../../../Assets/Images/bgdashboard.png').default})`
                , backgroundSize: 'cover'
            }}>
                <Row className="wrapper-dashburd">
                    <Route component={Sidemenu} />
                    <Col md="9">
                        <Row className="wrapper-side-right">
                            <Col md="12">
                                <h2 className="title-dashburd">Simulasi KPR</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right1">
                                <Row className="wrap-kalkulator">
                                    <Col md="12"><h5>Kalkulator KPR</h5></Col>
                                    <Col md="5" className="text-left-kal"><p>Harga Property</p></Col>
                                    <Col md="7" className="input-width">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                                            <FormControl
                                                placeholder="250.000.000"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                className="style-input-simul"
                                                name="harga"
                                                id="harga"
                                                onChange={this.handleChangeText}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col md="5" className="text-left-kal"><p>Bunga</p></Col>
                                    <Col md="7" className="input-width-2">
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="5"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                className="style-input-simul"
                                                name="rate"
                                                id="rate"
                                                onChange={this.handleChangeText}
                                            />
                                            <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                    <Col md="5" className="text-left-kal"><p>Uang Muka</p></Col>
                                    <Col md="7" className="input-width">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                                            <FormControl
                                                placeholder="100.000.000"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                className="style-input-simul"
                                                name="uangmuka"
                                                id="uangmuka"
                                                onChange={this.handleChangeText}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col md="12" className="wrap-button-hitung">
                                        <Button className="btn-hitung" onClick={this.ClickHitung} >Hitung</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="12" className="wrapper-side-right2">
                                <Row className="wrap-kalkulator">
                                    <Col md="12"><h5>Hasil Perhitungan</h5></Col>
                                    <Col md="5" className="text-left-kal"><p>Uang Muka</p></Col>
                                    <Col md="7" className="input-width"><p>Rp {this.state.uangmuka ? parseFloat(this.state.uangmuka).toLocaleString() : 0 },00</p></Col>
                                    <Col md="5" className="text-left-kal"><p>Angsuran (Tenor 5 Tahun)</p></Col>
                                    <Col md="7" className="input-width"><p>Rp {this.props.angs60 ? parseFloat(Math.ceil(this.props.angs60)).toLocaleString() : 0 },00</p></Col>
                                    <Col md="5" className="text-left-kal"><p>Angsuran (Tenor 10 Tahun)</p></Col>
                                    <Col md="7" className="input-width"><p>Rp {this.props.angs120 ? parseFloat(Math.ceil(this.props.angs120)).toLocaleString() : 0 },00</p></Col>
                                    <Col md="5" className="text-left-kal"><p>Angsuran (Tenor 15 Tahun)</p></Col>
                                    <Col md="7" className="input-width"><p>Rp {this.props.angs180 ? parseFloat(Math.ceil(this.props.angs180)).toLocaleString() : 0 },00</p></Col>
                                </Row>
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
    angs120: state.kprReducer.angsuran120,
    angs60: state.kprReducer.angsuran60,
    angs180: state.kprReducer.angsuran180
})

const mapsDispatchToProps = (dispatch) => {
    return {
        ubahAngsuran120: (data) => dispatch({ type: 'CHANGE_ANGSURAN120', value: data }),
        ubahAngsuran60: (data) => dispatch({ type: 'CHANGE_ANGSURAN60', value: data }),
        ubahAngsuran180: (data) => dispatch({ type: 'CHANGE_ANGSURAN180', value: data })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserSimulasi)