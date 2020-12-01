var player = document.getElementById("player");
var leftSide = player.offsetLeft;
var topSide = player.offsetTop;

// 87 = top   W
// 83 = down  S
// 65 = left  A
// 68 = right D

document.onkeydown = movePlayer;

function movePlayer(e) {
  switch (e.keyCode) {
    case 87:
      if (topSide != 0) {
        topSide = topSide - 10;
        player.style.top = topSide + "px";
      }
      break;
    case 83:
      if (topSide != 450) {
        topSide = topSide + 10;
        player.style.top = topSide + "px";
      }
      break;
    case 65:
      if (leftSide != 0) {
        leftSide = leftSide - 10;
        player.style.left = leftSide + "px";
      }
      break;
    case 68:
      if (leftSide != 450){
        leftSide = leftSide + 10;
        player.style.left = leftSide + "px";
      }
      break;
  }
}