import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import DashNav from '../../DashNav/DashNav';
import './AddService.css';


const AddService = () => {

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
        // width: '700px',
        // overflow: 'hidden',
        padding: '40px 20px 20px 40px'
        // paddingLeft: '40px'
    }




    return (
        <div className='add-service-div'>
            <DashNav title="Add Service"></DashNav>
            <h1>Add Service</h1>


            {/* form */}
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={formStyle}>

                <div className="row add-service-form container ">

                    <div className="col-md-6">
                        {/* title */}
                        <Form.Row >
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>Service title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter title"
                                // defaultValue="Dhaka"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>



                        {/* Description */}
                        <Form.Row>
                            <Form.Group as={Col} controlId="validationCustom04">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    required
                                    as='textarea'
                                    placeholder="Enter Description"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                    </div>

                    <div className="col-md-6">
                        {/* Icon */}
                        <Form.Row>
                            <Form.Group as={Col} controlId="validationCustom04">
                                <Form.Label>Icon</Form.Label>
                                <Button className="btn btn-imgUpload d-block">Upload Image</Button>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </div>


                </div>

                <div className="d-flex mr-5 pr-2 mt-2 justify-content-end">
                    <Button className="btn-success px-4 my-2 mr-5 " type="submit">Submit</Button>
                </div>

            </Form>

        </div>
    );
};

export default AddService;