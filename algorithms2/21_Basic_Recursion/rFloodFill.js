function rFloodFill(canvas2D, startXY, newColor) {
  console.log("rFloodFill() : ", canvas2D, startXY, newColor);
  var x = startXY[0];
  var y = startXY[1];
  var mark = canvas2D[y][x];
  console.log(x, y, mark);
  function fill(y, x) {
    if (canvas2D[y][x] !== mark) return;
    canvas2D[y][x] = newColor;
    if (y - 1 >= 0) fill(y - 1, x);
    if (y + 1 < canvas2D.length) fill(y + 1, x);
    if (x - 1 >= 0) fill(y, x - 1);
    if (x + 1 < canvas2D[y].length) fill(y, x + 1);
  }
  fill(y, x);
  //console.log("result : ", canvas2D);
  return canvas2D;
}
console.log(
  "rFloodFill Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). BuildfloodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.  Given canvas2D of  [    [3,2,3,4,3],    [2,3,3,4,0],    [7,3,3,5,3],    [6,5,3,4,1],    [1,2,3,3,3]  ]  …plus startXY of [2,2] and newColor of 1 .. . … we examine the cells that are directly (not diagonally) adjacent to startXY , which is [2,2] .If any have a value of 3 (the original value at startXY ), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed . [    [3,2,1,4,3],    [2,1,1,4,0],    [7,1,1,5,3],    [6,5,1,4,1],    [1,2,1,1,1]  ]  "
);

var matrix = [
  [3, 2, 3, 4, 3],
  [2, 3, 3, 4, 0],
  [7, 3, 3, 5, 3],
  [6, 5, 3, 4, 1],
  [1, 2, 3, 3, 3]
];
console.log(rFloodFill(matrix, [2, 2], 9));
console.log("-----------------------------------------");
