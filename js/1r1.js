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
  document.getElementById("showall").style.visibility = "hidden";
  document.getElementById("hideall").style.visibility = "hidden";
  document.querySelector(".bg-modal").style.display = "block";
  document.getElementById("img").setAttribute("usemap", "");
  document.getElementById("img").src="../images/pics/blank.jpg";
  document.getElementById("imgans").setAttribute("usemap", "");
  document.getElementById("imgans").src="../images/pics/blank.jpg";
  counter = 0;
  answer = 0;
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
var answer = 0;
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
  answer = 0;
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
  answer = 0;
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
		document.getElementById("modal-ans").appendChild(p2);
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
	var childcount = document.getElementById("modal-content").childElementCount - 2;
	for (i=1; i<=childcount; i++){
		document.getElementById("modal-content").removeChild(document.getElementById("corrans" + i));
		document.getElementById("modal-ans").removeChild(document.getElementById("corrcirc" + i));
	}
}
//Reveal answers
function showAns(){
	var i;
	var childcount = document.getElementById("modal-content").childElementCount - 2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrans" + i).style.visibility = "visible";
	}
}
//Hide answers
function hideAns(){
	var i;
	var childcount = document.getElementById("modal-content").childElementCount - 2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrans" + i).style.visibility = "hidden";
	}
}
function hideCirc(){
	var i;
	var childcount = document.getElementById("modal-content").childElementCount - 2;
	for (i=1; i<=childcount; i++){
		document.getElementById("corrcirc" + i).style.visibility = "hidden";
	}
}
document.getElementById("one1").onclick = function(){
  document.querySelector(".bg-modal").style.display = "initial";
  document.getElementById("img").src="../images/zoom/1r11.jpg";
  document.getElementById("img").setAttribute('usemap', "#map11");
  document.getElementById("imgans").src="../images/zoom/questions/1r11q.jpg";
  document.getElementById("showall").style.visibility = "visible";
  document.getElementById("hideall").style.visibility = "visible";
  addAns(1, 180, 182, "D", 848, -14);
  addAns(2, 270, 209, "A", 127, -12);
  addAns(3, 300, 263, "A", 125, -14);
  addAns(4, 400, 328, "C", 620, -11);
  addAns(5, 400, 383, "B", 375, -10);
  addAns(6, 200, 435, "B", 379, -14);
  addAns(7, 720, 462, "A", 132, -12);
  addAns(8, 630, 500, "C", 618, -11);
}
document.getElementById("one11").onclick = function(){
  document.getElementById("imgans").src="../images/zoom/answers/1r111.jpg";
  document.getElementById("imgans").setAttribute('usemap', "#map3");
  hideCirc();
  counter = 1;
  answer = 4;
}
document.getElementById("one12").onclick = function(){
  document.getElementById("imgans").src="../images/zoom/answers/1r112.jpg";
  document.getElementById("imgans").setAttribute('usemap', "#map3");
  hideCirc();
	counter = 2;
  answer = 1;
}
document.getElementById("one13").onclick = function(){
  document.getElementById("imgans").src="../images/zoom/answers/1r113.jpg";
  document.getElementById("imgans").setAttribute('usemap', "#map3");
  hideCirc();
	counter = 3;
  answer = 1;
}
document.getElementById("one14").onclick = function(){
  document.getElementById("imgans").src="../images/zoom/answers/1r114.jpg";
  document.getElementById("imgans").setAttribute('usemap', "#map3");
  hideCirc();
	counter = 4;
  answer = 3;
}
document.getElementById("one15").onclick = function(){
  document.getElementById("imgans").src="../images/zoom/answers/1r115.jpg";
  document.getElementById("imgans").setAttribute('usemap', "#map3");
  hideCirc();
	counter = 5;
  answer = 2;
}
document.getElementById("one16").onclick = function(){
  document.getElementById("imgans").src="../images/zoom/answers/1r116.jpg";
  document.getElementById("imgans").setAttribute('usemap', "#map3");
  hideCirc();
	counter = 6;
  answer = 2;
}
document.getElementById("one17").onclick = function(){
  document.getElementById("imgans").src="../images/zoom/answers/1r117.jpg";
  document.getElementById("imgans").setAttribute('usemap', "#map3");
  hideCirc();
	counter = 7;
  answer = 1;
}
document.getElementById("one18").onclick = function(){
  document.getElementById("imgans").src="../images/zoom/answers/1r118.jpg";
  document.getElementById("imgans").setAttribute('usemap', "#map3");
  hideCirc();
	counter = 8;
  answer = 3;
}
document.getElementById("two1").onclick = function(){
  document.querySelector(".bg-modal").style.display = "initial";
  document.getElementById("img").src="../images/zoom/1r12.jpg";
  document.getElementById("img").setAttribute('usemap', "#map21");
  document.getElementById("imgans").src="../images/zoom/questions/1r12q.jpg";
  document.getElementById("showall").style.visibility = "visible";
  document.getElementById("hideall").style.visibility = "visible";
  addAns(1, 380, 183, "WHICH", 0, 0);
  addAns(2, 330, 209, "AS", 0, 0);
  addAns(3, 300, 238, "FROM", 0, 0);
  addAns(4, 280, 264, "THEY", 0, 0);
  addAns(5, 745, 330, "THAN", 0, 0);
  addAns(6, 720, 357, "NOT", 0, 0);
  addAns(7, 195, 466, "THAT", 0, 0);
  addAns(8, 195, 520, "MAKE", 0, 0);
}
document.getElementById("two11").onclick = function(){
  document.getElementById("corrans" + 1).style.visibility = "visible";
}
document.getElementById("two12").onclick = function(){
  document.getElementById("corrans" + 2).style.visibility = "visible";
}
document.getElementById("two13").onclick = function(){
  document.getElementById("corrans" + 3).style.visibility = "visible";
}
document.getElementById("two14").onclick = function(){
  document.getElementById("corrans" + 4).style.visibility = "visible";
}
document.getElementById("two15").onclick = function(){
  document.getElementById("corrans" + 5).style.visibility = "visible";
}
document.getElementById("two16").onclick = function(){
  document.getElementById("corrans" + 6).style.visibility = "visible";
}
document.getElementById("two17").onclick = function(){
  document.getElementById("corrans" + 7).style.visibility = "visible";
}
document.getElementById("two18").onclick = function(){
  document.getElementById("corrans" + 8).style.visibility = "visible";
}
document.getElementById("three1").onclick = function(){
  if (counter!=0) {
    if (answer == 1){
      document.getElementById("corrans" + counter).style.visibility = "visible";
    	document.getElementById("corrcirc" + counter).style.visibility = "visible";
      document.getElementById("audioplayer").src = "../audio/right.mp3";
      document.getElementById("audioplayer").play();
    }
    else{
      document.getElementById("audioplayer").src = "../audio/wrong.mp3";
      document.getElementById("audioplayer").play();
    }
  }
}
document.getElementById("three2").onclick = function(){
  if (counter!=0) {
    if (answer == 2){
      document.getElementById("corrans" + counter).style.visibility = "visible";
    	document.getElementById("corrcirc" + counter).style.visibility = "visible";
      document.getElementById("audioplayer").src = "../audio/right.mp3";
      document.getElementById("audioplayer").play();
    }
    else{
      document.getElementById("audioplayer").src = "../audio/wrong.mp3";
      document.getElementById("audioplayer").play();
    }
  }
}
document.getElementById("three3").onclick = function(){
  if (counter!=0) {
    if (answer == 3){
      document.getElementById("corrans" + counter).style.visibility = "visible";
    	document.getElementById("corrcirc" + counter).style.visibility = "visible";
      document.getElementById("audioplayer").src = "../audio/right.mp3";
      document.getElementById("audioplayer").play();
    }
    else{
      document.getElementById("audioplayer").src = "../audio/wrong.mp3";
      document.getElementById("audioplayer").play();
    }
  }
}
document.getElementById("three4").onclick = function(){
  if (counter!=0) {
    if (answer == 4){
      document.getElementById("corrans" + counter).style.visibility = "visible";
    	document.getElementById("corrcirc" + counter).style.visibility = "visible";
      document.getElementById("audioplayer").src = "../audio/right.mp3";
      document.getElementById("audioplayer").play();
    }
    else{
      document.getElementById("audioplayer").src = "../audio/wrong.mp3";
      document.getElementById("audioplayer").play();
    }
  }
}
