import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { RadioTile, RadioTileGroup } from "rsuite";
import { Icon } from "@rsuite/icons";
import { VscLock, VscWorkspaceTrusted, VscRepo } from "react-icons/vsc";
const RadioTile = (prop) => {
  return (
    <RadioTileGroup
      defaultValue={props.defaultValue}
      aria-label="Visibility Level"
    >
      {props.RadioTile.map((item) => {
        <RadioTile
          icon={<Icon as={VscLock} />}
          label={item.label}
          value={item.value}
        >
          {item.text}
        </RadioTile>;
      })}
    </RadioTileGroup>
  );
};

export default RadioTile;