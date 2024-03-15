function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(400, 400);
    canvas.position(520, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized!");
}

function draw() {
    background("white")
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}