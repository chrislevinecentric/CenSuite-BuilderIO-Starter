import React from "react";
import { AutoComplete, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import MemberIcon from "@rsuite/icons/Member";
const AutoComplete = (props) => {
  return (
    <>
      {" "}
      <InputGroup>
        <AutoComplete data={props.data} />
        <InputGroup.Button tabIndex={-1}>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
    </>
  );
};

export default AutoComplete;
