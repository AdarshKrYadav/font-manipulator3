var nosex=0;
var nosey=0;
var leftwristX=0;
var rightwristX=0;
var difference=0;
function preload(){}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    classifier=ml5.poseNet(video,modelloaded);
    classifier.on("pose",gotposes);
}
function draw(){
    background("#08D1F9");
    fill("#E67E22");
    document.getElementById("check_W_H").innerHTML="Font size will be = "+difference+"Px";
    textSize(difference);
    text("Hello",50,400);
}
function modelloaded(){
    console.log("Model has loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("Nose X="+nosex+"Nose Y="+nosey);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("Left Wrist="+leftwristX+"Right Wrist="+rightwristX+"Difference ="+difference);
    }

}