window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
window.addEventListener('load', function() {

tick();
});


var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
FPS = 30;
var pii = 2*Math.PI;
var zero = 0;
var circles = [];
 function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), root = document.documentElement;

    // return relative mouse position
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x: mouseX,
      y: mouseY
    };
  } //shameful copy and paste




function pushCircles(xx, yy, rr, clr) {
circles.push({
x: xx,
y: yy,
r: rr,
color: clr
});
}


pushCircles((canvas.width / 2), (canvas.height / 2), 20, "red");



function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);


for(i = 0; i < circles.length; i++) {

ctx.beginPath();
ctx.fillStyle = circles[i].color;
ctx.arc(circles[i].x,circles[i].y,circles[i].r,zero,pii);
ctx.fill();

	canvas.addEventListener('mousemove', function(evt) {
mousePos = getMousePos(canvas, evt);
for(i = 0; i < circles.length; i++) {
ctx.beginPath();
ctx.fillStyle = circles[i].color;
ctx.arc(circles[i].x,circles[i].y,circles[i].r,zero,pii);
ctx.fill();
switch(circles[i].color) {
	case "red": 
circles[i].r = mousePos.y / 2;
break;
case "green": 
circles[i].r = mousePos.x / 15;
break;
case "yellow": 
circles[i].r = mousePos.x / 10;
break;
case "blue": 
circles[i].r = mousePos.y / 6;
break;
default:
circles[i].r = mousePos.y / 6;
break;
}
}
	});
}
};


function tick() {
requestAnimFrame(tick);

draw();

}