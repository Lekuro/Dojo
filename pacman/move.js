function moveUp() {
  if (end !== 3) {
    if (world[ninjaman.y - 1][ninjaman.x] != 1) {
      ninjaman.y--;
    }
    if (world[ninjaman.y][ninjaman.x] == 2) {
      scoreSushi += cost.sushi;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    if (world[ninjaman.y][ninjaman.x] == 3) {
      scoreOnigiri += cost.onigiri;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    scoreTotal = scoreSushi + scoreOnigiri;
    print[2].innerHTML = scoreTotal;
    drawWorld();
    drawNinjaman();
  } else if (scoreTotal === totalCost) {
    if (world[ninjaman.y - 1][ninjaman.x] != 1) {
      ninjaman.y--;
    }
    drawWorld();
    drawNinjaman();
  }
}
function moveLeft() {
  if (end !== 3) {
    if (world[ninjaman.y][ninjaman.x - 1] != 1) {
      ninjaman.x--;
    }
    if (world[ninjaman.y][ninjaman.x] == 2) {
      scoreSushi += cost.sushi;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    if (world[ninjaman.y][ninjaman.x] == 3) {
      scoreOnigiri += cost.onigiri;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    scoreTotal = scoreSushi + scoreOnigiri;
    print[2].innerHTML = scoreTotal;
    drawWorld();
    drawNinjaman();
  } else if (scoreTotal === totalCost) {
    if (world[ninjaman.y][ninjaman.x - 1] != 1) {
      ninjaman.x--;
    }
    drawWorld();
    drawNinjaman();
  }
}
function moveRight() {
  if (end !== 3) {
    if (world[ninjaman.y][ninjaman.x + 1] != 1) {
      ninjaman.x++;
    }
    if (world[ninjaman.y][ninjaman.x] == 2) {
      scoreSushi += cost.sushi;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    if (world[ninjaman.y][ninjaman.x] == 3) {
      scoreOnigiri += cost.onigiri;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    scoreTotal = scoreSushi + scoreOnigiri;
    print[2].innerHTML = scoreTotal;
    drawWorld();
    drawNinjaman();
  } else if (scoreTotal === totalCost) {
    if (world[ninjaman.y][ninjaman.x + 1] != 1) {
      ninjaman.x++;
    }
    drawWorld();
    drawNinjaman();
  }
}
function moveDown() {
  if (end !== 3) {
    if (world[ninjaman.y + 1][ninjaman.x] != 1) {
      ninjaman.y++;
    }
    if (world[ninjaman.y][ninjaman.x] == 2) {
      scoreSushi += cost.sushi;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    if (world[ninjaman.y][ninjaman.x] == 3) {
      scoreOnigiri += cost.onigiri;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    scoreTotal = scoreSushi + scoreOnigiri;
    print[2].innerHTML = scoreTotal;
    drawWorld();
    drawNinjaman();
  } else if (scoreTotal === totalCost) {
    if (world[ninjaman.y + 1][ninjaman.x] != 1) {
      ninjaman.y++;
    }
    drawWorld();
    drawNinjaman();
  }
}
