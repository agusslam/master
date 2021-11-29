import React from 'react'
import {Route} from 'react-router-dom'

import { Container, Row, Col, Table } from 'react-bootstrap'
import '../DashAdminAwal/DashAdmAwal.css'

import { connect } from 'react-redux'
import Moment from 'moment-timezone'

import Sidemenu from '../../../Sidemenu/admin'
import Spin from '../../../Spinner/index'

import { getKPR } from '../../../../../Actions/kpr'

import { FlagStatus } from '../../../../../Actions/admin'

class Admindashboard extends React.Component {
    
    componentDidMount() {
        this.props.getListKPR()
        // console.log(this.props.lisState)     
    }

    componentDidUpdate() {
        // console.log(this.props.lisState)  
    }

    ClickDebitur = async (e) => {
        // e.preventDefault()
        // const resFlagStatus = await this.props.flagStatus(e)
        // if(resFlagStatus.status === 200){
        // window.location.href = '/action/id='+e+''
        window.location.href = '/adminlist/detail/'+e._id+''
    }

    render() {
        return (
            <Container fluid={true} id="bg-dashburd" style={{
                backgroundImage: `url(${require('../../../../../Assets/Images/bgdashboard.png').default})`
                , backgroundSize: 'cover'
            }}>
                <Row className="wrapper-dashburd2">
                    <Route component={Sidemenu} />
                    <Col md="9">
                        <Row className="wrapper-side-right2">
                            <Col md="12">
                                <h2 className="title-dashburd">Dashboard</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right12">
                                <Row className="wrap-ajukan2">
                                    <Col md="12"><h5>List Debitur yang mengajukan KPR</h5></Col>
                                    <Col md="12"><h5>Search</h5></Col>
                                    {<Spin loading={this.props.isLoading} />}
                                    <Col md="12" className="style-over">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Tgl Pengajuan</th>
                                                    <th>Nama Debitur</th>
                                                    <th>Tipe Rumah</th>
                                                    <th>Harga Rumah</th>
                                                    <th>Lokasi</th>
                                                    <th>Developer</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.listKpr
                                                    ? this.props.listKpr.result.map((item, index) => {
                                                        return (
                                                            // <tr key={index} onClick={() => this.ClickDebitur(item)}>
                                                            <tr key={index} onClick={() => this.ClickDebitur(item)}>
                                                                <td>{index + 1}</td>
                                                                <td>{Moment(item.createdAt).format('DD-MM-YYYY')}</td>
                                                                <td>{item.uid}</td>
                                                                <td>{item.idrumah.tipe}</td>
                                                                <td>{(parseFloat(item.idrumah.harga)).toLocaleString()}</td>
                                                                <td>{item.idrumah.alamat}</td>
                                                                <td>{item.idrumah.developer.namadeveloper}</td>
                                                            </tr>
                                                        )
                                                    })
                                                    : null
                                                }
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        isLoading: state.rumahReducer.isLoading,
        listKpr: state.kprReducer.listKPR,
        lisState: state        
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        getListKPR: () => dispatch(getKPR()),
        flagStatus: (data) => dispatch(FlagStatus(data)),
        sendID: (data) => dispatch({type: 'SAVE_ID', value: data})
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Admindashboard)