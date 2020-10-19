import React from 'react';
import './DashNav.css'

const DashNav = (props) => {
    const { title } = props;

    return (
        <div className="dash-nav d-flex justify-content-between p-3">
            <h5 className="title">{title}</h5>
            <h5>User Name</h5>
        </div>

    );
};

export default DashNav;