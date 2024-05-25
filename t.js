var prediccion1="";
var prediccion2="";
var prediccion3="";
Webcam.set({
    width:350, height:350, image_format:"png", png_quality:95
})

Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });

}

console.log("La libreria de la IA es ml5");
classifer=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GeDD1lr6H/model.json", twice);
function twice(){
    console.log("modelo cargado");
}

function check() {
 ñ=document.getElementById("captured_image");
classifer.classify(ñ, a)
}

function a(error, result) {
if(error) {
    console.log(error) 
}
else {
    console.log(result);
    document.getElementById("result_emotion_name").innerHTML=result[0].label;
    document.getElementById("result_emotion_name2").innerHTML=result[1].label;
}
}