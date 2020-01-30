// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let area = 8;

let chessBoard = "";

for (let height = 0; height < area; height++) {
  for (let width = 0; width < area; width++) {
    if ((width + height) % 2 == 0) {
      chessBoard += "#";
    } else {
      chessBoard += " ";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);
