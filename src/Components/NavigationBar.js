import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import React from "react";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  let mode = props.mode;
  let toggle = props.toggleMode;

  return (
    <div>
      <Navbar style={{ backgroundColor: "#2C3333" }} expand="sm lg">
        <Container className="m-0">
          <Link className="text-white navbar-brand" to="/">
            TextUtils
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`bg-white text-${mode}`}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="text-white nav-link" to="/">
                Home
              </Link>
              <Link className="text-white nav-link" to="/about">
                About
              </Link>

              <span className="d-flex mx-2">
                <span
                  class="form-check-label text-light my-2"
                  for="flexSwitchCheckDefault"
                >
                  &#9788;
                </span>
                <span class="form-check form-switch my-2 mx-2">
                  <input
                    class="form-check-input text-bg-black"
                    bg="light"
                    data-onstyle="success"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    aria-checked
                    onClick={toggle}
                  />
                  <label
                    class="form-check-label text-light"
                    for="flexSwitchCheckDefault"
                  >
                    &#9790;
                  </label>
                </span>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
