import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AddService from '../Admin/AddService/AddService';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ServiceListAdmin from '../Admin/ServiceListAdmin/ServiceListAdmin';
import Order from '../Client/Order/Order';
import Review from '../Client/Review/Review';
import ServiceListClient from '../Client/ServiceListClient/ServiceListClient';
import Sidebar from '../Sidebar/Sidebar';
import './FullDashboardPage.css';

const FullDashboardPage = () => {
    return (
        <div className="dashboard-div">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-2 pr-0">
                    <Sidebar></Sidebar>
                </div>


                {/* Main Section */}
                <div className="col-md-10 pl-0">
                    {/* Client */}
                    <Route path='/dashboard/order'>
                        <Order></Order>
                    </Route>

                    <Route path='/dashboard/serviceListClient'>
                        <ServiceListClient></ServiceListClient>
                    </Route>

                    <Route path='/dashboard/review'>
                        <Review></Review>
                    </Route>

                    {/* ----------------------------------------------------------------------------- */}

                    {/* Admin */}
                    <Route path='/dashboard/serviceListAdmin'>
                        <ServiceListAdmin></ServiceListAdmin>
                    </Route>

                    <Route path='/dashboard/addService'>
                        <AddService></AddService>
                    </Route>

                    <Route path='/dashboard/makeAdmin'>
                        <MakeAdmin></MakeAdmin>
                    </Route>


                </div>
            </div>
        </div>
    );
};

export default FullDashboardPage;