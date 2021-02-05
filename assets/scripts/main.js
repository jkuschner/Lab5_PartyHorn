// main.js

// TODO
function changeVolume(vol) {
    let aud = document.getElementById("horn-sound");
    aud.volume = vol / 100;
    volumeInput = document.getElementById("volume-number");
    volumeSlider = document.getElementById("volume-slider");
    volumeImage = document.getElementById("volume-image");

    volumeInput.value = vol;
    volumeSlider.value = vol;

    if(volumeInput.value >= 67) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if(volumeInput.value >= 34) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if(volumeInput.value >= 1) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
}

function changeSound() {
    let aud = document.getElementById("horn-sound");
    let image = document.getElementById("sound-image");

    if(document.getElementById("radio-air-horn").checked) {
        aud.src = "./assets/media/audio/air-horn.mp3";
        image.src = "./assets/media/images/air-horn.svg";
        image.alt = "Air Horn";
    }
    else if(document.getElementById("radio-car-horn").checked) {
        aud.src = "./assets/media/audio/car-horn.mp3";
        image.src = "./assets/media/images/car.svg";
        image.alt = "Car";
    }
    else if(document.getElementById("radio-party-horn").checked) {
        aud.src = "./assets/media/audio/party-horn.mp3";
        image.src = "./assets/media/images/party-horn.svg";
        image.alt = "Party Horn";
    }
}

function playSound(event) {
    event.preventDefault();
    document.getElementById("horn-sound").play();

}

let volumeInput = document.getElementById("volume-number");
let volumeSlider = document.getElementById("volume-slider");
volumeInput.addEventListener("change", function(){changeVolume(volumeInput.value);});

volumeSlider.addEventListener("change", function(){changeVolume(volumeSlider.value);});

document.getElementById("audio-selection").addEventListener("change",changeSound);

document.getElementById("honk-btn").addEventListener("click", function(){playSound(event);});