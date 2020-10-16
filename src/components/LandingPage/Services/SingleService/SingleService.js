import React from 'react';

import './SingleService.css';

const SingleService = (props) => {
    const { id, img, title, description } = props.service;

    return (
        <div className='m-3 text-center single-service-div'>
            <img style={{ width: '100px' }} src={require(`../../../../images/icons/${img}`)} className="img-fluid m-2 p-2 comp-img" alt="service"></img>
            <h3>{title}</h3>
            <p className="text-black-50 px-3">{description}</p>
        </div>

    );
};

export default SingleService;