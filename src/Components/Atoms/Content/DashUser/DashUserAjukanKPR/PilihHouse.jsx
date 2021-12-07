import React from 'react'

import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import ModalDialog from '../../../Modals/Alert'

import { Route } from 'react-router-dom'
import Cookies from 'universal-cookie'

import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate';
import ButtonNext from '../../../Button/Next'
import Spin from '../../../Spinner/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Sidemenu from '../../../Sidemenu/index'

import { getRumah, getInfo, getSearchrumah } from '../../../../../Actions/kpr'

import Lingkaran from '../../../Circle/Circle'
import Lingkaran2 from '../../../Circle/Circle2'
import Lingkaran3 from '../../../Circle/Circle3'
import Lingkaran4 from '../../../Circle/Circle4'

import Panjang from '../../../Panjang/Panjang'
import Panjang2 from '../../../Panjang/Panjang2'
import Panjang3 from '../../../Panjang/Panjang3'
// import PagingHouse from '../DashUserAjukanKPR/PagingSearchHouse'
import '../DashUserAjukanKPR/PilihHouse.css'

const cookies = new Cookies()
const API_URL_IMG = "https://apiauthv1.herokuapp.com/house/image"
// const API_URL_IMG = "http://localhost:8008/house/image/"

class UserAjukan1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            data: [],
            perPage: 3,
            currentPage: 0
        }
    }

    receivedData = async () => {
        const resData = await this.props.getListRumah()
        // console.log(resData)
        if (resData.status === 200) {
            const data = resData.result
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map((item, index) =>
                // <div className="list-rumah">
                <Col md="4" className="block-house" key={index} onClick={() => this.ClickImages(item._id)}>
                    <Row className="centang">
                        <Col md="12"><FontAwesomeIcon style={{ display: 'none' }} id={`idcent${item._id}`} className="cek" icon={faCheckCircle} size='3x'></FontAwesomeIcon></Col>
                    </Row>
                    <Row className="wrap-list-rumah">
                        <Col md="12" className="img-rumah" style={{
                            // backgroundImage: "url(" + API_URL_IMG + item.image + "" + ")",
                            backgroundImage: `url(${API_URL_IMG}/${item.image})`,
                            backgroundPosition: 'top',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></Col>
                        <Col md="12" className="title-home">
                            <h6>{item.namarumah}</h6>
                            <p className="title-dev">Alamat : {item.alamat}</p>
                            <p className="harga-list">Rp {(parseFloat(item.harga)).toLocaleString()},00</p>
                            <p className="title-dev">Developer : {item.developer.namadeveloper}</p>
                            <p className="title-dev">Detail :</p>
                            <p className="title-dev">- LT {item.luas_tanah} m2 / LB {item.luas_bangunan} m2</p>
                            <p className="title-dev">- Kamar : {item.jumlah_kamar}</p>
                        </Col>
                    </Row>
                </Col>
                // </div>
            )
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage), postData
            })
        }
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
        // console.log(this.props.isState)

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

    handleChangeTextSearch = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    ClickSearch = async () => {
        const { key } = this.state
        const resSearch = await this.props.getSearchRumah(key)
        if(resSearch.status === 200){
            const data = resSearch.result
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map((item, index) =>
                // <div className="list-rumah">
                <Col md="4" className="block-house" key={index} onClick={() => this.ClickImages(item._id)}>
                    <Row className="centang">
                        <Col md="12"><FontAwesomeIcon style={{ display: 'none' }} id={`idcent${item._id}`} className="cek" icon={faCheckCircle} size='3x'></FontAwesomeIcon></Col>
                    </Row>
                    <Row className="wrap-list-rumah">
                        <Col md="12" className="img-rumah" style={{
                            // backgroundImage: "url(" + API_URL_IMG + item.image + "" + ")",
                            backgroundImage: `url(${API_URL_IMG}/${item.image})`,
                            backgroundPosition: 'top',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></Col>
                        <Col md="12" className="title-home">
                            <h6>{item.namarumah}</h6>
                            <p className="title-dev">Alamat : {item.alamat}</p>
                            <p className="harga-list">Rp {(parseFloat(item.harga)).toLocaleString()},00</p>
                            <p className="title-dev">Developer : {item.developer.namadeveloper}</p>
                            <p className="title-dev">Detail :</p>
                            <p className="title-dev">- LT {item.luas_tanah} m2 / LB {item.luas_bangunan} m2</p>
                            <p className="title-dev">- Kamar : {item.jumlah_kamar}</p>
                        </Col>
                    </Row>
                </Col>
                // </div>
            )
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage), postData
            })
        }
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
                                    <Col md="12" className="title-klik-house"><p>Silahkan Klik pada rumah yang diinginkan.</p></Col>
                                    <Col md="12" className="list-rumah">
                                        {<Spin loading={this.props.isLoading} />}
                                        <Row>
                                        {this.state.postData}
                                        </Row>
                                    </Col>
                                    <div className="align-paging">
                                        <ReactPaginate
                                            previousLabel={"<<"}
                                            nextLabel={">>"}
                                            breakLabel={"..."}
                                            breakClassName={"break-me"}
                                            pageCount={this.state.pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={"pagination"}
                                            subContainerClassName={"pages pagination"}
                                            activeClassName={"active"}
                                            pageClassName={"page-item"}
                                            pageLinkClassName={"page-link"}
                                            previousClassName={"page-item"}
                                            previousLinkClassName={"page-link"}
                                            nextClassName={"page-item"}
                                            nextLinkClassName={"page-link"}
                                        />
                                    </div>
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
        getSearchRumah: (data) => dispatch(getSearchrumah(data)),
        changeLoad: () => dispatch({ type: 'CHANGE_LOADING', value: false })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserAjukan1)