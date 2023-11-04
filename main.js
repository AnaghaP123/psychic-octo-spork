song = "";
leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded()
{
    console.log('Model has loaded.')
}

function draw()
{
    Image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}

function gotPoses()
{
    leftX = results[0].pose.leftWrist.x;
    leftY = results[0].pose.leftWrist.y;
    rightX = results[0].pose.rightWrist.x;
    rightY = results[0].pose.rightWrist.y;

    console.log('Left Wrist X - ' + leftX +' & Left Wrist Y - ' + leftY)
    console.log('Right Wrist X - ' + rightX +' & Right Wrist Y - ' + rightY)    
}