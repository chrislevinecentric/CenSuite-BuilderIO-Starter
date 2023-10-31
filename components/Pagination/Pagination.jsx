import React from "react";
import { Pagination } from "rsuite";
const CenPagination = (props) => {
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

export default CenPagination;
