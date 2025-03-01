
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessPawn,
  faChessKnight,
  faChessBishop,
  faChessRook,
  faChessQueen,
  faChessKing,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeProvider";

const pieceIcons = {
  pawn: faChessPawn,
  knight: faChessKnight,
  bishop: faChessBishop,
  rook: faChessRook,
  queen: faChessQueen,
  king: faChessKing,
};

export const Piece = ({ piece, color }) => {
  const { theme } = useTheme();
  return (
    <FontAwesomeIcon
      icon={pieceIcons[piece]}
      size="2x"
      color={color === "white" ? theme?.pieceWhite : theme?.pieceBlack}
    />
  );
};
