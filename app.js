
var ball = document.getElementById("ball");
var velocity = 13;
var positionX = 0;
positionY = 0;
var reverse = false;

function moveBall() {
    var Ymin = 0;
    var Ymax = 688;
    var Xmin = 0;
    var Xmax = 688;

    if (reverse) {
        positionX = positionX - velocity;
        positionY = positionY - velocity;
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px";
    } else {
        positionX = positionX + velocity;
        positionY = positionY + velocity;
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px";
    }

    if (positionX > Xmax || positionX < Xmin ||
    positionY > Ymax || positionY < Ymin) {
        reverse = !reverse;
    }
}

setInterval(moveBall, 100);



