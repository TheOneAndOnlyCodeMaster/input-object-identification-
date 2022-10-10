status = false;
function preload(){

}
function setup(){
    canvas = createCanvas(580, 600);
    canvas.position(550, 250);
    video = createCapture(VIDEO);
    video.hide()

}
function draw(){
image(video, 0, 0, 580, 600);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}
function modelLoaded(){
    console.log("model is loaded");
    status = true;
}