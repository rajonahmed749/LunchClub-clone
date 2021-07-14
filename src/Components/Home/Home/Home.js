import React from 'react';
import logo from "../../../images/logo.svg";
import signUp from "../../../images/signUp.PNG";
import connect from "../../../images/connention.svg";
import { Button, Form, Col, Row } from 'react-bootstrap';


const Home = () => {
    return (
        <main>
            <div className="row d-flex justify-content-between px-5 mt-4">
                <div className="col-md-2">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-md-2">
                    <Button variant="outline-primary">Login</Button>
                </div>
            </div>
            <div className="row d-flex justify-content-between mt-5">
                <div className="col-md-4 m-auto px-3">
                    <h1 className="fs-1">Your network is waiting for you.</h1>
                    <p>We facilitate casual conversations that lead to not-so-casual professional impact. Powered by AI</p>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="readOnly">
                           <img src={signUp} alt="signup"/>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                            <Col sm="7">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Col>
                            <Form.Label column sm="5">
                                <Button onClick={() => alert("You should login first")} variant="primary" > Get started</Button>
                            </Form.Label>
                        </Form.Group>
                        <Form.Text className="text-muted">Already have an account? Log in here </Form.Text>
                    </Form>
                </div>
                <div className="col-md-4 mt-3">
                    <img src={connect} alt="connect"/>
                </div>
            </div>
        </main>
    );
};

export default Home;