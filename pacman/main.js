var worldDict = {
  0: "block blank",
  1: "block wall",
  2: "block sushi",
  3: "block onigiri"
};
var size = { r: 12, c: 21 };
var world = [];
createRandomWorld();

var ninjaman = {
  x: 1,
  y: 1
};
var ghosts = [
  { x: size.c - 2, y: 1 },
  { x: 1, y: size.r - 2 },
  { x: size.c - 2, y: size.r - 2 },
  { x: Math.round((size.c - 2) / 2), y: size.r - 2 },
  { x: size.c - 2, y: Math.round((size.r - 2) / 2) }
];

var scoreSushi = 0;
var scoreOnigiri = 0;
var cost = {
  sushi: 10,
  onigiri: 5
};
function drawWorld() {
  output = "";
  for (var row = 0; row < world.length; row++) {
    output += '<div class="row">';
    for (var x = 0; x < world[row].length; x++) {
      output += '<div class="' + worldDict[world[row][x]] + '"></div>';
      //console.log("value: ", worldDict[world[row][x]]);
    }
    output += "</div>";
  }
  document.getElementById("world").innerHTML = output;
}
drawWorld();

function drawNinjaman() {
  document.getElementById("ninjaman").style.top = ninjaman.y * 40 + "px";
  document.getElementById("ninjaman").style.left = ninjaman.x * 40 + "px";
}
drawNinjaman();

function drawGhosts() {
  content = "";
  //console.log(enemies);
  for (var i = 0; i < ghosts.length; i++) {
    //console.log(idx);
    content +=
      '<div class="ghost" style="left:' +
      ghosts[i].x * 40 +
      "px; top: " +
      ghosts[i].y * 40 +
      'px;"></div>';
  }
  document.getElementById("ghosts").innerHTML = content;
}
drawGhosts();

function drawMenu() {
  output = "";
  output += '<div><div class="block sushi"></div>';
  output += '<div class="print"></div></div>';
  output += '<div><div class="block onigiri"></div>';
  output += '<div class="print"></div></div>';
  output += '<div><div class="block sushi"></div>';
  output += '<div class="block onigiri"></div>';
  output += '<div class="print"></div></div>';
  document.getElementById("menu").innerHTML = output;
}
drawMenu();

var print = document.getElementsByClassName("print");
document.onkeydown = function(e) {
  if (e.keyCode == 37) {
    if (world[ninjaman.y][ninjaman.x - 1] != 1) {
      ninjaman.x--;
    }
  }
  if (e.keyCode == 39) {
    if (world[ninjaman.y][ninjaman.x + 1] != 1) {
      ninjaman.x++;
    }
  }
  if (e.keyCode == 38) {
    if (world[ninjaman.y - 1][ninjaman.x] != 1) {
      ninjaman.y--;
    }
  }
  if (e.keyCode == 40) {
    if (world[ninjaman.y + 1][ninjaman.x] != 1) {
      ninjaman.y++;
    }
  }
  //console.log(ninjaman, world[ninjaman.y][ninjaman.x]);
  if (world[ninjaman.y][ninjaman.x] == 2) {
    scoreSushi += cost.sushi;
    //console.log(scoreSushi, world[ninjaman.y][ninjaman.x]);
    print[0].innerHTML = scoreSushi;
    world[ninjaman.y][ninjaman.x] = 0;
  }
  if (world[ninjaman.y][ninjaman.x] == 3) {
    scoreOnigiri += cost.onigiri;
    //console.log(scoreOnigiri, world[ninjaman.y][ninjaman.x]);
    print[1].innerHTML = scoreOnigiri;
    world[ninjaman.y][ninjaman.x] = 0;
  }
  print[2].innerHTML = scoreSushi + scoreOnigiri;
  drawWorld();
  drawNinjaman();
};
function moveGhosts() {
  for (var i = 0; i < ghosts.length; i++) {
    if (ninjaman.x < ghosts[i].x) {
      if (world[ghosts[i].y][ghosts[i].x - 1] != 1) {
        ghosts[i].x--;
      }
    }
    if (ninjaman.x > ghosts[i].x) {
      if (world[ghosts[i].y][ghosts[i].x + 1] != 1) {
        ghosts[i].x++;
      }
    }
    if (ninjaman.y < ghosts[i].y) {
      if (world[ghosts[i].y - 1][ghosts[i].x] != 1) {
        ghosts[i].y--;
      }
    }
    if (ninjaman.y > ghosts[i].y) {
      if (world[ghosts[i].y + 1][ghosts[i].x] != 1) {
        ghosts[i].y++;
      }
    }
    drawGhosts();
  }
}
function gameLoop() {
  moveGhosts();
  console.log("gameLoop is running!");
  var timer = setTimeout(gameLoop, 1000);
}
gameLoop();
