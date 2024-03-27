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
var answers = [0,0,0,0,0,0];
function newPage(){
  removeAns();
  document.getElementById("showall").style.visibility = "hidden";
  document.getElementById("hideall").style.visibility = "hidden";
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").setAttribute("usemap", "");
  document.getElementById("img").src="../images/pics/blank.jpg";
  document.getElementById("imgans").setAttribute("usemap", "");
  document.getElementById("imgans").src="../images/pics/blank.jpg";
  counter = 0;
  answers = [0,0,0,0,0,0];
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
  counter = 0;
  answers = [0,0,0,0,0,0];
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
  counter = 0;
  answers = [0,0,0,0,0,0];
}
// Add an answer
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
		p2.setAttribute("style", "color:green; font-size:385%;");
		document.getElementById("modal-content").appendChild(p2);
		p2.style.position = "absolute";
		p2.style.left = leftcircoor + "px";
		p2.style.top = topcircoor + "px";
		p2.innerHTML = "o";
		p2.style.visibility = "hidden";
	}
}
//Remove answers
function removeAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 2)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("modal-content").removeChild(document.getElementById("corrans" + i));
		document.getElementById("modal-content").removeChild(document.getElementById("corrcirc" + i));
	}
}
//Reveal answers
function showAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 2)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrcirc" + i).style.visibility = "visible";
	}
  answers = [1,1,1,1,1,1];
}
//Hide answers
function hideAns(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 2)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrans" + i).style.visibility = "hidden";
	}
}
function hideCirc(){
	var i;
	var childcount = (document.getElementById("modal-content").childElementCount - 2)/2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrcirc" + i).style.visibility = "hidden";
	}
  answers = [0,0,0,0,0,0];
}
document.getElementById("modal-ans").onclick = function(){
  if (counter==1) {
    document.getElementById("img").src="../images/zoom/1r32.jpg";
    document.getElementById("img").setAttribute('usemap', "#map21");
    document.getElementById("imgans").src="../images/zoom/questions/1r31q.jpg";
    document.getElementById("showall").style.visibility = "visible";
    document.getElementById("hideall").style.visibility = "visible";
    counter = 2;
    addAns(1, 0, 0, "", 44, 118);
    addAns(2, 0, 0, "", 44, 244);
    addAns(3, 0, 0, "", 44, 407);
    addAns(4, 0, 0, "", 44, 700);
    addAns(5, 0, 0, "", 44, 826);
    addAns(6, 0, 0, "", 44, 987);
    for (var i = 1; i <= 6; i++) {
      if (answers[i-1] == 1) {
        document.getElementById("corrcirc" + i).style.visibility = "visible";
      }
    }
  }
  else if (counter==2){
    removeAns();
    document.getElementById("showall").style.visibility = "hidden";
    document.getElementById("hideall").style.visibility = "hidden";
    document.getElementById("img").src="../images/zoom/1r31.jpg";
    document.getElementById("img").setAttribute("usemap", "");
    document.getElementById("imgans").src="../images/zoom/questions/1r31q.jpg";
    counter = 1;
  }
}
document.getElementById("one1").onclick = function(){
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").src="../images/zoom/1r31.jpg";
  document.getElementById("imgans").src="../images/zoom/questions/1r31q.jpg";
  counter = 1;
}
document.getElementById("two1").onclick = function(){
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").src="../images/zoom/1r32.jpg";
  document.getElementById("img").setAttribute('usemap', "#map21");
  document.getElementById("imgans").src="../images/zoom/questions/1r31q.jpg";
  document.getElementById("showall").style.visibility = "visible";
  document.getElementById("hideall").style.visibility = "visible";
  counter = 2;
  addAns(1, 0, 0, "", 44, 118);
  addAns(2, 0, 0, "", 44, 244);
  addAns(3, 0, 0, "", 44, 407);
  addAns(4, 0, 0, "", 44, 700);
  addAns(5, 0, 0, "", 44, 826);
  addAns(6, 0, 0, "", 44, 987);
}
document.getElementById("two11").onclick = function(){
  document.getElementById("corrcirc" + 1).style.visibility = "visible";
  answers[0] = 1;
}
document.getElementById("two12").onclick = function(){
  document.getElementById("corrcirc" + 2).style.visibility = "visible";
  answers[1] = 1;
}
document.getElementById("two13").onclick = function(){
  document.getElementById("corrcirc" + 3).style.visibility = "visible";
  answers[2] = 1;
}
document.getElementById("two14").onclick = function(){
  document.getElementById("corrcirc" + 4).style.visibility = "visible";
  answers[3] = 1;
}
document.getElementById("two15").onclick = function(){
  document.getElementById("corrcirc" + 5).style.visibility = "visible";
  answers[4] = 1;
}
document.getElementById("two16").onclick = function(){
  document.getElementById("corrcirc" + 6).style.visibility = "visible";
  answers[5] = 1;
}
