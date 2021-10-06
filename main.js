function preload() {

}

function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(500, 500)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)

}

function draw() {
    image(video, 0, 0, 500, 500)

}

function Take_it() {
    save("The_It_Has_Returned.png")

}

function modelLoaded() {

    console.log("IT has loaded")

}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results)
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

    }
}