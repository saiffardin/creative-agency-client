import React from 'react';
import './SingleReview.css';

import { Card } from 'react-bootstrap';

const SingleReview = (props) => {
    const {photoURL, name, company, description } = props.review;
    // console.log('img: ',photoURL);

    return (
        <div>
            <Card className="m-3" style={{ width: '18rem' }}>
                <div className="d-flex">
                    <img className="customer-img" src={photoURL} alt="review" />
                    <div className="customer-info mt-4">
                        <h5>{name}</h5>
                        <p className='mb-0'>{company}</p>
                    </div>
                </div>
                <Card.Body>
                    <Card.Text className="text-black-50">{description}</Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleReview;