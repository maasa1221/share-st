import React from 'react';
import styled from 'styled-components';
import logo from './logo.png'
import {Link} from "react-router-dom"
import {Navbar,Form,Nav} from "react-bootstrap"
import AlarmIcon from '@material-ui/icons/Notifications';
import AccountIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

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
              <Nav.Link href="/list">Setting</Nav.Link>
            </Nav>
            <Form inline >
              <Nav.Link href="/create">Login</Nav.Link>
              <Nav.Link href="/list">SignUp</Nav.Link>
              <IconButton color="black" aria-label="add an alarm">
                <AlarmIcon />
              </IconButton>
              <IconButton color="black" aria-label="add an alarm">
                <AccountIcon />
              </IconButton>
            </Form>
          </Navbar>
        </div>
      );
    }
  }
  
  
  export default Header;
  