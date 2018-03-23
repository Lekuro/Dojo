function createRandomWorld() {
  for (var i = 0; i < size.r; i++) {
    world[i] = [];
    for (var j = 0; j < size.c; j++) {
      if (i == 0 || i == size.r - 1 || j == 0 || j == size.c - 1) {
        world[i][j] = 1;
      } else if (i == 1 && j == 1) {
        world[i][j] = 0;
      } else {
        world[i][j] = Math.floor(1 + Math.random() * 3);
      }
    }
  }
  //Check from left to right lonely elements and continue them
  for (var i = 1; i < size.r - 1; i++) {
    for (var j = 1; j < size.c - 2; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j + 1] == 1 &&
          world[i - 1][j] == 1 &&
          world[i + 1][j] == 1
        ) {
          world[i][j + 1] = Math.floor(2 + Math.random() * 2);
        }
      }
    }
  }
  //drawWorld(); debugger;
  //Check from top to bottom lonely elements and continue them
  for (var i = 1; i < size.r - 2; i++) {
    for (var j = 1; j < size.c - 1; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j + 1] == 1 &&
          world[i][j - 1] == 1 &&
          world[i + 1][j] == 1
        ) {
          world[i + 1][j] = Math.floor(2 + Math.random() * 2);
        }
      }
    }
  }
  //drawWorld(); debugger;
  //Check from right to left lonely elements and continue them
  for (var i = 1; i < size.r - 1; i++) {
    for (var j = size.c - 2; j >= 2; j--) {
      if (world[i][j] != 1) {
        if (
          world[i][j - 1] == 1 &&
          world[i - 1][j] == 1 &&
          world[i + 1][j] == 1
        ) {
          world[i][j - 1] = Math.floor(2 + Math.random() * 2);
        }
      }
    }
  }
  //drawWorld(); debugger;
  //Check from bottom to top lonely elements and continue them
  for (var i = size.r - 2; i > 1; i--) {
    for (var j = 1; j < size.c - 1; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j + 1] == 1 &&
          world[i][j - 1] == 1 &&
          world[i - 1][j] == 1
        ) {
          world[i - 1][j] = Math.floor(2 + Math.random() * 2);
        }
      }
    }
  }
  //drawWorld(); debugger;
  //check cube 3x3
  for (var i = 2; i < size.r - 2; i++) {
    for (var j = 2; j < size.c - 2; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j + 1] != 1 &&
          world[i][j - 1] != 1 &&
          world[i - 1][j] != 1 &&
          world[i + 1][j] < 2 != 1 &&
          world[i + 1][j + 1] != 1 &&
          world[i - 1][j + 1] != 1 &&
          world[i - 1][j - 1] != 1 &&
          world[i + 1][j - 1] != 1
        ) {
          world[i][j] = 1;
        }
      }
    }
  }
  //drawWorld(); debugger;
  console.log(world);
  return world;
}
