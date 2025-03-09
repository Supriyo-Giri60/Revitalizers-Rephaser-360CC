import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

function CustomNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Navbar
        expand="lg"
        className="navbar navbar-dark"
        style={{
          background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
          padding: "15px 0",
          boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.3)",
        }}
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="fw-bold text-light"
            style={{
              fontSize: "1.8rem",
              textShadow: "0px 0px 8px rgba(0, 255, 255, 0.8)",
            }}
          >
            REPHASER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-light fw-semibold mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="/inventory" className="text-light fw-semibold mx-3">
                Inventory
              </Nav.Link>
              <Nav.Link href="/predictions" className="text-light fw-semibold mx-3">
                Predictions
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
}

export default CustomNavbar;
