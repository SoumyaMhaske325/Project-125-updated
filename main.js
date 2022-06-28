difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(500,450);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
console.log("PoseNet id initialized");
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
}
}
function draw()
{
    background("#d0cccc");
    
    fill("#000000");
    text("Soumya",50,400);
    textSize(difference);
}