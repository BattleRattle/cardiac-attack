
var Heartbeat = function (game, group, heartbeat_sound) {

    var last = 0;
    var up = false;

    group.addEventListener('enterframe', function (e) {
        var cos = pulseMovement() * 256;

        if (up && cos < last) {
            heartbeat_sound.play();
        }
        up = cos > last;

        last = cos;
    });

}
