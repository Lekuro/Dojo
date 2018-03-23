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
  console.log(world);
  return world;
}
