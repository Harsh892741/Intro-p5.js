function preload(){}

function setup(){
    Canvas = createCanvas(640, 480);
    Canvas.position(110, 250);
    Video = createCapture(VIDEO);
    Video.hide();
    Tintcolor = "";
}

function draw(){
    image(Video, 0, 0, 640, 480);
    tint(Tintcolor);
}

function takeSnapshot(){
    save('Image.png');
}

function filterTint(){
    Tintcolor = document.getElementById("color_name").value;
}