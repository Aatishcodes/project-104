
Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
});

acamera = document.getElementById("camera")
Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });

}

console.log("ML5 version",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2OPDCgxAH/model.json", modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}


