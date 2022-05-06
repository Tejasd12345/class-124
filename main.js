function setup() {
video = createCapture(VIDEO);  
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,110);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
background('#34d5eb')
}

function modelLoaded() {
console.log("model is loaded by Tejas.D")    
}

function gotPoses(results) {
 if (results.length > 0) {
 console.log(results);
 }   
}