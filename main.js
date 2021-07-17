var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();

function start(){
        speak();
}

function speak(){
    var synth= window.speechSynthesis;

    speakdata="Good evening Supriya mam. I am Siddanth's AI personal assistant. Today i am going to take you through his activity for checking the transpiration process in plants. The materials he used were, a plant, transparent cover and a rubberband. He tied the cover on few branches of the plant and left the setup for a while. By the way It started on 14th of July 2021 at 4:40pm. It was a cloudy day but still he continued. At 6:30pm of the same day he went to the terrace to check on the experiment. There were very very tiny drops of water on the top. He thought let some more water get collected for the photo. But afterwards he forgot. The next day at 2:00pm he went to the terrace to check on the experiment. He was surprised to see so much water was collected. That is it for today hope you have a nice day mam. Bye!!!"
   
    var utterThis= new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterThis);

}