import React from "react";
import Link from "next/link";
import { Breadcrumb } from "rsuite";
const NavLink = React.forwardRef((props, ref) => {
  const { href, as, children, ...rest } = props;
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});
const Breadcrumb = (props) => {
  return (
    <>
      {" "}
      <Breadcrumb separator={props.separator}>
        <Breadcrumb.Item as={props.NavLink} href="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item as={NavLink} href="/components/overview">
          Components
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{props.text}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
export default Breadcrumb;
