img = "";

function preload() {
    img = loadImage('cachorro.jpg');
}

function setup () {
    canvas = createCanvas(640, 420);
    canvas.center();
   objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}

function modelLoaded() {
    console.log("modelo foi carregado com sucesso!")
    objectDetector.detect(img, gotResult);
}

 function gotResult(error, results) {
    if(error) {
         console.log(error);
     }
     console.log(results);
 }

function draw() {
image(img, 0, 0, 640, 420);

}