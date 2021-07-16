import React from 'react';
import logo from "../../../images/logo.svg";
import signUp from "../../../images/signUp.PNG";
import connect from "../../../images/connention.svg";
import { Button, Form, Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const Home = () => {
    let history = useHistory();
    return (
        <main>
            <div className="row d-flex justify-content-between px-5 mt-4">
                <div className="col-md-2">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-md-2">
                    <Button onClick={() => history.push("/login")} variant="outline-primary">Login</Button>
                </div>
            </div>
            <div className="row d-flex justify-content-between mt-5">
                {/* left side headline section */}
                <div className="col-md-4 m-auto px-3">
                    <h1 className="fs-1">Your network is <br /> waiting for you.</h1>
                    <p>We facilitate casual conversations that lead to <br /> not-so-casual professional impact. Powered by AI</p>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="readOnly">
                            <img onClick={() => history.push("/login")} src={signUp} alt="signup" className="G-login" />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                            <Col sm="7">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Col>
                            <Form.Label column sm="5">
                                <Button onClick={() => alert("You should login first")} variant="primary" > Get started</Button>
                            </Form.Label>
                        </Form.Group>
                        <Form.Text className="text-muted">Already have an account? <Link to="/login">Log in here</Link></Form.Text>
                    </Form>
                </div>
                <div className="col-md-4 mt-3">
                    <img src={connect} alt="connect" />
                </div>
            </div>
        </main>
    );
};

export default Home;