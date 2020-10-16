import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FullLandingPage from './components/LandingPage/FullLandingPage/FullLandingPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path exact='/'>
                    <FullLandingPage></FullLandingPage>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
