var end = 0;

var worldDict = {
  0: "block blank",
  1: "block wall",
  2: "block sushi",
  3: "block onigiri"
};

var widthScreen = screen.width;
var heightScreen = screen.height;
var size = { r: 15, c: 29 }; //15 33 29
size.c = Math.floor(widthScreen / 40 - 4);
size.r = Math.floor(heightScreen / 40 - 4);
console.log(widthScreen, heightScreen);
var fireworksSize;
size.c > size.r ? (fireworksSize = size.r) : (fireworksSize = size.c);

var world = [];
createRandomWorld();

var ninjaman = {
  x: 1,
  y: 1
};
var ghosts = [
  { x: 1, y: size.r - 2 },
  { x: size.c - 2, y: 1 },
  { x: size.c - 2, y: size.r - 2 },
  { x: Math.round((size.c - 2) / 2), y: size.r - 2 },
  { x: size.c - 2, y: Math.round((size.r - 2) / 2) }
];
var lessGhosts = 4;
if (size.r * size.c < 100) {
  lessGhosts = 4;
} else if (size.r * size.c < 200) {
  lessGhosts = 3;
} else if (size.r * size.c < 300) {
  lessGhosts = 2;
} else if (size.r * size.c < 400) {
  lessGhosts = 1;
} else {
  lessGhosts = 0;
}
//------count sushi and onigiri into random world-------------
var countSushi = 0;
var countOnigiri = 0;
for (var i = 1; i < size.r - 1; i++) {
  for (j = 1; j < size.c - 1; j++) {
    if (world[i][j] == 2) {
      countSushi++;
    }
    if (world[i][j] == 3) {
      countOnigiri++;
    }
  }
}
var scoreSushi = 0;
var scoreOnigiri = 0;
var scoreTotal;
var cost = {
  sushi: 10,
  onigiri: 5
};
var totalCost = countOnigiri * cost.onigiri + countSushi * cost.sushi;

var worldGhosts = [];
for (var i = 0; i < size.r; i++) {
  worldGhosts[i] = [];
  for (var j = 0; j < size.c; j++) {
    worldGhosts[i][j] = 0;
  }
}
for (i = 0; i < ghosts.length - lessGhosts; i++) {
  worldGhosts[ghosts[i].y][ghosts[i].x] = 1;
}
//console.log(worldGhosts);

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
  for (var i = 0; i < ghosts.length - lessGhosts; i++) {
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
  output += '<div class="print"><b>3</b> life:</div>';
  //output += '<button id="size">size</button>';
  output += '<div class="print">points:</div>';
  output += '<div class="print"></div>';
  output += '<button class="move">up</button>';
  output += '<button class="move box">left</button>';
  output += '<button class="move box">right</button>';
  output += '<button class="move">down</button>';
  output += '<button id="newGame">new game</button>';
  document.getElementById("menu").innerHTML = output;
}
drawMenu();
//document.getElementById("size").addEventListener("click", changeSize);
document.getElementById("newGame").addEventListener("click", loadPage);
function loadPage() {
  window.location.reload();
}
document.getElementsByClassName("move")[0].addEventListener("click", moveUp);
document.getElementsByClassName("move")[1].addEventListener("click", moveLeft);
document.getElementsByClassName("move")[2].addEventListener("click", moveRight);
document.getElementsByClassName("move")[3].addEventListener("click", moveDown);

function drawBoom(i) {
  document.getElementsByClassName("boom")[i].style.top = ninjaman.y * 40 + "px";
  document.getElementsByClassName("boom")[i].style.left =
    ninjaman.x * 40 + "px";
}
function drawFireworks() {
  document.getElementById("fireworks").style.top = 0 + "px";
  document.getElementById("fireworks").style.left = 0 + "px";
  document.getElementById("fireworks").style.width = fireworksSize * 40 + "px";
  document.getElementById("fireworks").style.height = fireworksSize * 40 + "px";
  document.getElementById("fireworks").style.display = "block";
}

var print = document.getElementsByClassName("print");
document.onkeydown = function(e) {
  if (end !== 3) {
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
      //print[0].innerHTML = scoreSushi;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    if (world[ninjaman.y][ninjaman.x] == 3) {
      scoreOnigiri += cost.onigiri;
      //console.log(scoreOnigiri, world[ninjaman.y][ninjaman.x]);
      //print[1].innerHTML = scoreOnigiri;
      world[ninjaman.y][ninjaman.x] = 0;
    }
    scoreTotal = scoreSushi + scoreOnigiri;
    print[2].innerHTML = scoreTotal;
    drawWorld();
    drawNinjaman();
  } else if (scoreTotal === totalCost) {
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
    drawWorld();
    drawNinjaman();
  }
};
var b = document.getElementsByTagName("b")[0];
function moveGhosts() {
  for (var i = 0; i < ghosts.length - lessGhosts; i++) {
    var step = 0;
    if (ninjaman.x < ghosts[i].x) {
      if (
        world[ghosts[i].y][ghosts[i].x - 1] != 1 &&
        worldGhosts[ghosts[i].y][ghosts[i].x - 1] != 1
      ) {
        worldGhosts[ghosts[i].y][ghosts[i].x] = 0;
        ghosts[i].x--;
        worldGhosts[ghosts[i].y][ghosts[i].x] = 1;
        step++;
      }
    }
    if (ninjaman.x > ghosts[i].x) {
      if (
        world[ghosts[i].y][ghosts[i].x + 1] != 1 &&
        worldGhosts[ghosts[i].y][ghosts[i].x + 1] != 1
      ) {
        worldGhosts[ghosts[i].y][ghosts[i].x] = 0;
        ghosts[i].x++;
        worldGhosts[ghosts[i].y][ghosts[i].x] = 1;
        step++;
      }
    }
    if (step === 0) {
      if (ninjaman.y < ghosts[i].y) {
        if (
          world[ghosts[i].y - 1][ghosts[i].x] != 1 &&
          worldGhosts[ghosts[i].y - 1][ghosts[i].x] != 1
        ) {
          worldGhosts[ghosts[i].y][ghosts[i].x] = 0;
          ghosts[i].y--;
          worldGhosts[ghosts[i].y][ghosts[i].x] = 1;
        }
      }
      if (ninjaman.y > ghosts[i].y) {
        if (
          world[ghosts[i].y + 1][ghosts[i].x] != 1 &&
          worldGhosts[ghosts[i].y + 1][ghosts[i].x] != 1
        ) {
          worldGhosts[ghosts[i].y][ghosts[i].x] = 0;
          ghosts[i].y++;
          worldGhosts[ghosts[i].y][ghosts[i].x] = 1;
        }
      }
    }

    if (ninjaman.x === ghosts[i].x && ninjaman.y === ghosts[i].y) {
      drawBoom(end);
      end++;
      b.innerHTML = 3 - end;
    }
    if (scoreTotal === totalCost) {
      drawFireworks();
      end = 3;
    }
  }
  drawGhosts();
  //for (j = 0; j < ghosts.length; j++) {
  //  worldGhosts[ghosts[j].y][ghosts[j].x] = 1;
  // }
  //console.log(worldGhosts);
  //debugger;
}
function gameLoop() {
  moveGhosts();
  console.log("gameLoop is running!");
  var timer = setTimeout(gameLoop, 1000);
  if (end === 3) {
    clearTimeout(timer);
  }
}
gameLoop();
