import { BuilderBlocks, Builder } from "@builder.io/react";
import { RadioTile, RadioTileGroup } from "rsuite";
import React from "react";

function CenRadioTileGroup(props) {
  const Image = ({ src, alt, width, height }) => {
    return <img src={src} width={width} height="auto" alt={alt} />;
  };
  return (
    <RadioTileGroup inline={props.inline}>
      {props.tiles?.length ? (
        props.tiles.map((tile, index) => (
          <RadioTile
            icon={<Image src={tile.image} height="auto" width={tile.imagesizewidth} alt={tile.imagealt} />}
            key={index}
            label={tile.label}
            value={tile.value}
          >
            {tile.text}
          </RadioTile>
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
    </RadioTileGroup>
  );
}

export default CenRadioTileGroup;
