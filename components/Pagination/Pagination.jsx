import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const [activePage, setActivePage] = React.useState(props.activePage);
  return (
    <Pagination
      prev
      last
      next
      first
      size="xs"
      total={100}
      limit={10}
      activePage={activePage}
      onChangePage={setActivePage}
    />
  );
};

export default Pagination;
