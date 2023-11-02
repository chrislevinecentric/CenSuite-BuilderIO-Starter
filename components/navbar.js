import React from "react";
import Link from "next/link";
import { Nav, Button } from "rsuite";
import { BuilderBlocks, Builder } from "@builder.io/react";

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props;
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

const Navbar = (props) => (
  <Navbar>
    <Nav>
      {props.navitems?.map((item) => {
        {
          console.log(item);
        }
        <Button>{item.navtext}</Button>;
      })}
    </Nav>
  </Navbar>
);

Builder.registerComponent(Navbar, {
  name: "Navbar",
  inputs: [
    {
      name: "navitems",
      type: "list",
      subFields: [
        {
          name: "navtext",
          type: "string",
        },
      ],
      defaultValue: [],
    },
  ],
});

export default Navbar;
