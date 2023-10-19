import React from "react";
import PropTypes from "prop-types";
import { Panel, PanelGroup, Placeholder } from "rsuite";
const CenPanel = (props) => {
  return (
    <PanelGroup accordion defaultActiveKey={1} bordered>
      <Panel header={props.header} eventKey={props.key} id={props.id}>
        <Placeholder.Paragraph />
      </Panel>
    </PanelGroup>
  );
};

export default CenPanel;
