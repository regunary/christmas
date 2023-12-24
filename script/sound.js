
var audio = document.getElementById("myAudio");
document.getElementById("playButton").addEventListener("click", function () {
  audio
    .play()
    .then(function () {
        fetchData();
        document.getElementById("playButton").style.display = "none";
      console.log("Audio playback initiated by user action.");
    })
    .catch(function (error) {
      console.error("Error playing audio:", error);
    });
});

function restartAudio() {
  audio.currentTime = 0; // Reset the audio to the beginning
  audio.play(); // Play the audio again
}

// Event listener for when the audio playback ends
audio.addEventListener("ended", restartAudio);