Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri)  {
        document.getElementById("result"),innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
});
}

console.log('ml5 version',ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/C57BZQyFd/model.json'.modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function Speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is"+prediction_1;
    speak_data_2 = "The first prediction is"+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("prediction").innerHTML= results[0].label;
        document.getElementById("prediction2").innerHTML= results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();

        if(results[0].label=='up'){
            document.getElementById("update_emoji").innerHTML= '&#9757;';

        }

        if(results[0].label=='down'){
            document.getElementById("update_emoji").innerHTML= '&#128071;';
        }

        if(result[0].label=='left'){
            document.getElementById("update_emoji").innerHTNL= '&#128072;';
        }

        if(result[0].label=='right'){
            document.getElementById("update_emoji").innerHTNL= '&#128073;';
        }

        if(result[1].label=='up'){
            document.getElementById("update_emoji2").innerHTML= '&#9757;';
        }

        if(results[1].label=='down'){
            document.getElementById("update_emoji2").innerHTML = '&#128071;';

        }

        if(results[1].label=='left'){
            document.getElementById("update_emoji2").innerHTML = '&#128072;';

        }

        if(result[1].label=='right'){
            document.getElementById("update_emoji").innerHTNL= '&#128073;';
        }


    }
}