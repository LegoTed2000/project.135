function preload() {

}

function setup() {
    canvas = createCanvas(800, 700);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 800, 700);
}

function start() {

    document.getElementById("status").innerHTML = "Status : Objects Detected"
    input = document.getElementById("input").value;
}