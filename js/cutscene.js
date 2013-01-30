IntroSequence = function(messageOne, messageTwo, messageThree) {
	game.assets['./sounds/bgmusic/fast.m4a'].stop();
	var scene = new Scene();
	var oldScene = game.currentScene;
	var introText = new enchant.Label();
	introText.y = 288;
	introText.width = 1138;
	introText.height = 64;
	introText.font = "64px Monda";
	introText.color = '#FFFFFF';
	introText.textAlign = "center";
	introText.tl.setFrameBased();
	introText.text = messageOne || '';

	scene.addChild(introText);

	var changeIntroText_1 = function() {
		game.assets['./sounds/sfx/heartbeat2.wav'].play();
		introText.text = messageTwo || '';
		this.tl.fadeIn(10).delay(30).fadeOut(10).exec(changeIntroText_2);

	}
	var changeIntroText_2 = function() {
		game.assets['./sounds/sfx/heartbeat2.wav'].play();
		introText.text = messageThree || '';
		this.tl.fadeIn(10).delay(30).fadeOut(10).exec(function() {
			game.assets['./sounds/bgmusic/fast.m4a'].play();
			game.pushScene(oldScene)
		});
	}

	game.assets['./sounds/sfx/heartbeat2.wav'].play();
	introText.tl.hide().fadeIn(10).delay(30).fadeOut(10).exec(changeIntroText_1);
	game.replaceScene(scene);
}
SplashScreen = function(preloadedSprite, showDelay) {
	var scene = new Scene();
	var oldScene = game.currentScene;

	sprite = new Sprite(1138, 640);
	sprite.image = game.assets[preloadedSprite];
	scene.addChild(sprite);
	sprite.tl.setFrameBased();
	sprite.tl.delay(showDelay).exec(function() {
		game.pushScene(oldScene)
	});
	game.replaceScene(scene);
}

GameWon = function(showDelay){
	game.assets['./sounds/bgmusic/fast.m4a'].stop();
	var scene = new Scene();
	var oldScene = game.currentScene;

	sprite = new Sprite(1138, 640);
	sprite.image = game.assets['./images/GameWonScreen.png'];
	
	var label = new enchant.Label();
	label.y = 100;
	label.x = 400;
	label.width = 700;
	label.height = 64;
	label.font = "64px Monda";
	label.color = '#FFFFFF';
	label.textAlign = "center";
	label.tl.setFrameBased();
	label.text = 'HURRRRRCCCKKKK';

	var label2 = new enchant.Label();
	label2.y = 250;
	label2.x = 569;
	label2.width = 569;
	label2.height = 32;
	label2.font = "32px Monda";
	label2.color = '#AAAAAA';
	label2.textAlign = "center";
	label2.tl.setFrameBased();
	label2.text = 'Someone\'s heart just gave out.';
	
	var label3 = new enchant.Label();
	label3.y = 320;
	label3.x = 890;
	label3.width = 200;
	label3.height = 32;
	label3.font = "32px Monda";
	label3.color = '#AAAAAA';
	label3.textAlign = "right";
	label3.tl.setFrameBased();
	label3.text = 'Good job!';

	scene.addChild(sprite);
	scene.addChild(label);
	scene.addChild(label2);
	scene.addChild(label3);
	
	sprite.tl.setFrameBased();
	
	if(showDelay < 0)
		sprite.tl.delay(10).loop();
	else
	sprite.tl.delay(showDelay).exec(function() {
		game.replaceScene(oldScene)
	});
	game.replaceScene(scene);
}

StartScreen = function() {
	game.assets['./sounds/bgmusic/fast.m4a'].stop();
	var scene = new Scene();
	var oldScene = game.currentScene;

	var secProgramming = new enchant.Label();
	secProgramming.text = 'programming';
	secProgramming.y = 500;
	secProgramming.x = 30;
	secProgramming.width = 100;
	secProgramming.height = 32;
	secProgramming.font = "12px Monda";
	secProgramming.color = '#AAAAAA';
	secProgramming.textAlign = "left";

	var secArt = new enchant.Label();
	secArt.text = 'game design, sound design & animation';
	secArt.y = 500;
	secArt.x = 540;
	secArt.width = 300;
	secArt.height = 32;
	secArt.font = "12px Monda";
	secArt.color = '#AAAAAA';
	secArt.textAlign = "left";

	var memProgramming = new enchant.Label();
	memProgramming.text = 'Marco Krüger, Norman Soetbeer, Patrick Schmidt, Stefan Vock';
	memProgramming.y = 520;
	memProgramming.x = 30;
	memProgramming.width = 500;
	memProgramming.height = 32;
	memProgramming.font = "12px Monda";
	memProgramming.color = '#FFFFFF';
	memProgramming.textAlign = "left";

	var memArt = new enchant.Label();
	memArt.text = 'Eilin Pham, Norman v. Rechenberg, Sebastian Kiencke, Jörn Mühl';
	memArt.y = 520;
	memArt.x = 540;
	memArt.width = 500;
	memArt.height = 32;
	memArt.font = "12px Monda";
	memArt.color = '#FFFFFF';
	memArt.textAlign = "left";

	var ccmusic = new enchant.Label();
	ccmusic.text = 'CC music by: Andreas Fromm, Kevin MacLeod';
	ccmusic.y = 570;
	ccmusic.x = 800;
	ccmusic.width = 300;
	ccmusic.height = 32;
	ccmusic.font = "10px Monda";
	ccmusic.color = '#AAAAAA';
	ccmusic.textAlign = "left";

	var logo = new Sprite(1138, 640);
	logo.image = game.assets['./images/CardiacAttackLogo.png'];
	
	logo.addEventListener('touchstart', function() {
		game.replaceScene(oldScene);
		IntroSequence("TEENAGER ON A RAVE", "FIFTEEN ENERGY DRINKS", "GO!!");
	});

	scene.addChild(logo);
	scene.addChild(secProgramming);
	scene.addChild(memProgramming);
	scene.addChild(secArt);
	scene.addChild(memArt);
	scene.addChild(ccmusic);

	game.replaceScene(scene);
}

GameOver = function() {
	game.assets['./sounds/bgmusic/fast.m4a'].stop();
	game.assets['./sounds/sfx/shortSquirt6.mp3'].play();
	var scene = new Scene();
	var introText = new enchant.Label();
	var introText2 = new enchant.Label();

	introText.y = 150;
	introText.x = 400;
	introText.width = 500;
	introText.height = 32;
	introText.font = "16px Monda";
	introText.color = '#AAAAAA';
	introText.textAlign = "center";
	introText.tl.setFrameBased();
	introText.text = "another heart will go on...";

	introText2.y = 200;
	introText2.x = 600;
	introText2.width = 400;
	introText2.height = 64;
	introText2.font = "64px Monda";
	introText2.color = '#FFFFFF';
	introText2.textAlign = "center";
	introText2.tl.setFrameBased();
	introText2.text = "you lose";

	sprite = new Sprite(1138, 640);
	sprite.image = game.assets['./images/GameOver_1134x640.png'];

	scene.addChild(sprite);
	scene.addChild(introText);
	scene.addChild(introText2);

	game.replaceScene(scene);
}
