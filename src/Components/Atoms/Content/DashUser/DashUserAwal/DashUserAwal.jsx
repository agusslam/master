import React from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap'
import '../DashUserAwal/DashUserAwal.css'
import Sidemenu from '../../../Sidemenu/index'

import { getInfoDetail } from '../../../../../Actions/kpr'

class Userdashboard extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getDetail()
        console.log(this.props.listDetail.result)
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
                                <h2 className="title-dashburd">Dashboard</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right1">
                                <Row className="wrap-dash-user">
                                    <Col md="8" className="title-head">
                                        <h5>KPR Sedang Diajukan</h5>
                                    </Col>
                                    <Col md="4" className="title-status">
                                        <h5>{ this.props.listDetail ? this.props.listDetail.result.statuskredit : null }</h5>
                                    </Col>
                                </Row>
                                <Row className="wrap-dash-user2">
                                    <Col md="8">
                                        <Row>
                                            <Col md="4">Nama Property </Col>
                                            <Col md="1">:</Col>
                                            <Col md="7">{ this.props.listDetail ? this.props.listDetail.result.idrumah.namarumah : null }</Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">Harga</Col>
                                            <Col md="1">:</Col>
                                            <Col md="7">Rp { this.props.listDetail ? (parseFloat(this.props.listDetail.result.idrumah.harga)).toLocaleString()  : null },00</Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">Alamat</Col>
                                            <Col md="1">:</Col>
                                            <Col md="7">{ this.props.listDetail ? this.props.listDetail.result.idrumah.alamat : null }</Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">Developer</Col>
                                            <Col md="1">:</Col>
                                            <Col md="7">{ this.props.listDetail ? this.props.listDetail.result.idrumah.developer.namadeveloper : null }</Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">Detail 1</Col>
                                            <Col md="1">:</Col>
                                            <Col md="7">LT { this.props.listDetail ? this.props.listDetail.result.idrumah.luas_tanah : null } m2 / LB { this.props.listDetail ? this.props.listDetail.result.idrumah.luas_bangunan : null } m2</Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">Detail 2</Col>
                                            <Col md="1">:</Col>
                                            <Col md="7">KM { this.props.listDetail ? this.props.listDetail.result.idrumah.jumlah_kamar : null } / Listrik { this.props.listDetail ? this.props.listDetail.result.idrumah.listrik : null }</Col>
                                        </Row>
                                    </Col>
                                    <Col md="4">
                                        <Row>
                                            <Col md="12"> 
                                            { this.props.listDetail ? <img className="image-dash-user" src={`https://apiauthv1.herokuapp.com/house/image/${this.props.listDetail.result.idrumah.image}`} alt="user pic" /> : null }                                            
                                            </Col>
                                        </Row>
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

const mapsStateToProps = (state) => {
    return{
        isLoading: state.rumahReducer.isLoading,
        listDetail: state.kprReducer.getDeb
    }    
}

const mapsDispatchToProps = (dispatch) => {
    return {
        getDetail: () => dispatch(getInfoDetail())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Userdashboard)