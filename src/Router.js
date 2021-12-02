import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './Components/Home/Home'
import SignIn from './Components/Signin/Signin'
import SignUp from './Components/Signup/Signup'
import ConTact from './Components/Contact/Contact'
import AboutUS from './Components/AboutUs/AboutUs'

import DashUser from './Components/DashboardUser/Dashboard'
import DashUserAjukanKpr from './Components/DashboardUser/PilihRumah'
import DashUserUploadForm from './Components/DashboardUser/FormKPR'
import DashIdentitas from './Components/DashboardUser/FormIdentitas'
import DashUserUploadSlip from './Components/DashboardUser/FormSlip'
import DashboardSimul from './Components/DashboardUser/SimulasiKPR'

import DashAdmin from './Components/DashboardAdmin/Dashboard'
import DashAdminDet from './Components/DashboardAdmin/DetailList'
import DashAdminLis from './Components/DashboardAdmin/ListSaya'

import Paging from './Components/Atoms/Content/DashUser/DashUserAjukanKPR/PagingHouse'

import { Provider } from "react-redux";
import store from "./store";

class Routes extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Fragment>
                            <Route exact path="/" component={Homepage} ></Route>
                            <Route exact path="/signin" component={SignIn} ></Route>
                            <Route exact path="/register" component={SignUp} ></Route>
                            <Route exact path="/dashboardmember" component={DashUser} ></Route>
                            <Route exact path="/ajukankpr" component={DashUserAjukanKpr} ></Route>
                            <Route exact path="/ajukankpr/formkpr" component={DashUserUploadForm} ></Route>
                            <Route exact path="/ajukankpr/formidentitas" component={DashIdentitas}></Route>
                            <Route exact path="/ajukankpr/formslip" component={DashUserUploadSlip}></Route>
                            <Route exact path="/simulasi" component={DashboardSimul} ></Route>
                            <Route exact path="/dashboardadmin" component={DashAdmin} ></Route>
                            <Route exact path="/adminlist/detail/:id" component={DashAdminDet} ></Route>
                            <Route exact path="/dashboardlistadmin" component={DashAdminLis} ></Route>
                            <Route exact path="/contact" component={ConTact} ></Route>
                            <Route exact path="/tentang" component={AboutUS} ></Route>
                            <Route exact path="/paginghouse" component={Paging} ></Route>
                        </Fragment>
                    </Switch>
                </Router> 
            </Provider >
        )
    }
}

export default Routes