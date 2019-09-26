import React from 'react';
import styled from 'styled-components';
import logo from './logo.png'
import {Link} from "react-router-dom"
import {Navbar,Form,Button,Nav,FormControl} from "react-bootstrap"

class Header extends React.Component {
    render() {
      return (
        <div >
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
            </Nav>
            <Form inline >
              <Nav.Link href="/create">Login</Nav.Link>
              <Nav.Link href="/list">Signup</Nav.Link>
            </Form>
          </Navbar>
        </div>
      );
    }
  }
  
  
  export default Header;
  