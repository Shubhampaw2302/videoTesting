var video = document.querySelector("#videoElement");

var constraints = {
  audio: {
    optional: [{sourceId: audioSource}]
  },
  video: {
    optional: [{sourceId: videoSource}]
  }
};

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
