import { COLS, ROWS } from "../constants";

export default (col, row) => (COLS.indexOf(col) + ROWS.indexOf(row)) % 2 === 1;
