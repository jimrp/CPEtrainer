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
var counter = 0;
var answers = [0,0,0,0,0,0,0];
function newPage(){
  removeAns();
  document.getElementById("showall").style.visibility = "hidden";
  document.getElementById("hideall").style.visibility = "hidden";
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").setAttribute("usemap", "");
  document.getElementById("img").src="../images/pics/blank.jpg";
  document.getElementById("imgans").setAttribute("usemap", "");
  document.getElementById("imgans").src="../images/pics/blank.jpg";
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
document.querySelector(".close").addEventListener("click", function(){
  removeAns();
  document.getElementById("showall").style.visibility = "hidden";
  document.getElementById("hideall").style.visibility = "hidden";
	document.getElementById("img").setAttribute("usemap", "");
	document.getElementById("img").src="";
  document.getElementById("imgans").setAttribute("usemap", "");
	document.getElementById("imgans").src="";
  document.querySelector(".bg-modal").style.display = "none";
});
document.getElementById("back").onclick = function(){
  removeAns();
  document.getElementById("showall").style.visibility = "hidden";
  document.getElementById("hideall").style.visibility = "hidden";
	document.getElementById("img").setAttribute("usemap", "");
	document.getElementById("img").src="";
  document.getElementById("imgans").setAttribute("usemap", "");
	document.getElementById("imgans").src="";
  document.querySelector(".bg-modal").style.display = "none";
}
function addAns(num, leftanscoor, topanscoor, inht, leftcircoor, topcircoor){
	if (document.getElementById("corrans" + num) === null){
		var p1 = document.createElement("P");
		p1.setAttribute("id", "corrans" + num);
    p1.setAttribute("style", "color:blue; font-size:160%; font-weight:bold;");
		document.getElementById("modal-content").appendChild(p1);
		p1.style.position = "absolute";
		p1.style.left = leftanscoor + "px";
		p1.style.top = topanscoor + "px";
		p1.innerHTML = inht;
		p1.style.visibility = "hidden";
		var p2 = document.createElement("P");
		p2.setAttribute("id", "corrcirc" + num);
		p2.setAttribute("style", "color:blue; font-size:385%;");
		document.getElementById("modal-content").appendChild(p2);
		p2.style.position = "absolute";
		p2.style.left = leftcircoor + "px";
		p2.style.top = topcircoor + "px";
		p2.innerHTML = "x";
		p2.style.visibility = "hidden";
	}
}
function removeAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 2)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("modal-content").removeChild(document.getElementById("corrans" + i));
		document.getElementById("modal-content").removeChild(document.getElementById("corrcirc" + i));
	}
  counter = 0;
  answers = [0,0,0,0,0,0,0];
}
function showAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 2)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrans" + i).style.visibility = "visible";
	}
  answers = [1,1,1,1,1,1,1];
}
function hideAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 2)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrans" + i).style.visibility = "hidden";
	}
  answers = [0,0,0,0,0,0,0];
}
function hideCirc(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 2)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrcirc" + i).style.visibility = "hidden";
	}
}
document.getElementById("modal-ans").onclick = function(){
  if (counter==1) {
    document.getElementById("showall").style.visibility = "hidden";
    document.getElementById("hideall").style.visibility = "hidden";
    document.getElementById("img").src="../images/zoom/1r42.jpg";
    document.getElementById("img").setAttribute("usemap", "");
    document.getElementById("imgans").src="../images/zoom/questions/1r41q.jpg";
    counter = 2;
    for (var i = 1; i <= 7; i++) {
      if (answers[i-1] == 1) {
        document.getElementById("corrans" + i).style.visibility = "hidden";
        document.getElementById("corrcirc" + i).style.visibility = "visible";
      }
    }
  }else if (counter==2){
    document.getElementById("img").src="../images/zoom/1r41.jpg";
    document.getElementById("img").setAttribute('usemap', "#map11");
    document.getElementById("imgans").src="../images/zoom/questions/1r41q.jpg";
    document.getElementById("showall").style.visibility = "visible";
    document.getElementById("hideall").style.visibility = "visible";
    counter = 1;
    addAns(1, 260, 300, "B", 230, 200);
    addAns(2, 260, 606, "D", 230, 560);
    addAns(3, 260, 816, "F", 725, 235);
    addAns(4, 720, 133, "H", 725, 570);
    addAns(5, 720, 393, "C", 230, 380);
    addAns(6, 720, 637, "G", 725, 395);
    addAns(7, 720, 896, "E", 725, 50);
    for (var i = 1; i <= 7; i++) {
      if (answers[i-1] == 1) {
        document.getElementById("corrans" + i).style.visibility = "visible";
        document.getElementById("corrcirc" + i).style.visibility = "hidden";
      }
    }
  }
}
document.getElementById("one1").onclick = function(){
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").src="../images/zoom/1r41.jpg";
  document.getElementById("img").setAttribute('usemap', "#map11");
  document.getElementById("imgans").src="../images/zoom/questions/1r41q.jpg";
  document.getElementById("showall").style.visibility = "visible";
  document.getElementById("hideall").style.visibility = "visible";
  counter = 1;
  addAns(1, 260, 300, "B", 230, 200);
  addAns(2, 260, 606, "D", 230, 560);
  addAns(3, 260, 816, "F", 725, 235);
  addAns(4, 720, 133, "H", 725, 570);
  addAns(5, 720, 393, "C", 230, 380);
  addAns(6, 720, 637, "G", 725, 395);
  addAns(7, 720, 896, "E", 725, 50);
}
document.getElementById("two1").onclick = function(){
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").src="../images/zoom/1r42.jpg";
  document.getElementById("imgans").src="../images/zoom/questions/1r41q.jpg";
  counter = 2;
}
document.getElementById("one11").onclick = function(){
  document.getElementById("corrans" + 1).style.visibility = "visible";
  answers[0] = 1;
}
document.getElementById("one12").onclick = function(){
  document.getElementById("corrans" + 2).style.visibility = "visible";
  answers[1] = 1;
}
document.getElementById("one13").onclick = function(){
  document.getElementById("corrans" + 3).style.visibility = "visible";
  answers[2] = 1;
}
document.getElementById("one14").onclick = function(){
  document.getElementById("corrans" + 4).style.visibility = "visible";
  answers[3] = 1;
}
document.getElementById("one15").onclick = function(){
  document.getElementById("corrans" + 5).style.visibility = "visible";
  answers[4] = 1;
}
document.getElementById("one16").onclick = function(){
  document.getElementById("corrans" + 6).style.visibility = "visible";
  answers[5] = 1;
}
document.getElementById("one17").onclick = function(){
  document.getElementById("corrans" + 7).style.visibility = "visible";
  answers[6] = 1;
}
