import { Radio} from "rsuite";
import { BuilderBlocks, Builder } from "@builder.io/react";
import React from "react";

const CenRadio = (props) => {
  return (
    <>
      {props.radio?.length ? (
        props.radio.map((radios) => (
          <Radio> {radios.label}</Radio>
        ))
      ) : (
        <RadioTile label={props.label} value={props.value}>
          The project can be accessed by any logged in user except external
          users.
        </RadioTile>
      )}
      <BuilderBlocks
        parentElementId={props.builderBlock.id}
        dataPath="component.options.tiles"
      />
    </>
  );
};

// #endregion

export default CenRadio;
