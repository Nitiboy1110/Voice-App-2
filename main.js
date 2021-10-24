var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); 

function start() 
{ 
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start(); } 
    recognition.onresult = function(event)
     { console.log(event); 
    var Content = event.results[0][0].transcript; 
    console.log(Content); 
    document.getElementById("textbox").innerHTML = Content; 
}


function speak() 
{ 
    var Synthesis = window.speechSynthesis;
    var speak_data = document.getElementById("realtextbox").value;
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    Synthesis.speak(UtterThis);
    Webcam.attach(Camera);
}

  Webcam.set({
      width:360 ,
      height:250 ,
      image_format:'png',
      png_quality:100
      });
      Camera = document.getElementById("camera");
    