import React from "react";
import { Table } from "rsuite";
import { mockUsers } from "../MockData/mock";

const CenTable = (props) => {
  const { Column, HeaderCell, Cell } = Table;
  const data = mockUsers(50);
  return (
    <Table
      virtualized={props.virtualized}
      fillHeight={props.fillHeight}
      isTree={props.isTree}
      bordered={props.boardered}
      cellBordered={props.boardered}
      autoHeight={props.autoHeight}
      wordWrap={props.wordWrap}
      showHeader={props.showHeader}
      hover={props.hover}
      data={data}
      rowKey="id"
    >
      <Column width={70} align="center" resizable>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} resizable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={130} resizable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={100} resizable>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column width={100} resizable>
        <HeaderCell>Age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column width={200} resizable>
        <HeaderCell>City</HeaderCell>
        <Cell dataKey="city" />
      </Column>

      <Column width={200} resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
    </Table>
  );
};

export default CenTable;
