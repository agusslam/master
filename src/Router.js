import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Landing'
import Login2 from './Components/Signin'
import Register from './Components/Reg'
import DashAdmin from './Components/DashboardAdmin'
import DashUser from './Components/DashboardUser'
import DashAjukan from './Components/User.formkpr'
import UserUploadForm from './Components/User.uploadform'
import DashFormKPR from './Components/User.formkprupload'
import DashIdentitas from './Components/User.formidentitas'
import DashSlip from './Components/User.formslip'


import { Provider } from "react-redux";

// import { history } from './helper/history'

import store from "./store";

class Routs extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/signin" element={ <Login2 /> }></Route>
                    <Route path="/register" element={ <Register /> }></Route>
                    <Route path="/dashboardadmin" element={ <DashAdmin /> }></Route>
                    <Route path="/dashboardmember" element={ <DashUser /> }></Route>
                    <Route path="/ajukankpr" element={ <DashAjukan /> }></Route>
                    <Route path="/ajukankpr/formkpr" element={ <DashFormKPR /> }></Route>
                    <Route path="/ajukankpr/formidentitas" element={ <DashIdentitas /> }></Route>
                    <Route path="/ajukankpr/formslip" element={ <DashSlip /> }></Route>
                    <Route path="/dashboardmember/uploadform" element={ <UserUploadForm /> }></Route>
                </Routes>
            </Router>
            </Provider>
        )
    }
}

export default Routs