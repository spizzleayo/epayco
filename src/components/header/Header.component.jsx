import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import "./Header.styles.scss";

const Header = () => {

  return (
    <div>
      <Navbar className="nav" bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/signup" className="nav-link">
              Sign up
            </NavLink>
            <NavLink to="/wallet" className="nav-link">
              Consult Wallet
            </NavLink>
            <NavLink to="/recharge" className="nav-link">
              Recharge Wallet
            </NavLink>
            <NavLink to="/Pay" className="nav-link">
              Pay
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
