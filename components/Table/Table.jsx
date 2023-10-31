import React from "react";
import { Table } from "rsuite";
import { mockUsers } from "./mock";

const CenTable = (props) => {
  const { Column, HeaderCell, Cell } = Table;
  const data = mockUsers(20);
  return (
    <Table
      height={420}
      data={data}
      bordered
      cellBordered
      autoHeight
      affixHeader
      affixHorizontalScrollbar
    >
      {props.tabledata?.map((item, index) => (
        <Column width={50} align="center" fixed resizable>
          <HeaderCell>{item.columnname}</HeaderCell>
          <Cell dataKey={iten.datakey} />
        </Column>
      ))}
    </Table>
  );
};

export default CenTable;
