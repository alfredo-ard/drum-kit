function checkKey (key) {
    switch (key) {
        case "w":    
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "a":    
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":    
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":    
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":    
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":    
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":    
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            break;
    }
}


function buttonAnimation (key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
        console.log("This message is delayed by 0.5 seconds");
    }, 100); // 500 milliseconds = 0.5 seconds
}


var button = document.querySelectorAll(".drum")
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", clicked)
}


function clicked() { 
    var buttonIner = this.innerHTML;
    console.log(buttonIner);
    checkKey(buttonIner);
    buttonAnimation(buttonIner);

}

// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();


document.addEventListener("keydown", function (event){
    console.log(event.key);
    keyPress = event.key;
    checkKey(keyPress);
    buttonAnimation(keyPress);
})


