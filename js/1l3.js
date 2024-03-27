const scrollingimg = document.getElementById("modal-content");
scrollingimg.addEventListener("mousedown", mouseDown);
scrollingimg.addEventListener("mouseup", mouseUp);
scrollingimg.addEventListener("mousemove", mouseMove);
document.body.addEventListener("mouseup", function(){clicked = false;});
let clicked = false;
let prevy;
let scrollup;
let stx, sty;
function mouseDown(ev){
  clicked = true;
  prevy = ev.pageY;
  scrollup = scrollingimg.scrollTop;
  stx = ev.clientX/2-2;
  sty = (ev.clientY/2)-47;
}
function mouseMove(ev){
  if (clicked == true) {
    const walk = ev.pageY - prevy;
    scrollingimg.scrollTop = scrollup - walk;
  }
}
function mouseUp(ev){
  clicked = false;
  console.log("mapcoors:", stx, ",", sty, ",", ev.clientX/2-2, ",", (ev.clientY/2)-47, " anscoors:", ev.clientX, ",", ev.clientY-110);
}
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.lineWidth = 5;
var down = false;
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", function(){
  down = true;
  context.beginPath();
  context.moveTo(xPos, yPos);
  canvas.addEventListener("mousemove", draw);
});
canvas.addEventListener("mouseup", function(){down = false;});
function draw(e){
  xPos = e.clientX - canvas.offsetLeft;
  yPos = e.clientY - canvas.offsetTop;

  if (down == true) {
    context.lineTo(xPos, yPos);
    context.stroke();
  }
}
function changeColor(color){
  document.querySelector("#canvascontainer").style.display = "flex";
  context.strokeStyle = color;
  if (color == 'white') {
    context.lineWidth = 25;
  }
  else {
    context.lineWidth = 5;
  }
}
function clearCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  document.querySelector("#canvascontainer").style.display = "none";
}
function newPage(){
  removeAns();
  document.getElementById("audioplayer").pause();
  document.getElementById("audioplayer").currentTime = 0;
  document.getElementById("audioplayer").src = "";
  document.getElementById("showall").style.visibility = "hidden";
  document.getElementById("hideall").style.visibility = "hidden";
  document.getElementById("audioplayer").style.visibility = "hidden";
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").setAttribute("usemap", "");
  document.getElementById("img").src="../images/pics/blank.jpg";
  document.getElementById("imgans").setAttribute("usemap", "");
  document.getElementById("imgans").src="../images/pics/blank.jpg";
  counter = 0;
}
document.getElementById("fullscreen").onclick = function(){
  var elem = document.documentElement;
  if(window.innerWidth == screen.width && window.innerHeight == screen.height){
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
}
var counter = 0;
document.querySelector(".close").addEventListener("click", function(){
  removeAns();
  document.getElementById("audioplayer").pause();
  document.getElementById("audioplayer").currentTime = 0;
  document.getElementById("audioplayer").src = "";
  document.getElementById("showall").style.visibility = "hidden";
  document.getElementById("hideall").style.visibility = "hidden";
  document.getElementById("audioplayer").style.visibility = "hidden";
	document.getElementById("img").setAttribute("usemap", "");
	document.getElementById("img").src="";
  document.getElementById("imgans").setAttribute("usemap", "");
	document.getElementById("imgans").src="";
  document.querySelector(".bg-modal").style.display = "none";
  counter = 0;
});
document.getElementById("back").onclick = function(){
  removeAns();
  document.getElementById("audioplayer").pause();
  document.getElementById("audioplayer").currentTime = 0;
  document.getElementById("audioplayer").src = "";
  document.getElementById("showall").style.visibility = "hidden";
  document.getElementById("hideall").style.visibility = "hidden";
  document.getElementById("audioplayer").style.visibility = "hidden";
	document.getElementById("img").setAttribute("usemap", "");
	document.getElementById("img").src="";
  document.getElementById("imgans").setAttribute("usemap", "");
	document.getElementById("imgans").src="";
  document.querySelector(".bg-modal").style.display = "none";
  counter = 0;
}
// Add an answer
function addAns(num, leftanscoor, topanscoor, anstext, leftcircoor, topcircoor, circtext){
	if (document.getElementById("corrans" + num) === null){
		var p1 = document.createElement("P");
		p1.setAttribute("id", "corrans" + num);
    p1.setAttribute("style", "color:blue; font-size:160%; font-weight:bold;");
		document.getElementById("modal-content").appendChild(p1);
		p1.style.position = "absolute";
		p1.style.left = leftanscoor + "px";
		p1.style.top = topanscoor + "px";
		p1.innerHTML = anstext;
		p1.style.visibility = "hidden";
		var p2 = document.createElement("P");
		p2.setAttribute("id", "corrcirc" + num);
		p2.setAttribute("style", "color:green; font-size:385%;");
		document.getElementById("modal-content").appendChild(p2);
		p2.style.position = "absolute";
		p2.style.left = leftcircoor + "px";
		p2.style.top = topcircoor + "px";
		p2.innerHTML = circtext;
		p2.style.visibility = "hidden";
	}
}
//Remove answers
function removeAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 3)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("modal-content").removeChild(document.getElementById("corrans" + i));
		document.getElementById("modal-content").removeChild(document.getElementById("corrcirc" + i));
	}
}
//Reveal answers
function showAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 3)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrans" + i).style.visibility = "visible";
    document.getElementById("corrcirc" + i).style.visibility = "visible";
	}
}
//Hide answers
function hideAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 3)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrans" + i).style.visibility = "hidden";
	}
}
function hideCirc(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 3)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrcirc" + i).style.visibility = "hidden";
	}
}
document.getElementById("one1").onclick = function(){
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").src="../images/zoom/1l3.jpg";
  document.getElementById("img").setAttribute('usemap', "#map11");
  document.getElementById("imgans").src="../images/zoom/questions/1l3q.jpg";
  document.getElementById("showall").style.visibility = "visible";
  document.getElementById("hideall").style.visibility = "visible";
  document.getElementById("audioplayer").style.visibility = "visible";
  document.getElementById("audioplayer").src = "../audio/test1/4.mp3";
  addAns(1, 380, 252, "F", 0, 377, "o");
  addAns(2, 380, 302, "E", 0, 336, "o");
  addAns(3, 380, 354, "H", 0, 458, "o");
  addAns(4, 380, 405, "B", 0, 214, "o");
  addAns(5, 380, 456, "G", 0, 418, "o");
  addAns(6, 920, 252, "E", 537, 332, "o");
  addAns(7, 920, 302, "H", 537, 525, "o");
  addAns(8, 920, 354, "A", 537, 123, "o");
  addAns(9, 920, 405, "C", 537, 250, "o");
  addAns(10, 920, 456, "B", 537, 186, "o");
}
document.getElementById("one11").onclick = function(){
  document.getElementById("corrans" + 1).style.visibility = "visible";
  document.getElementById("corrcirc" + 1).style.visibility = "visible";
}
document.getElementById("one12").onclick = function(){
  document.getElementById("corrans" + 2).style.visibility = "visible";
  document.getElementById("corrcirc" + 2).style.visibility = "visible";
}
document.getElementById("one13").onclick = function(){
  document.getElementById("corrans" + 3).style.visibility = "visible";
  document.getElementById("corrcirc" + 3).style.visibility = "visible";
}
document.getElementById("one14").onclick = function(){
  document.getElementById("corrans" + 4).style.visibility = "visible";
  document.getElementById("corrcirc" + 4).style.visibility = "visible";
}
document.getElementById("one15").onclick = function(){
  document.getElementById("corrans" + 5).style.visibility = "visible";
  document.getElementById("corrcirc" + 5).style.visibility = "visible";
}
document.getElementById("one16").onclick = function(){
  document.getElementById("corrans" + 6).style.visibility = "visible";
  document.getElementById("corrcirc" + 6).style.visibility = "visible";
}
document.getElementById("one17").onclick = function(){
  document.getElementById("corrans" + 7).style.visibility = "visible";
  document.getElementById("corrcirc" + 7).style.visibility = "visible";
}
document.getElementById("one18").onclick = function(){
  document.getElementById("corrans" + 8).style.visibility = "visible";
  document.getElementById("corrcirc" + 8).style.visibility = "visible";
}
document.getElementById("one19").onclick = function(){
  document.getElementById("corrans" + 9).style.visibility = "visible";
  document.getElementById("corrcirc" + 9).style.visibility = "visible";
}
document.getElementById("one110").onclick = function(){
  document.getElementById("corrans" + 10).style.visibility = "visible";
  document.getElementById("corrcirc" + 10).style.visibility = "visible";
}
