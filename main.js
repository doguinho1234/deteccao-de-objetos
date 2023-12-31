img = "";
objects = [];
modelStatus = "";

function preload() {
    img = loadImage('ruas.jpg');
}

function setup () {
    canvas = createCanvas(640, 420);
    canvas.center();
   objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}

function modelLoaded() {
    console.log("modelo foi carregado com sucesso!")
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

 function gotResult(error, results) {
    if(error) {
         console.log(error);
     }
     console.log(results);
     objects = results;
 }

function draw() {
image(img, 0, 0, 640, 420);

if (modelStatus != "") {
    for (i = 0; i < objects.length; i++) {
        document.getElementById("h3").innerHTML = "Objetos Detectados"
        fill("red");
        percent = floor(objects[i].confidence * 100)
        text(objects[i].label + " "+ percent + "%", objects[i].x, objects[i].y);
        noFill()
        stroke("red");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}
