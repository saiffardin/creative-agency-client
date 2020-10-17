import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import FullLandingPage from './components/LandingPage/FullLandingPage/FullLandingPage';
import Login from './components/Login/Login';
import AfterLogin from './components/AfterLogin/AfterLogin';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <FullLandingPage></FullLandingPage>
                </Route>

                <Route path='/login'>
                    <Login></Login>
                </Route>

                <Route path='/afterLogin'>
                    <AfterLogin></AfterLogin>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
