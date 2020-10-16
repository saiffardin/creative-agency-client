import React from 'react';
import './Companies.css';

import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';



const Companies = () => {
    return (
        <div className="companies-div container my-5 text-center">
            <img src={slack} className="img-fluid m-4 p-4 comp-img" alt="slack"></img>
            <img src={google} className="img-fluid m-4 p-4 comp-img" alt="google"></img>
            <img src={uber} className="img-fluid m-4 p-4 comp-img" alt="uber"></img>
            <img src={netflix} className="img-fluid m-4 p-4 comp-img" alt="netflix"></img>
            <img src={airbnb} className="img-fluid m-4 p-4 comp-img" alt="airbnb"></img>
        </div>
    );
};

export default Companies;