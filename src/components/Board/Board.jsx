import React from "react";
import "./styles.css";
import { INITIAL_BOARD_SETUP, ROWS, COLS } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { isDarkSquare } from '../../utils'
import { Piece } from "../Piece/Piece";

const Board = () => {
  const { theme } = useTheme();

  return (
    <div className="board">
      {ROWS.map((row) =>
        COLS.map((col) => {
          const position = `${col}${row}`;
          const pieceData = INITIAL_BOARD_SETUP[position];

          return (
            <div
              key={position}
              className="square"
              data-position={position}
              style={{
                backgroundColor: isDarkSquare(col, row)
                  ? theme.squareDark
                  : theme.squareLight,
              }}
            >
              {pieceData && (
                <Piece piece={pieceData.piece} color={pieceData.color} />
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Board;
