import React from "react";
import { Table } from "rsuite";
const Table = (props) => {
  const { Column, HeaderCell, Cell } = Table;
  return (
    <Table
      height={420}
      data={props.data}
      bordered
      cellBordered
      autoHeight
      affixHeader
      affixHorizontalScrollbar
    >
      {props.columnname.map((item) => {
        <Column width={50} align="center" fixed resizable>
          <HeaderCell>{item}</HeaderCell>
          <Cell dataKey={iten} />
        </Column>;
      })}
    </Table>
  );
};

export default Table;
