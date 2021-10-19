pridiction_1 = "";
pridiction_2 = "";
webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");


webcam.attach( '#camera' );

function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.image_Clasifier('https://teachablemachine.withgoogle.com/models/ayPdqM93R/',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The meaning of the emoji is " + pridiction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if(error)
    {
        console.error(error);
    } else {
        document.getElementById("result_gesture_name").innerHTML = result[0].label;
        document.getElementById("result_gesture_name2").innerHTML = result[1].label;
        pridiction_1 = result[0].label;
        pridiction_2 = result[1].label;
        speak();
        
    }
}