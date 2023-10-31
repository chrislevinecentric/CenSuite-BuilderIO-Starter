import React from "react";
import { TagInput } from "rsuite";

const CenTagInput = () => {
  return (
    <TagInput
      trigger={["Enter", "Space", "Comma"]}
      placeholder="Enter, Space, Comma"
      style={{ width: 300 }}
      menuStyle={{ width: 300 }}
      onCreate={(value, item) => {
        console.log(value, item);
      }}
    />
  );
};

// #endregion

export default CenTagInput;
