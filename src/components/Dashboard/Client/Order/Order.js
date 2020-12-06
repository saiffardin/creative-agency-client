import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';
import DashNav from '../../DashNav/DashNav';

import './Order.css';

const Order = () => {

    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allServices, setAllServices] = useState([]);

    const [dropDownChk, setDropDownChk] = useState(false);

    let service = location.service;
    // console.log(location.service);

    const [validated, setValidated] = useState(false);
    const [orderInfo, setOrderInfo] = useState({ status: "Pending" });

    const handleBlur = (e) => {
        const newInfo = { ...orderInfo };
        newInfo[e.target.name] = e.target.value;
        setOrderInfo(newInfo);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        setValidated(form.checkValidity());

        // console.log('validate form: ', form.checkValidity());
        // console.log('validate: ', validated);


        if (dropDownChk) {
            // history.push('/afterLogin');
            console.log('order form is correct');
            // console.log(orderInfo);
            sendOrderServer();


        }
        else {
            event.stopPropagation();
            alert('Your form is not correct. Select a service please.');
        }
    };


    const handleServiceDropdown = (e) => {

        const newInfo = { ...orderInfo };
        newInfo[e.target.name] = e.target.value;
        setOrderInfo(newInfo);

        setDropDownChk(true);

        // console.log(e.target.name, ':', e.target.value);
        // console.log(orderInfo);
    }


    const sendOrderServer = () => {
        fetch('https://infinite-scrubland-26042.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log('from api:', data)
                console.log('Order added');
                alert('Order added successfully');
                document.getElementById("order-form-id").reset();
                setDropDownChk(false);

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


    useEffect(() => {
        fetch('https://infinite-scrubland-26042.herokuapp.com/loadAll')
            .then(response => response.json())
            .then(data => {
                // console.log('length: ', allServices.length);
                let titles = data.map(singleData => singleData.title);
                setAllServices(titles);
                // console.log(titles);
            })
    }, [])

    return (
        <div className='order-div'>
            <DashNav title="Order"></DashNav>

            {
                allServices.length > 0
                    ?
                    <div>
                        <Form onSubmit={handleSubmit} style={formStyle} id='order-form-id'>


                            <Form.Row >
                                {/* name / comp name */}
                                <Form.Group as={Col} controlId="validationCustom01">
                                    {/* <Form.Label>Origin</Form.Label> */}
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Your name/ company's name"
                                        name="name"
                                        onBlur={handleBlur}
                                    // readOnly
                                    // defaultValue={loggedInUser.displayName}
                                    />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
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
                                        name="email"
                                        onBlur={handleBlur}
                                    // readOnly
                                    // defaultValue={loggedInUser.email}
                                    />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                            </Form.Row>


                            {/* service */}
                            {/* <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom03">
                            
                            <Form.Control
                                // readOnly
                                required
                                type="text"
                                placeholder="Service"
                                defaultValue={service}
                                name="service"
                                onBlur={handleBlur}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row> */}


                            {/* service dropdown */}
                            <Form.Row>

                                <Form.Group as={Col} controlId="validationCustom03">
                                    {/* <Form.Label>Custom select</Form.Label> */}
                                    <Form.Control
                                        as="select"
                                        required
                                        name="service"
                                        onChange={handleServiceDropdown}
                                        defaultValue="select service"
                                    >
                                        <option disabled selected>select service</option>

                                        {
                                            allServices.map(service =>
                                                <option>{service}</option>
                                            )
                                        }

                                    </Form.Control>

                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}

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
                                        name="projectDetail"
                                        onBlur={handleBlur}
                                    />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
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
                                        name="price"
                                        onBlur={handleBlur}
                                    />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                            </Form.Row>

                            <Button className="landingPage-btn" type="submit">Send</Button>

                            {/* testing */}
                            {/* <Button className='btn' onClick = {()=>{console.log(orderInfo)}}>Check</Button> */}

                        </Form>
                    </div>

                    :
                    <h1 className='text-center'>Loading...</h1>

            }
        </div>
    );
};

export default Order;