function openChapter(num){
  for (var i = 1; i <= 8; i++) {
    document.getElementById("btn"+i).style.border = "none";
    document.getElementById("btn"+i+"r").style.display = "none";
    document.getElementById("btn"+i+"w").style.display = "none";
    document.getElementById("btn"+i+"l").style.display = "none";
    document.getElementById("btn"+i+"s").style.display = "none";
  }

  document.getElementById("btn"+num+"r").style.display = "flex";
  document.getElementById("btn"+num+"r").style.left = "206px";
  document.getElementById("btn"+num+"w").style.display = "flex";
  document.getElementById("btn"+num+"w").style.left = "316px";
  document.getElementById("btn"+num+"l").style.display = "flex";
  document.getElementById("btn"+num+"l").style.left = "426px";
  document.getElementById("btn"+num+"s").style.display = "flex";
  document.getElementById("btn"+num+"s").style.left = "536px";

  document.getElementById("btn"+num).style.border = "3px solid #1a1a1a";

  if (num==1) {
    document.getElementById("btn"+num+"r").style.top = "5%";
    document.getElementById("btn"+num+"w").style.top = "5%";
    document.getElementById("btn"+num+"l").style.top = "5%";
    document.getElementById("btn"+num+"s").style.top = "5%";
  }
  else if (num==2) {
    document.getElementById("btn"+num+"r").style.top = "15%";
    document.getElementById("btn"+num+"w").style.top = "15%";
    document.getElementById("btn"+num+"l").style.top = "15%";
    document.getElementById("btn"+num+"s").style.top = "15%";
  }
  else if (num==3) {
    document.getElementById("btn"+num+"r").style.top = "25%";
    document.getElementById("btn"+num+"w").style.top = "25%";
    document.getElementById("btn"+num+"l").style.top = "25%";
    document.getElementById("btn"+num+"s").style.top = "25%";
  }
  else if (num==4) {
    document.getElementById("btn"+num+"r").style.top = "35%";
    document.getElementById("btn"+num+"w").style.top = "35%";
    document.getElementById("btn"+num+"l").style.top = "35%";
    document.getElementById("btn"+num+"s").style.top = "35%";
  }
  else if (num==5) {
    document.getElementById("btn"+num+"r").style.top = "45%";
    document.getElementById("btn"+num+"w").style.top = "45%";
    document.getElementById("btn"+num+"l").style.top = "45%";
    document.getElementById("btn"+num+"s").style.top = "45%";
  }
  else if (num==6) {
    document.getElementById("btn"+num+"r").style.top = "55%";
    document.getElementById("btn"+num+"w").style.top = "55%";
    document.getElementById("btn"+num+"l").style.top = "55%";
    document.getElementById("btn"+num+"s").style.top = "55%";
  }
  else if (num==7) {
    document.getElementById("btn"+num+"r").style.top = "65%";
    document.getElementById("btn"+num+"w").style.top = "65%";
    document.getElementById("btn"+num+"l").style.top = "65%";
    document.getElementById("btn"+num+"s").style.top = "65%";
  }
  else if (num==8){
    document.getElementById("btn"+num+"r").style.top = "75%";
    document.getElementById("btn"+num+"w").style.top = "75%";
    document.getElementById("btn"+num+"l").style.top = "75%";
    document.getElementById("btn"+num+"s").style.top = "75%";
  }
}
