import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from "../../images/charity-logo.PNG";
import net from "../../images/spider-net.PNG";
import graph from "../../images/graph.PNG"
import "./Charity.css"
const Charity = () => {
    return (
        <Container className="mt-5">
            <Row className="container mt-3">
                <Col sm>
                    <img className="float-lg-right img-fluid" src={logo} alt="logo" />
                </Col>
                <Col sm md={5}>
                    <h1>Oxfam</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit distinctio in odio autem, necessitatibus rerum quod. Unde, ratione. In expedita magni a deserunt at!</p>
                    <Button variant="light">Tags: charity,Famine, Global, Climate</Button>
                </Col>
                <Col sm >
                    <img className="img-fluid" src={net} alt="spider net" />
                </Col>
                <Col sm md={2}>
                    <Button className="countNumber">95</Button>
                </Col>
            </Row>
            {/* 2nd row */}
            <Row className="container mt-3">
                <Col sm md={3} className="text-center">
                    <Button className="mt-2" variant="light">Events</Button> <br />
                    <Button className="mt-2" variant="light">Calender</Button> <br />
                    <Button className="mt-2" variant="light">Posts</Button> <br />
                    <Button className="mt-2" variant="light">lorem</Button> <br />
                </Col>
                <Col sm md={8}>
                    <Button className="ms-2" variant="light">Events</Button>
                    <Button className="ms-3" variant="light">Calender</Button>
                    <Button className="ms-3" variant="light">Posts</Button>
                    <Button variant="light">Lorem</Button>
                    <Button variant="light">questo</Button>
                    <Button variant="light">dorinto</Button>
                    <Row className=" d-flex justify-content-center">
                        <Col sm >
                            <img className="p-2" src={graph} alt=" graph" />
                        </Col>
                        <Col sm >
                            <img className="p-2" src={graph} alt=" graph" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Charity;