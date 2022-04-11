import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom"; //import {Nav.Link} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Adherent from "../Adherent/Adherent";
import { Redirect } from "react-router-dom";
const Navs = () => {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="first">Home</Nav.Link>
                <Nav.Link href="#" className="firt">
                  Accueil
                </Nav.Link>
                <Nav.Link href="#">Presentation</Nav.Link>
                <Nav.Link href="/Adherent">Espace Adherent</Nav.Link>
                {/* <Link href="/Adherent">AAAA</Link> */}
                <Nav.Link href="#">Partenaires</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* <Router>
        <Switch>
          <Route
            path="/Adherent"
            component={Adherent} />}
          ></Route>
        </Switch>
      </Router> */}
    </>
  );
};
export default Navs;
