import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import DashNav from '../../DashNav/DashNav';

import './MakeAdmin.css';

const MakeAdmin = () => {

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
        <div className='makeAdmin-div'>
            <DashNav title="Make Admin"></DashNav>
            

            {/* form */}
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={formStyle}>

                <div className="makeAdmin-form container d-flex">

                    {/* email */}
                    <Form.Row >
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter new admin email"
                            // className=""
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    {/* <div className="mt-4"> */}
                        <Button className="btn-success btn-addAdmin" type="submit">Submit</Button>
                    {/* </div> */}


                </div>



            </Form>


        </div>
    );
};

export default MakeAdmin;