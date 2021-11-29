import React from 'react'
import { Route } from 'react-router-dom'

import {connect} from 'react-redux'
import { Container } from 'react-bootstrap'

import Navbar2 from '../Atoms/Navbar/Dashboard/Index'
import DashUserUploadktp from '../../Components/Atoms/Content/DashUser/DashUserUploadIdentitas/DashboardUploadKTP'
import Foot from '../Atoms/Footer/Home/Footer'


class DashboardUseUploadIden extends React.Component {
    render() {
        if (this.props.isLogin){
            if(this.props.Role !== 'user'){
                window.location.href = '/dashboardadmin';
            }            
        } else { window.location.href = '/signin'; }

        return (
            <Container fluid={true} className="p-0">
                <Route component={Navbar2} /> 
                <Route component={DashUserUploadktp} />  
                <Foot />
            </Container>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rumahReducer.isLoading,
    userData: state.rootReducer.user,
    isLogin: state.rootReducer.isLoggedIn,
    Role: state.rootReducer.akses
})

export default connect(mapsStateToProps)(DashboardUseUploadIden)