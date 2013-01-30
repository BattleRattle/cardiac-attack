
var COLLISION_STATUS = {
    NONE: 0,
    DAMAGE: 1,
    COLLIDE: 2
};

function getCollisionMap(image_path, frames, callback) {
    var image = new Image();

    image.onload = function() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        var width_per_frame = image.width / frames;
        var pixels = context.getImageData(0, 0, image.width, image.height).data;
        var transparency_map = {};

        for (var y=0; y<image.height; y++) {
            for (var x=0; x<image.width; x++) {
                var alpha_offset = y * image.width * 4 + x * 4 + 3;
                var alpha = pixels[alpha_offset];

                if (alpha >= 1) {
                    var frame = parseInt(x / width_per_frame);
                    var rel_x = x % width_per_frame;
                    if (!transparency_map[frame]) transparency_map[frame] = {};
                    if (!transparency_map[frame][rel_x]) transparency_map[frame][rel_x] = {};
                    transparency_map[frame][rel_x][y] = 1;
                }
            }
        }

        if (typeof callback == 'function') {
            callback(transparency_map);
        }
    };

    image.src = image_path;
}

function getLevelCollisionMap(image_path, frames, callback) {
    var image = new Image();

    image.onload = function() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        var width_per_frame = image.width / frames;
        var pixels = context.getImageData(0, 0, image.width, image.height).data;
        var transparency_map = {};

        for (var x=0; x<image.width; x++) {
            var level = 0;
            for (var y=0; y<image.height; y++) {
                var alpha_offset = y * image.width * 4 + x * 4 + 3;
                var alpha = pixels[alpha_offset];

                if (level == 1 && alpha > 0 || level == 0 && alpha == 0) {
                    var frame = parseInt(x / width_per_frame);
                    if (!transparency_map[frame]) transparency_map[frame] = {};
                    if (!transparency_map[frame][x]) transparency_map[frame][x] = {};
                    transparency_map[frame][x][level] = y;
                    if (level++ == 0)
                        continue;
                    else
                        break;
                }
            }
        }

        if (typeof callback == 'function') {
            callback(transparency_map);
        }
    };

    image.src = image_path;
}


$$$$$$$$$$$$$$ = function(actor, enemy, actor_map, enemy_map) {
    var result = {
        status: COLLISION_STATUS.NONE
    };

    if (actor._x + actor.width <= enemy._x || enemy._x + enemy.width <= actor._x) {
        return result;
    }

    if (actor._y + actor.height <= enemy._y || enemy._y + enemy.height <= actor._y) {
        return result;
    }

    var rel_x = 0;
    var rel_y = 0;
    for (var x in actor_map[actor.frame]) {
        rel_x = parseInt(parseInt(x) + actor._x - enemy._x);
        if (typeof enemy_map['map'][enemy.frame][rel_x] === 'undefined') {
            continue;
        }

        for (var y  in actor_map[actor.frame][x]) {
            rel_y = parseInt(parseInt(y) + actor._y - enemy._y);

            if (typeof enemy_map['map'][enemy.frame][rel_x][rel_y] !== 'undefined') {
                if (typeof enemy_map['hit'][enemy.frame][rel_x] !== 'undefined' && typeof enemy_map['hit'][enemy.frame][rel_x][rel_y] != 'undefined') {
                    result.status = COLLISION_STATUS.COLLIDE
                    result.kill_enemy = true
                } else {
                    result.status = COLLISION_STATUS.DAMAGE
                    result.took_damage = true
                }

                if (typeof result.rel_x == 'undefined') {
                    result.rel_x = rel_x;
                    result.rel_y = rel_y;
                }
            }
        }
    }

    return result;
}
