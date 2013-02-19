enchant();

$ = undefined;
jQuery = undefined;

var devMode = window.location.href.indexOf('#dev') != -1;

var game;
var collisionMap = {};
collisionMap.enemies = {};
collisionMap.debris = {};
collisionMap.foreground = {};

var GameSpeed = 4;

if (devMode) {
    GameSpeed = 5;
}

collisionMap.enemies['_'] = {};
collisionMap.enemies['☃'] = {};
collisionMap.enemies['£'] = {};
collisionMap.enemies['$'] = {};
collisionMap.enemies['.'] = {};
collisionMap.enemies['+'] = {};
collisionMap.enemies[','] = {};
collisionMap.enemies['ß'] = {};
collisionMap.enemies['..'] = {};

collisionMap.debris['േ'] = {};
collisionMap.debris['᧔'] = {};
collisionMap.debris['ᾪ'] = {};

var gameWidth = 1138;
var gameHeight = 640;

getCollisionMap('./images/spider_ani_map_960x128.png', 5, function(map) {
	collisionMap.actor = map;
});

// enemies
getCollisionMap('./images/enemy01_skorpioni.png', 3, function(map) {
	collisionMap.enemies['_'].map = map;
});
getCollisionMap('./images/enemy01_skorpioni_hit.png', 3, function(map) {
	collisionMap.enemies['_'].hit = map;
});
getCollisionMap('./images/enemie02_nausicaa.png', 2, function(map) {
	collisionMap.enemies['☃'].map = map;
});
getCollisionMap('./images/enemie02_nausicaa_HIT.png', 2, function(map) {
	collisionMap.enemies['☃'].hit = map;
});
getCollisionMap('./images/enemie03_Quall.png', 1, function(map) {
	collisionMap.enemies['£'].map = map;
});
getCollisionMap('./images/enemie03_QuallSW.png', 1, function(map) {
	collisionMap.enemies['£'].hit = map;
});
getCollisionMap('./images/enemy04_metroid.png', 1, function(map) {
	collisionMap.enemies['$'].map = map;
});
getCollisionMap('./images/enemy04_metroid_hit.png', 1, function(map) {
	collisionMap.enemies['$'].hit = map;
});
getCollisionMap('./images/Enemy05_Blutkoerperchen.png', 5, function(map) {
	collisionMap.enemies['.'].map = map;
});
getCollisionMap('./images/Enemy05_BlutkoerperchenSW.png', 5, function(map) {
	collisionMap.enemies['.'].hit = map;
});
getCollisionMap('./images/Enemie08_QuFisch.png', 2, function(map) {
	collisionMap.enemies[','].map = map;
});
getCollisionMap('./images/Enemie08_QuFischSW.png', 2, function(map) {
	collisionMap.enemies[','].hit = map;
});
getCollisionMap('./images/Stachel.png', 4, function(map) {
	collisionMap.enemies['+'].map = map;
});
getCollisionMap('./images/StachelHit.png', 4, function(map) {
	collisionMap.enemies['+'].hit = map;
});
getCollisionMap('./images/BigThingGrid.png', 2, function(map) {
	collisionMap.enemies['ß'].map = map;
});
getCollisionMap('./images/BigThingGridHit.png', 2, function(map) {
	collisionMap.enemies['ß'].hit = map;
});
getCollisionMap('./images/enemy06_qualle.png', 2, function(map) {
    collisionMap.enemies['..'].map = map;
});
getCollisionMap('./images/enemy06_qualle_hit.png', 2, function(map) {
    collisionMap.enemies['..'].hit = map;
});

