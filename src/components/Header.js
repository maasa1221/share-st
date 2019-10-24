import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Navbar, Form, Nav } from "react-bootstrap";
import AlarmIcon from "@material-ui/icons/Notifications";
import AccountIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img src={logo} height="30" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="create">Create</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="list">List</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="setting">Setting</Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link href="/create">Login</Nav.Link>
            <Nav.Link href="/list">SignUp</Nav.Link>
            <IconButton color="black" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            <IconButton color="black" aria-label="add an alarm">
              <ChatIcon />
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
