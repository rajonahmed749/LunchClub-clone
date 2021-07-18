import React, { useContext } from 'react';
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';
// import siteLogo from "../../images/logo.svg."

const MenuBar = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)

    const logOut = () => {
        setLoggedInUser({})
        history.push("/")
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >
                <Link to="/">Lunch Clone</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link>Meeting</Nav.Link>
                    <Nav.Link >Chat</Nav.Link>
                    <Nav.Link >Invite</Nav.Link>
                    <Nav.Link >
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown">
                                <img src={loggedInUser.img} alt="user-photo" className="userPhoto" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another</Dropdown.Item>
                                <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;