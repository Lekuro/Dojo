function createRandomWorld() {
  //create random world with blue and black border
  for (var i = 0; i < size.r; i++) {
    world[i] = [];
    for (var j = 0; j < size.c; j++) {
      if (i == 0 || i == size.r - 1 || j == 0 || j == size.c - 1) {
        world[i][j] = 1;
      } else if (i == 1 && j == 1) {
        // || (i == 1 && j == size.c - 2) || (i == size.r - 2 && j == 1) || (i == size.r - 2 && j == size.c - 2)
        world[i][j] = 0;
      } else if (i == 1 || j == 1 || i == size.r - 2 || j == size.c - 2) {
        world[i][j] = Math.floor(2 + Math.random() * 2);
      } else {
        world[i][j] = Math.floor(1 + Math.random() * 3);
      }
    }
  }
  //drawWorld(); debugger;
  //check square elements that black border would be straight
  for (var i = 1; i < size.r; i++) {
    for (var j = 1; j < size.c; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j - 1] != 1 &&
          world[i - 1][j - 1] != 1 &&
          world[i - 1][j] != 1
        ) {
          if (i == size.r - 2 || j == size.c - 2) {
            world[i - 1][j - 1] = 1;
          } else {
            world[i][j] = 1;
          }
        }
      }
    } //drawWorld(); debugger;
  }
  //drawWorld(); debugger;
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
  //---------look like nice-----------
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
  //check square elements one more time
  function checkSpuare() {
    for (var i = 2; i < size.r - 2; i++) {
      for (var j = 2; j < size.c - 2; j++) {
        if (world[i][j] != 1) {
          if (
            world[i][j - 1] != 1 &&
            world[i - 1][j - 1] != 1 &&
            world[i - 1][j] != 1
          ) {
            if (world[i - 1][j + 1] == 1 && world[i - 2][j] == 1) {
              world[i - 1][j] = 1;
            } else if (world[i - 1][j - 2] == 1 && world[i - 2][j - 1] == 1) {
              world[i - 1][j - 1] = 1;
            } else if (world[i][j - 2] == 1 && world[i + 1][j - 1] == 1) {
              world[i][j - 1] = 1;
            } else if (world[i][j + 1] == 1 && world[i + 1][j] == 1) {
              world[i][j] = 1;
            }
          }
        }
      } //drawWorld(); debugger;
    }
    if (
      world[2][size.c - 2] != 1 &&
      world[2][size.c - 3] != 1 &&
      world[1][size.c - 3] != 1 &&
      world[1][size.c - 2] != 1
    ) {
      if (world[2][size.c - 4] == 1 && world[3][size.c - 3] == 1) {
        world[2][size.c - 3] = 1;
      }
    }
    if (
      world[size.r - 2][2] != 1 &&
      world[size.r - 3][2] != 1 &&
      world[size.r - 2][1] != 1 &&
      world[size.r - 3][1] != 1
    ) {
      if (world[size.r - 4][2] == 1 && world[size.r - 3][3] == 1) {
        world[size.r - 3][2] = 1;
      }
    }
    if (
      world[size.r - 2][size.c - 2] != 1 &&
      world[size.r - 2][size.c - 3] != 1 &&
      world[size.r - 3][size.c - 3] != 1 &&
      world[size.r - 3][size.c - 2] != 1
    ) {
      if (
        world[size.r - 3][size.c - 4] == 1 &&
        world[size.r - 4][size.c - 3] == 1
      ) {
        world[size.r - 3][size.c - 3] = 1;
      }
    }
    for (var i = 3; i < size.r - 3; i++) {
      if (
        world[i][size.c - 2] != 1 &&
        world[i][size.c - 3] != 1 &&
        world[i - 1][size.c - 3] != 1 &&
        world[i - 1][size.c - 2] != 1
      ) {
        if (world[i - 1][size.c - 4] == 1 && world[i - 2][size.c - 3] == 1) {
          world[i - 1][size.c - 3] = 1;
        }
        if (world[i][size.c - 4] == 1 && world[i + 1][size.c - 3] == 1) {
          world[i][size.c - 3] = 1;
        }
      } //drawWorld(); debugger;
    }
    for (var j = 3; j < size.c - 3; j++) {
      if (
        world[size.r - 2][j] != 1 &&
        world[size.r - 2][j - 1] != 1 &&
        world[size.r - 3][j - 1] != 1 &&
        world[size.r - 3][j] != 1
      ) {
        if (world[size.r - 3][j + 1] == 1 && world[size.r - 4][j] == 1) {
          world[size.r - 3][j] = 1;
        }
        if (world[size.r - 3][j - 2] == 1 && world[size.r - 4][j - 1] == 1) {
          world[size.r - 3][j - 1] = 1;
        }
      }
    } //drawWorld(); debugger;
  }
  checkSpuare();
  //drawWorld(); debugger;
  //check rectangle elements 3x2
  for (var i = 2; i < 3; i++) {
    for (var j = 3; j < size.c; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j - 2] != 1 &&
          world[i - 1][j - 2] != 1 &&
          world[i][j - 1] != 1 &&
          world[i - 1][j - 1] != 1 &&
          world[i - 1][j] != 1
        ) {
          if (world[i + 1][j - 1] == 1) {
            world[i][j - 1] = 1;
          }
        }
      }
    } //drawWorld(); debugger;
  }
  for (var i = 3; i < size.r; i++) {
    for (var j = 3; j < size.c; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j - 2] != 1 &&
          world[i - 1][j - 2] != 1 &&
          world[i][j - 1] != 1 &&
          world[i - 1][j - 1] != 1 &&
          world[i - 1][j] != 1
        ) {
          if (world[i - 2][j - 1] == 1) {
            world[i - 1][j - 1] = 1;
          } else if (world[i + 1][j - 1] == 1) {
            world[i][j - 1] = 1;
          }
        }
      }
    } //drawWorld(); debugger;
  }
  //drawWorld(); debugger;
  //check rectangle elements 2x3
  for (var i = 3; i < size.r; i++) {
    for (var j = 2; j < 3; j++) {
      if (world[i][j] != 1) {
        if (
          world[i - 2][j - 1] != 1 &&
          world[i - 2][j] != 1 &&
          world[i - 1][j - 1] != 1 &&
          world[i - 1][j] != 1 &&
          world[i][j - 1] != 1
        ) {
          if (world[i - 1][j + 1] == 1) {
            world[i - 1][j] = 1;
          }
        }
      }
    } //drawWorld(); debugger;
  }
  for (var i = 3; i < size.r; i++) {
    for (var j = 3; j < size.c; j++) {
      if (world[i][j] != 1) {
        if (
          world[i - 2][j - 1] != 1 &&
          world[i - 2][j] != 1 &&
          world[i - 1][j - 1] != 1 &&
          world[i - 1][j] != 1 &&
          world[i][j - 1] != 1
        ) {
          if (world[i - 1][j - 2] == 1) {
            world[i - 1][j - 1] = 1;
          } else if (world[i - 1][j + 1] == 1) {
            world[i - 1][j] = 1;
          }
        }
      }
    } //drawWorld(); debugger;
  }
  //drawWorld(); debugger;
  checkSpuare();
  //drawWorld(); debugger;
  //Check dead end from left to right
  for (var i = 1; i < size.r - 1; i++) {
    for (var j = 1; j < size.c - 2; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j + 1] == 1 &&
          world[i - 1][j] == 1 &&
          world[i + 1][j] == 1
        ) {
          world[i][j] = 1;
        }
      }
    }
  }
  //drawWorld(); debugger;
  //check dead end from top to bottom
  for (var i = 1; i < size.r - 2; i++) {
    for (var j = 1; j < size.c - 1; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j + 1] == 1 &&
          world[i][j - 1] == 1 &&
          world[i + 1][j] == 1
        ) {
          world[i][j] = 1;
        }
      }
    }
  }
  //drawWorld(); debugger;
  //Check dead end from right to left
  for (var i = 1; i < size.r - 1; i++) {
    for (var j = size.c - 2; j >= 2; j--) {
      if (world[i][j] != 1) {
        if (
          world[i][j - 1] == 1 &&
          world[i - 1][j] == 1 &&
          world[i + 1][j] == 1
        ) {
          world[i][j] = 1;
        }
      }
    }
  }
  //drawWorld(); debugger;
  //check dead end from bottom to top
  for (var i = size.r - 2; i > 1; i--) {
    for (var j = 1; j < size.c - 1; j++) {
      if (world[i][j] != 1) {
        if (
          world[i][j + 1] == 1 &&
          world[i][j - 1] == 1 &&
          world[i - 1][j] == 1
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
