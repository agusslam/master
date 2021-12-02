import React from 'react'

import { Container, Row, Col} from 'react-bootstrap'

import Cookies from 'universal-cookie'
import ReactPaginate from 'react-paginate';

import { connect } from 'react-redux'

// import Spin from '../../../Spinner/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

// import Sidemenu from '../../../Sidemenu/index'

import { getRumah, getInfo } from '../../../../../Actions/kpr'

import '../DashUserAjukanKPR/PagingHouse.css'

const cookies = new Cookies()
const API_URL_IMG = "https://apiauthv1.herokuapp.com/house/image/"
// const API_URL_IMG = "http://localhost:8008/house/image/"

class PagingHouse extends React.Component {
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
                        <Row className="wrap-list-rumah-paging">
                            <Col md="12" className="img-rumah-paging" style={{
                                backgroundImage: "url(" + API_URL_IMG + item.image + "" + ")",
                                backgroundPosition: 'top',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}></Col>
                            <Col md="12" className="title-home-paging">
                                <h6 >{item.namarumah}</h6>
                                <p className="title-dev-paging">Alamat : {item.alamat}</p>
                                <p className="harga-list-paging">Rp {(parseFloat(item.harga)).toLocaleString()},00</p>
                                <p className="title-dev-paging">Developer : {item.developer.namadeveloper}</p>
                                <p className="title-dev-paging">Detail :</p>
                                <p className="title-dev-paging">- LT {item.luas_tanah} m2 / LB {item.luas_bangunan} m2</p>
                                <p className="title-dev-paging">- Kamar : {item.jumlah_kamar}</p>
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
            <div>
                <Container>
                    <Row>
                        {this.state.postData}
                    </Row>
                </Container>
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
                
            </div>
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

export default connect(mapsStateToProps, mapsDispatchToProps)(PagingHouse)