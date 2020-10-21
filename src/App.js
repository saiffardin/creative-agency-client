import React, { createContext, useState } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import FullLandingPage from './components/LandingPage/FullLandingPage/FullLandingPage';
import Login from './components/Login/Login';
import AfterLogin from './components/AfterLogin/AfterLogin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FullDashboardPage from './components/Dashboard/FullDashboardPage/FullDashboardPage';
import Order from './components/Dashboard/Client/Order/Order';


export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <FullLandingPage></FullLandingPage>
                    </Route>

                    <Route path='/login'>
                        <Login></Login>
                    </Route>

                    <PrivateRoute path='/afterLogin'>
                        <AfterLogin></AfterLogin>
                    </PrivateRoute>

                    <PrivateRoute path='/dashboard'>
                        <FullDashboardPage></FullDashboardPage>
                    </PrivateRoute>

                    

                    

                </Switch>

            </Router>
        </UserContext.Provider>
    );
}

export default App;
