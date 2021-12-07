import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'

import Slider from "react-slick";


import Spin from '../../Spinner'
import { getRumah } from '../../../../Actions/kpr'
import '../Kpr/KprContent.css'
const API_URL_IMG = "https://apiauthv1.herokuapp.com/house/image"

class ContentKPR extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            harga: '',
            rate: '',
            uangmuka: '',
            angsuran120: ''
        }
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
        })
    }

    ClickHitung = (e) => {
        // const {harga, rate, uangmuka} = this.setState
        let hargaNew = Math.floor(this.state.harga)
        let rateNew = Math.floor(this.state.rate)
        let uangmukaNew = Math.floor(this.state.uangmuka)
        let rateTahun = (rateNew / 100) / 12
        // utk120bulan
        let power = Math.pow((rateTahun + 1), 120)
        let bwh = rateTahun / (1 - (1 / power)) * (hargaNew - uangmukaNew)
        // utk60bulan
        let power2 = Math.pow((rateTahun + 1), 60)
        let bwh2 = rateTahun / (1 - (1 / power2)) * (hargaNew - uangmukaNew)
        // utk180bulan
        let power3 = Math.pow((rateTahun + 1), 180)
        let bwh3 = rateTahun / (1 - (1 / power3)) * (hargaNew - uangmukaNew)

        this.props.ubahAngsuran120(bwh)
        this.props.ubahAngsuran60(bwh2)
        this.props.ubahAngsuran180(bwh3)
    }

    componentDidMount() {
        this.props.getListRumah()
        console.log(this.props.listKPR)
    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <Container fluid={true} className="bg-kpr">
                <Row>
                    <Col md="12" className="wrap-title-cari">
                        <h1>CARI RUMAH</h1>
                    </Col>
                    <Col md="12" className="wrap-desc-cari">
                        <p>Banyak pilihan rumah hasil kerja sama dengan developer terbaik di Indonesia. </p>
                    </Col>
                    <Col md="12" className="wrap-carusel">
                        {<Spin loading={this.props.isLoading} />}
                        <div>
                            <Slider {...settings}>
                                {this.props.listKPR ?
                                    this.props.listKPR.result.map((item, index) => {
                                        return (
                                            <Col md="4" className="card-house" key={index}>
                                                <Row className="wrap-list-carusel">
                                                    <Col md="12" className="img-rumah-carusel" style={{
                                                        // backgroundImage: "url(" + API_URL_IMG + item.image + "" + ")",
                                                        backgroundImage: `url(${API_URL_IMG}/${item.image})`,
                                                        backgroundPosition: 'top',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat'
                                                    }}></Col>
                                                    <Col md="12" className="title-home-carusel">
                                                        <h6 >{item.namarumah}</h6>
                                                        <p className="title-dev-carusel">Alamat : {item.alamat}</p>
                                                        <p className="harga-list-carusel">Rp {(parseFloat(item.harga)).toLocaleString()},00</p>
                                                        <p className="title-dev-carusel">Developer : {item.developer.namadeveloper}</p>
                                                        <p className="title-dev-carusel">Detail :</p>
                                                        <p className="title-dev-carusel">- LT {item.luas_tanah} m2 / LB {item.luas_bangunan} m2</p>
                                                        <p className="title-dev-carusel">- Kamar : {item.jumlah_kamar}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        )
                                    })
                                    : null}
                            </Slider>
                        </div>
                    </Col>
                </Row>
                <Row style={{
                    backgroundImage: `url(${require('../../../../Assets/Images/bgdashboard.png').default})`
                    , backgroundSize: 'cover'
                }}>
                    <Col md="12" className="wrap-title-cari">
                        <h1>SIMULASI KPR</h1>
                    </Col>
                    <Col md="12" className="wrap-simulasi">
                        <Row className="wrap-simulasi-content">
                            <Col md="12" className="wrap-title"><h6>Kalkulator KPR</h6></Col>
                            <Col md="5" className="text-left-simul"><p>Harga Property</p></Col>
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
                            <Col md="5" className="text-left-simul"><p>Bunga</p></Col>
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
                            <Col md="5" className="text-left-simul"><p>Uang Muka</p></Col>
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
                            <Col md="12" className="wrap-button-simul">
                                <Button className="btn-hitung" onClick={this.ClickHitung} >Menghitung</Button>
                            </Col>
                        </Row>
                    </Col>

                    <Col md="12" className="wrap-simulasi">
                        <Row className="wrap-simulasi-content">
                            <Col md="12" className="wrap-title"><h6>Hasil Perhitungan</h6></Col>
                            <Col md="5" className="text-left-simul"><p>Tenor 5 Tahun</p></Col>
                            <Col md="6" className="input-width-simul"><p>Rp {this.props.angs60 ? parseFloat(Math.ceil(this.props.angs60)).toLocaleString() : 0},00</p></Col>
                            <Col md="1"><p>/bulan</p></Col>
                            <Col md="5" className="text-left-simul"><p>Tenor 10 Tahun</p></Col>
                            <Col md="6" className="input-width-simul"><p>Rp {this.props.angs120 ? parseFloat(Math.ceil(this.props.angs120)).toLocaleString() : 0},00</p></Col>
                            <Col md="1"><p>/bulan</p></Col>
                            <Col md="5" className="text-left-simul"><p>Tenor 15 Tahun</p></Col>
                            <Col md="6" className="input-width-simul"><p>Rp {this.props.angs180 ? parseFloat(Math.ceil(this.props.angs180)).toLocaleString() : 0},00</p></Col>
                            <Col md="1"><p>/bulan</p></Col>
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
    angs120: state.kprReducer.angsuran120,
    angs60: state.kprReducer.angsuran60,
    angs180: state.kprReducer.angsuran180
})

const mapsDispatchToProps = (dispatch) => {
    return {
        getListRumah: () => dispatch(getRumah()),
        ubahAngsuran120: (data) => dispatch({ type: 'CHANGE_ANGSURAN120', value: data }),
        ubahAngsuran60: (data) => dispatch({ type: 'CHANGE_ANGSURAN60', value: data }),
        ubahAngsuran180: (data) => dispatch({ type: 'CHANGE_ANGSURAN180', value: data })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(ContentKPR)

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}