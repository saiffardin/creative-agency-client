import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import DashNav from '../../DashNav/DashNav';

import './Order.css';

const Order = () => {

    const location = useLocation();

    let service = location.service;
    // console.log(location.service);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        setValidated(form.checkValidity());

        console.log('validate form: ', form.checkValidity());
        console.log('validate: ', validated);


        if (form.checkValidity()) {
            // history.push('/afterLogin');
            console.log('order form is correct');

        }
        else {
            event.stopPropagation();
            alert('Form is not correct');
        }
    };

    const formStyle = {
        // border: '1px solid black',
        width: '500px',
        padding: '40px 20px 20px 40px'
        // paddingLeft: '40px'
    }

    return (
        <div className='order-div'>
            <DashNav title="Order"></DashNav>
            {/* <h1>Order</h1> */}
            <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit} style={formStyle}>

                    {/* Origin */}
                    <Form.Row >
                        {/* name / comp name */}
                        <Form.Group as={Col} controlId="validationCustom01">
                            {/* <Form.Label>Origin</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                placeholder="Your name/ company's name"
                            // defaultValue="Dhaka"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    {/* email */}
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom02">
                            {/* <Form.Label>Destination</Form.Label> */}
                            <Form.Control
                                // readOnly
                                required
                                type="email"
                                placeholder="Your email address"
                            // defaultValue={destination}
                            // style={{ fontWeight: "bold" }}

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>


                    {/* service */}
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom03">
                            {/* <Form.Label>Destination</Form.Label> */}
                            <Form.Control
                                // readOnly
                                required
                                type="text"
                                placeholder="Service"
                                defaultValue={service}
                            // style={{ fontWeight: "bold" }}

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>


                    {/* project detail */}
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom04">
                            {/* <Form.Label>Destination</Form.Label> */}
                            <Form.Control

                                required
                                // type="text"
                                as='textarea'
                                placeholder="Project Detail"
                            // defaultValue={service}
                            // style={{ fontWeight: "bold" }}

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    {/* price */}
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom05">
                            {/* <Form.Label>Destination</Form.Label> */}
                            <Form.Control
                                required
                                type="number"
                                placeholder="Price"
                            // defaultValue={service}
                            // style={{ fontWeight: "bold" }}

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Button className="landingPage-btn" type="submit">Send</Button>

                </Form>
            </div>
        </div>
    );
};

export default Order;