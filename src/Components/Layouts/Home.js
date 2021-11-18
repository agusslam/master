import React, {Fragment} from 'react'

import { connect } from 'react-redux'
import { Container, Spinner } from 'react-bootstrap'

import { getRumah } from '../../Actions/kpr'

import Navbar from '../Atoms/Navbar/navbar'
import Spin from '../Atoms/Spinner'

class Homepage extends React.Component {

    componentDidMount() {
        this.props.getListRumah()
    }

    // componentDidUpdate() {
    //     console.log(this.props.listKPR)
    // }

    render() {
        if (!this.props.isLogin) {
            window.location.href = '/signin';
        }
        const { listKPR } = this.props 
        console.log(listKPR)
        return (
            <Container fluid>
                <Navbar />
                <h1>Ini Home : {this.props.userData}{this.props.userTes}</h1>
                {/* <Spinner animation="border" variant="warning" /> */}
                { <Spin loading={this.props.isLoading} /> }
                <Fragment>
                {                       
                    // listKPR.result.map(ini => {
                    //     return (
                    //         <p key={ini._id}>{ini.username}</p>
                    //     )
                    // })                    
                }
                </Fragment>                
            </Container>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rumahReducer.isLoading,
    userData: state.rootReducer.user,
    isLogin: state.rootReducer.isLoggedIn,
    Toke: state.rootReducer.token,
    userTes: state.userReducer.user,
    storeData: state,
    listKPR: state.rumahReducer.listRum
})

const mapsDispatchToProps = (dispatch) => {
    return {
        // changeUser: (newValue) => {
        //     dispatch({
        //         type: 'CHANGE_PROFIL',
        //         value: newValue
        //     })
        // },
        getListRumah: () => dispatch(getRumah())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Homepage)