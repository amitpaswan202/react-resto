import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit, faHome, faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import{BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Navbar,Nav} from 'react-bootstrap'

class Navibar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">RESTORANT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/List">
                  <FontAwesomeIcon icon={faList} /> List
                </Link>
              </Nav.Link>
              {/* <Nav.Link href="#link"><Link to="/Detail">Detail</Link></Nav.Link> */}
              <Nav.Link href="#link">
                <Link to="/Create">
                  <FontAwesomeIcon icon={faPlus} /> Create
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  <FontAwesomeIcon icon={faSearch} /> search
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} /> Log in
                </Link>
              </Nav.Link>
              {/* <Nav.Link href="#link"><Link to="/Update">Update</Link></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navibar;
