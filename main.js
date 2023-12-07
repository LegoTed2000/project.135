objects = [];
Status = "";

function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size();
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400);

    if(Status != "") {

        objectDetector.detect(video, gotResults);

        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Objects Detecter";

            r = Math.random(255);
            g = Math.random(255);
            b = Math.random(255);

            fill(r, g, b);
            percent = floor(objects[i].confidence * 100)
            noFill();
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            stroke(r, g, b);
            rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);

            if(objects[i].label == input) {
                video.stop();
                objectDetector.detect(gotResults);
                document.getElementById("status").innerHTML = "Found"
            }
            else {
                document.getElementById("status").innerHTML = "Status : Not Found";
            }
        }
    }
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Objects Detected";
    input = document.getElementById("thing").value;
}

function gotResults(error , results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function modelLoaded() {
    console.log( "It worked");
    Status = true;
}