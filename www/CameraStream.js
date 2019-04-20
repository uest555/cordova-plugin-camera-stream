var exec = require('cordova/exec');

// Camera: front or back
exports.startCapture = function (camera) {
    //exec(null, null, 'CameraBaseStream', 'startCapture', [camera]);
    exec(null, null, 'CameraStream', 'startCapture', [camera]);
};

exports.pause = function () {
    //exec(null, null, 'CameraBaseStream', 'pause', []);
    exec(null, null, 'CameraStream', 'pause', []);
};

exports.resume = function () {
    //exec(null, null, 'CameraBaseStream', 'resume', []);
    exec(null, null, 'CameraStream', 'resume', []);
};

exports.capture = function(data){
};
