import React from "react";
import { Loader, Placeholder } from "rsuite";
const CenLoader = () => {
  return (
    <div>
      <Placeholder.Paragraph rows={8} />
      <Loader backdrop content="loading..." vertical />
    </div>
  );
};

export default CenLoader;
