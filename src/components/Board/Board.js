import React from "react";
import "./Board.css";
import Tile from "../Tile";

const Board = (props) => {
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  };

  const newTiles = props.tiles.map((tile) => {
    return <Tile {...tile} handleTileClicked={props.handleTileClicked} />;
  });

  return (
    <div className="Board" style={gridConfig}>
      {newTiles}
    </div>
  );
};

export default Board;