// debris
getCollisionMap('./images/flubber.png', 4, function(map) {
    collisionMap.debris['േ'].map = map;
});
getCollisionMap('./images/flubber.png', 4, function(map) {
    collisionMap.debris['േ'].hit = map;
});
getCollisionMap('./images/m_704x64.png', 6, function(map) {
    collisionMap.debris['᧔'].map = map;
});
getCollisionMap('./images/m_704x64.png', 6, function(map) {
    collisionMap.debris['᧔'].hit = map;
});
getCollisionMap('./images/plankton.png', 4, function(map) {
    collisionMap.debris['ᾪ'].map = map;
});
getCollisionMap('./images/plankton.png', 4, function(map) {
    collisionMap.debris['ᾪ'].hit = map;
});



getLevelCollisionMap('./images/collision_level_1_top_bottom.png', 1, function(map) {
	collisionMap.foreground.level1 = map[0];
});
getLevelCollisionMap('./images/collision_level_2_eilin.png', 1, function(map) {
	collisionMap.foreground.level2 = map[0];
});
getLevelCollisionMap('./images/level3_collision.png', 1, function(map) {
	collisionMap.foreground.level3 = map[0];
});
var positionStage = function(scale) {
	var stage = document.getElementById('enchant-stage');
	var clientHeight = document.body.clientHeight;
	var stageHeight = stage.children[1].children[0].offsetHeight * scale;

	if (stageHeight < clientHeight) {
		var margin = (clientHeight - stageHeight) / 2;
		stage.style.marginTop = (margin) + 'px';
	}
}

var pulseMovement = function() {
    return Math.cos((5 * GameSpeed * game.frame % 360) / 180 * Math.PI);
}

window.onload = function() {

	game = new Game(gameWidth, gameHeight);
	game.fps = 30;
	game.preload('./images/background_1138x640.jpg',
			'./images/level1_bg.png',
			'./images/level1_foreground_3008x640.png',
			'./images/spider_ani_map_960x128.png',
			'./images/spider_ani_map_960x128_schwarz.png',
        	'./images/enemy01_skorpioni.png',
        	'./images/enemie02_nausicaa.png',
            './images/enemie03_Quall.png',
            './images/enemy04_metroid.png',
            './images/Enemy05_Blutkoerperchen.png',
            './images/Enemie08_QuFisch.png',
            './images/enemy06_qualle.png',
            './images/Blood.png',
            './images/pulsating.png',
            './images/bar.png',
            './images/GameOver_1134x640.png',
            './sounds/bgmusic/fast.m4a',
            './images/CardiacAttackLogo.png',
            './sounds/sfx/shortSquirt1.mp3',
            './sounds/sfx/shortSquirt2.mp3',
            './sounds/sfx/shortSquirt3.mp3',
            './sounds/sfx/shortSquirt4.mp3',
            './sounds/sfx/shortSquirt5.mp3',
            './sounds/sfx/shortSquirt6.mp3',
            './images/flubber.png',
            './images/m_704x64.png',
            './images/plankton.png',
            './images/Stachel.png',
            './images/level2_bg.png',
            './images/level2_foreground.png',
            './images/BigThingGrid.png',
            './images/BigThingGridHit.png',
            './images/GameWonScreen.png',
            './images/dive_cycle.png',
            './images/dive_cycleschwarz.png',
            './images/collision_level_2_eilin.png',
            './images/level3_collision.png',
            './images/level3_foreground.png',
            './images/jump_cycle.png',
            './images/jump_cycle_schwarz.png',
            './sounds/sfx/heartbeat2.wav',
            './images/level3_bg.png',
			'./images/enemy01_skorpioni_hit.png',
			'./images/enemie02_nausicaa_HIT.png',
			'./images/enemie03_QuallSW.png',
			'./images/enemy04_metroid_hit.png',
			'./images/Enemy05_BlutkoerperchenSW.png',
			'./images/enemie03_QuallSW.png',
			'./images/Enemie08_QuFischSW.png',
			'./images/StachelHit.png',
			'./images/collision_level_1_top_bottom.png');

	game.onload = function () {
        global_health_bar = new Health;
        LevelOne(game).init();

        if (!devMode) {
            StartScreen();
        }
        positionStage(game.scale);
    }

    if (devMode)
        game.debug();
    else
        game.start();
}
