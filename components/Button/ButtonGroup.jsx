import { BuilderBlocks, Builder } from "@builder.io/react";
import { Button, ButtonGroup } from "rsuite";
import React from "react";

function CenButtonGroup(props) {
  return (
    <ButtonGroup
      block={props.block}
      size={props.size}
      vertical={props.vertical}
      justified={props.justified}
    >
      {props.buttons?.length ? (
        props.buttons.map((button, index) => (
          <Button
            key={index}
            color={button.color}
            appearance={button.appearance}
            loading={button.loading}
            disabled={button.disabled}
            block={button.block}
            href={button.link}
          >
            {button.text}
          </Button>
        ))
      ) : (
        <Button
          color={props.color}
          block={props.block}
          appearance={props.appearance}
          loading={props.loading}
          disabled={props.disabled}
          href={props.link}
        >
          {props.text}
        </Button>
      )}
      <BuilderBlocks
        parentElementId={props.builderBlock.id}
        dataPath="component.options.buttons"
      />
    </ButtonGroup>
  );
}

export default CenButtonGroup;
