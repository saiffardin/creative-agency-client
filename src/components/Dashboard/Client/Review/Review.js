import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import DashNav from '../../DashNav/DashNav';

import './Review.css';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [validated, setValidated] = useState(false);
    const [review, setReview] = useState({});

    // console.log(loggedInUser);

    useEffect(() => {
        // add img to the review obj
        const newReview = { ...review };
        newReview["photoURL"] = loggedInUser.photoURL;
        newReview["name"] = loggedInUser.displayName;
        setReview(newReview);
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        setValidated(form.checkValidity());

        console.log('validate form: ', form.checkValidity());
        console.log('validate: ', validated);




        if (form.checkValidity()) {
            // history.push('/afterLogin');
            console.log('order form is correct');
            sendReviewToServer();

        }
        else {
            event.stopPropagation();
            alert('Form is not correct');
        }
    };


    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        // console.log(e.target.name, ":", e.target.value);

        setReview(newReview);
    }


    // call api
    const sendReviewToServer = () => {

        console.log(review);

        fetch('https://infinite-scrubland-26042.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => {
                console.log('review added successfully: ', data)
                if (data) {
                    alert('Review added successfully');
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    const formStyle = {
        // border: '1px solid black',
        width: '500px',
        padding: '40px 20px 20px 40px'
        // paddingLeft: '40px'
    }



    return (
        <div className="review-div">
            <DashNav title="Review"></DashNav>

            {/* form */}
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={formStyle}>

                {/* name */}
                <Form.Row >
                    <Form.Group as={Col} controlId="validationCustom01">
                        {/* <Form.Label>Origin</Form.Label> */}
                        <Form.Control
                            required
                            type="text"
                            placeholder="Your name"
                            name="name"
                            onBlur={handleBlur}
                            defaultValue={loggedInUser.displayName}

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* Company */}
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom02">
                        {/* <Form.Label>Destination</Form.Label> */}
                        <Form.Control
                            // readOnly
                            required
                            type="text"
                            placeholder="Company's name, Designation"
                            name="company"
                            onBlur={handleBlur}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* Description */}
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom04">
                        {/* <Form.Label>Destination</Form.Label> */}
                        <Form.Control

                            required
                            // type="text"
                            as='textarea'
                            placeholder="Description"
                            name="description"
                            onBlur={handleBlur}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Button className="landingPage-btn" type="submit">Submit</Button>

            </Form>
        </div>
    );
};

export default Review;