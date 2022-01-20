navigator.mediaDevices.enumerateDevices().then((devices) => {
    let videoSourcesSelect = document.getElementById("video-source");

    // Iterate over all the list of devices (InputDeviceInfo and MediaDeviceInfo)
    devices.forEach((device) => {
        let option = new Option();
        option.value = device.deviceId;

        // According to the type of media device
        switch(device.kind){
            // Append device to list of Cameras
            case "videoinput":
                option.text = device.label || `Camera ${videoSourcesSelect.length + 1}`;
                videoSourcesSelect.appendChild(option);
                console.log(option.text);
                break;
        }

        var video = document.querySelector("#videoElement");

        if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
            video.srcObject = stream;
            })
            .catch(function (err0r) {
            console.log("Something went wrong!");
            });
        }

        
    });
}).catch(function (e) {
    console.log(e.name + ": " + e.message);
});
