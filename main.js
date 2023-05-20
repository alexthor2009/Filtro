noseX=0;
noseY=0;

function preload(){
bigote=loadImage('https://i.postimg.cc/NFB45yjj/bigote-3.png');
nariz=loadImage('https://i.postimg.cc/HxfHhtR8/nariz-removebg-preview.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);

    poseNet.on('pose', getPoses);
}
function modelLoaded(){
    console.log('poseNet esta inicializado');
}

function getPoses(results){
if(results.length > 0 )
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("Nose X ="+noseX);
    console.log("Nose Y ="+noseY);
}
}
function draw(){
    image(video,0,0,300,300);
    fill('Red');
    stroke('DarkRed');
    //circle(noseX,noseY,20);
    image(bigote,noseX-35,noseY,70,55);
    image(nariz,noseX-15,noseY-5,30,30);
}

function take_snapshot(){
    save('alex.png');
}