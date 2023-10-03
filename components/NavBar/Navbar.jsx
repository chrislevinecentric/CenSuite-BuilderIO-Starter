import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Navbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Brand href="#">RSUITE</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        {props.navmenu ? (
          <Nav.Menu title={props.navmenu.title}>
            {props.navitem.map((item, index) => {
              <Nav.Item eventKey={index}>{item}</Nav.Item>;
            })}
          </Nav.Menu>
        ) : (
          props.navitem.map((item, index) => {
            <Nav.Item eventKey={index}>{item}</Nav.Item>;
          })
        )}
      </Nav>
    </Navbar>
  );
};

export default Navbar;
