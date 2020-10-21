import React from 'react';
import './SingleReview.css';

import { Card } from 'react-bootstrap';

const SingleReview = (props) => {
    const {img, name, designation, description } = props.review;
    
    return (
        <div>
            <Card className="m-3" style={{ width: '18rem' }}>
                <div className="d-flex">
                    <img className="customer-img" src={require(`../../../../images/${img}`)} alt="cus" />
                    <div className="customer-info">
                        <h5>{name}</h5>
                        <p>{designation}</p>
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