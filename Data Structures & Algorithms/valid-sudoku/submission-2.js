const ROWS_LENGTH = 9;
const COLUMNS_LENGTH = 9;

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9);
        const columns = new Array(9);
        const squares = new Array(9);

        for (let i = 0; i < ROWS_LENGTH; i++) {
            rows[i] = new Set();
            for (let j = 0; j < COLUMNS_LENGTH; j++) {
                if (!columns[j]) {
                    columns[j] = new Set();
                }

                const val = board[i][j];

                if (val === '.') {
                    continue;
                }

                if (rows[i].has(val)) {
                    return false;
                } else {
                    rows[i].add(val);
                }

                if (columns[j].has(val)) {
                    return false;
                } else {
                    columns[j].add(val);
                }

                const square = Math.floor(i / 3) * 3 + Math.floor(j / 3)

                if (!squares[square]) {
                    squares[square] = new Set();
                }

                if (squares[square].has(val)) {
                    return false;
                } else {
                    squares[square].add(val);
                }
            }
        }

        return true;
    }
}
