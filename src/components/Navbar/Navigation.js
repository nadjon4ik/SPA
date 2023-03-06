import { Link, useLocation } from "react-router-dom";
import { HOME, BLOG, GALLERY, CONTACTS } from "../../shared/data";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navigation.css";

import logo from "./../../assets/images/logo.svg";
import { Stack } from "react-bootstrap";

const Navigation = () => {
  const location = useLocation();

  return (
    <header>
      <Navbar className="navigation">
        <Stack direction="horizontal" className="content-center">
          <Navbar.Brand href="#HOME">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto nav" activeKey={location.pathname}>
            <Nav.Link as={Link} to={HOME} eventKey="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={BLOG} eventKey="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to={GALLERY} eventKey="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to={CONTACTS} eventKey="/contacts">
              Contacts
            </Nav.Link>
          </Nav>
        </Stack>
      </Navbar>
    </header>
  );
};

export default Navigation;
