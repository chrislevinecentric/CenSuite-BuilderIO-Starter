import React from "react";
import { Navbar, Nav } from "rsuite";
const CenNavbar = ({ ...props }) => {
  const [activeKey, setActiveKey] = React.useState(null);
  return (
    <Navbar {...props}>
      <Nav onSelect={setActiveKey} activeKey={activeKey}>
        {props.navitem.map((item, index) => {
          <Nav.Item eventKey={index}>{item.text}</Nav.Item>;
        })}
      </Nav>
    </Navbar>
  );
};

export default CenNavbar;
