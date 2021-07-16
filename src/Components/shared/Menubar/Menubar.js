import React, { useContext } from 'react';
import { Navbar, Nav ,NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';
// import siteLogo from "../../images/logo.svg."

const MenuBar = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)


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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;