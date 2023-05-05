import React, {useState} from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import DashNav from '../../DashNav/DashNav';
import './AddService.css';


const AddService = () => {

    const [validated, setValidated] = useState(false);
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile] = useState(null);

    const formStyle = {
        // border: '1px solid black',
        // width: '700px',
        // overflow: 'hidden',
        padding: '40px 20px 20px 40px'
        // paddingLeft: '40px'
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        setValidated(form.checkValidity());

        console.log('validate form: ', form.checkValidity());
        console.log('validate: ', validated);


        if (form.checkValidity()) {
            // history.push('/afterLogin');
            console.log('order form is correct');

            sendServiceToServer()
                .then(data => {
                    console.log(data);
                    if (data) {
                        alert('Service added - successfully');
                        // document.getElementById("service-form").reset();
                    }
                });

        }
        else {
            event.stopPropagation();
            alert('Form is not correct');
        }
    };


    // call api
    const sendServiceToServer = () => {
        const formData = new FormData();
        formData.append('img', file);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);

        return fetch('https://render-creative-agency-server.onrender.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return true;
            })
            .catch(error => {
                console.error(error)
            })
    }


    const handleBlur = (e) => {
        const newInfo = {...serviceInfo};
        newInfo[e.target.name] = e.target.value;

        setServiceInfo(newInfo);
    }


    const handleFileChange = (e) => {

        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile);
    }


    return (
        <div className='add-service-div'>
            <DashNav title="Add Service"></DashNav>



            {/* form */}
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={formStyle} id='service-form'>

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
                                    name="title"
                                    onBlur={handleBlur}
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
                                    name="description"
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                    </div>

                    <div className="col-md-6">
                        {/* Upload image btn */}
                        {/* <Form.Row>
                            <Form.Group as={Col} controlId="validationCustom04">
                                <Form.Label>Icon</Form.Label>
                                <Button className="btn btn-imgUpload d-block" onClick={uploadImgClicked}>Upload Image</Button>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row> */}

                        {/* input */}
                        <Form.Row>
                            <Form.Group as={Col} controlId="validationCustom04">
                                <Form.Label>Upload Icon</Form.Label>
                                <Form.Control
                                    required
                                    type="file"
                                    onChange={handleFileChange}
                                />
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