//canvas variable
canvas = document.getElementById("myCanvas");
//ctx variable
ctx=canvas.getContext("2d");
//ferrari size
ferrariWidth=120;
ferrariHeight=70;
//buggati size
BuggatiWidth=140;
BuggatiHeight=70;
//back ground image
bg_image="road.jpg";
//ferrari image
ferrari_image="ferrari.png";
buggati_image="Buggati.png"

//position of ferrari
ferrariY=200;
ferrariX=10;
//position of ferrari
BuggatiY=430;
BuggatiX=10;
//function add
function add() {
    bg= new Image();
    bg.onload=uploadBackground;
    bg.src=bg_image;
    //for ferrari
    ro= new Image();
    ro.onload=uploadferrari;
    ro.src=ferrari_image;
     //for buggati
     ro2= new Image();
     ro2.onload=uploadBuggati;
     ro2.src=buggati_image;
}
//define upload bg 
function uploadBackground() {
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
//define upload ro
function uploadferrari() {
    ctx.drawImage(ro,ferrariX,ferrariY,ferrariWidth,ferrariHeight);
}
//define upload ro2
function uploadBuggati() {
    ctx.drawImage(ro2,BuggatiX,BuggatiY,BuggatiWidth,BuggatiHeight);
}
//key down
window.addEventListener("keydown",myKeydown);
//key down fun
function myKeydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    //up
    if (keyPressed=='38') {
        console.log("up");
        }
//down
if (keyPressed=='40') {
    console.log("down");
}
//left
if (keyPressed=='37') {
    console.log("left");
}
//right
if (keyPressed=='39') {
    console.log("right");
}
//w
if (keyPressed=='87') {
    console.log("w");
    }
    //s
    if (keyPressed=='83') {
        console.log("s");
        }
        //a
    if (keyPressed=='65') {
        console.log("a");
        }
        //d
    if (keyPressed=='68') {
        console.log("d");
        }
        
                    }


