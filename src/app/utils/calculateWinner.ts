import { Player } from "./interfaces";

export const calculateWinner = (matrix: number[][]): Player | null => {
    // Check rows and columns
    for (let row = 0; row < matrix.length; row++) {
      const rowSum = matrix[row][0] + matrix[row][1] + matrix[row][2];
      const colSum = matrix[0][row] + matrix[1][row] + matrix[2][row];

      if (rowSum === 3 || colSum === 3) {
        return Player.X;
      } else if (rowSum === -3 || colSum === -3) {
        return Player.O;
      }
    }

    // Check diagonals
    const diagonalSum1 = matrix[0][0] + matrix[1][1] + matrix[2][2];
    const diagonalSum2 = matrix[0][2] + matrix[1][1] + matrix[2][0];

    if (diagonalSum1 === 3 || diagonalSum2 === 3) {
      return Player.X;
    } else if (diagonalSum1 === -3 || diagonalSum2 === -3) {
      return Player.O;
    }

    return null;
  }