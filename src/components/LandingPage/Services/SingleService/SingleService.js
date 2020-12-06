import React from 'react';

import './SingleService.css';

const SingleService = (props) => {
    const { _id, img, title, description } = props.service;
    const serviceClicked = props.serviceClicked;
    // console.log(img.imgType);

    return (
        <div className='m-3 text-center single-service-div' onClick={serviceClicked}>
            
            <img style={{ width: '100px' }} src={`data:image/png;base64,${img.imgType}`} className="img-fluid m-2 p-2 comp-img" alt="service"></img>
            <h3>{title}</h3>
            <p className="text-black-50 px-3">{description}</p>

            {/* {props.children} */}
        </div>

    );
};

export default SingleService;