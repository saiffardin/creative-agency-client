import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <main id="ContactUs" className="Footer-div">
            <section className="row m-5">
                {/* left side TEXT */}
                <div className="col-lg-6 Footer-text">
                    <h3>Let us handle your project, professionally.</h3>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>

                {/* right side FORM */}
                <div className="col-lg-6 Footer-form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email address" />
                        </Form.Group>

                        <Form.Group controlId="formCompanyName">
                            <Form.Control type="text" placeholder="Your name / company’s name" />
                        </Form.Group>

                        <Form.Group controlId="formCompanyMsg">
                            <Form.Control as="textarea" placeholder="Your message" />
                        </Form.Group>

                        <Button className="landingPage-btn" type="submit">Send</Button>
                    </Form>
                </div>

            </section>

            <p className="text-center">copyright Orange labs 2020</p>
        </main>
    );
};

export default Footer;