var LevelThree = function(game) {
	var bloodflow = 1.0;

	//game.assets['./sounds/bgmusic/fast.m4a'].play();
	var splatterSounds = [	'./sounds/sfx/shortSquirt1.mp3', './sounds/sfx/shortSquirt2.mp3', './sounds/sfx/shortSquirt3.mp3',
							'./sounds/sfx/shortSquirt4.mp3', './sounds/sfx/shortSquirt5.mp3', './sounds/sfx/shortSquirt6.mp3'];

	var bg_static = new Sprite(1138, 640);
	var bg_1 = new Sprite(9000, 640);
	var fg_1 = new Sprite(9000, 640);
	var actor = new Sprite(192, 128);
	var actor2_sprite = new Sprite(192, 128);
	var pulsating_layer = new Sprite(game.width, game.height);
	var border = new Sprite(9000, 640);

	var healthbar = new Bar(0, 0);
	healthbar.image = game.assets["./images/bar.png"];
	healthbar.maxvalue = HEALTH_BAR_LENGTH;

    global_health_bar.attachHealthBar(healthbar);

	pulsating_layer.image = game.assets['./images/pulsating.png'];

	return levelOneObject = {
		scene : new Scene(),
		group : new Group(),

		next : function() {
			game.popScene();
			IntroSequence("TO BE", "CONTINUED", "GO!!");
			GameWon(600);
		},

		init : function() {

			this.scene = new Scene();
			this.group = new Group();
			this.debug = new Surface();
			this.enemies = new Group();
			this.foregrounds = new Group();
			this.bloods = new Group();
			this.stats = new Group();
			this.debris = new Group();

			this.scene.addChild(this.group);

			this.group.addChild(bg_static);
			this.group.addChild(bg_1);
			this.group.addChild(actor);
			this.group.addChild(actor2_sprite);

			this.foregrounds.addChild(fg_1);
			this.foregrounds.addChild(pulsating_layer);
			this.foregrounds.addChild(border);

			this.stats.addChild(healthbar);

			this.scene.addChild(this.enemies);
			this.scene.addChild(this.foregrounds);
			this.scene.addChild(this.bloods);
			this.scene.addChild(this.stats);
			this.scene.addChild(this.debris);

			bg_static.image = game.assets['./images/background_1138x640.jpg'];
			bg_1.image = game.assets['./images/level3_bg.png'];
			fg_1.image = game.assets['./images/level3_foreground.png'];

			bg_1.x = 0;
			fg_1.x = 0;

			//TODO: ADD ENEMIES

			// big thing
			enemy0 = $3n3myF4ctory('ß', this.enemies);
			enemy0.x = 7979;
			enemy0.y = 179;

			// qu fisch
			enemy1 = $3n3myF4ctory(',', this.enemies);
			enemy1.x = 798;
			enemy1.y = 390;

			// qu fisch
			enemy2 = $3n3myF4ctory(',', this.enemies);
			enemy2.x = 1093;
			enemy2.y = 293;

			// qu fisch
			enemy3 = $3n3myF4ctory(',', this.enemies);
			enemy3.x = 1204;
			enemy3.y = 126;

			// qu fisch
			enemy4 = $3n3myF4ctory(',', this.enemies);
			enemy4.x = 1233;
			enemy4.y = 346;

			// qu fisch
			enemy5 = $3n3myF4ctory(',', this.enemies);
			enemy5.x = 1279;
			enemy5.y = 416;

			// qu fisch
			enemy6 = $3n3myF4ctory(',', this.enemies);
			enemy6.x = 1417;
			enemy6.y = 213;

			// qu fisch
			enemy6 = $3n3myF4ctory(',', this.enemies);
			enemy6.x = 2160;
			enemy6.y = 370;

			// qu fisch
			enemy7 = $3n3myF4ctory(',', this.enemies);
			enemy7.x = 2602;
			enemy7.y = 454;

			// qu fisch
			enemy8 = $3n3myF4ctory(',', this.enemies);
			enemy8.x = 3161;
			enemy8.y = 346;

			// qu fisch
			enemy9 = $3n3myF4ctory(',', this.enemies);
			enemy9.x = 3415;
			enemy9.y = 364;

			// qu fisch
			enemy10 = $3n3myF4ctory(',', this.enemies);
			enemy10.x = 3567;
			enemy10.y = 469;

			// qu fisch
			enemy11 = $3n3myF4ctory(',', this.enemies);
			enemy11.x = 3597;
			enemy11.y = 320;

			// qu fisch
			enemy12 = $3n3myF4ctory(',', this.enemies);
			enemy12.x = 4088;
			enemy12.y = 365;

			// qu fisch
			enemy13 = $3n3myF4ctory(',', this.enemies);
			enemy13.x = 4420;
			enemy13.y = 265;

			// qu fisch
			enemy14 = $3n3myF4ctory(',', this.enemies);
			enemy14.x = 4504;
			enemy14.y = 415;

			// qu fisch
			enemy15 = $3n3myF4ctory(',', this.enemies);
			enemy15.x = 4593;
			enemy15.y = 319;

			// qu fisch
			enemy16 = $3n3myF4ctory(',', this.enemies);
			enemy16.x = 4944;
			enemy16.y = 259;

			// qu fisch
			enemy17 = $3n3myF4ctory(',', this.enemies);
			enemy17.x = 5245;
			enemy17.y = 259;

			// qu fisch
			enemy18 = $3n3myF4ctory(',', this.enemies);
			enemy18.x = 5301;
			enemy18.y = 453;

			// qu fisch
			enemy19 = $3n3myF4ctory(',', this.enemies);
			enemy19.x = 5400;
			enemy19.y = 365;

			// qu fisch
			enemy20 = $3n3myF4ctory(',', this.enemies);
			enemy20.x = 5620;
			enemy20.y = 469;

			// qu fisch
			enemy21 = $3n3myF4ctory(',', this.enemies);
			enemy21.x = 5783;
			enemy21.y = 259;

			// qu fisch
			enemy22 = $3n3myF4ctory(',', this.enemies);
			enemy22.x = 5844;
			enemy22.y = 427;

			// qu fisch
			enemy23 = $3n3myF4ctory(',', this.enemies);
			enemy23.x = 6083;
			enemy23.y = 444;

			// qu fisch
			enemy24 = $3n3myF4ctory(',', this.enemies);
			enemy24.x = 6741;
			enemy24.y = 401;

			// qu fisch
			enemy25 = $3n3myF4ctory(',', this.enemies);
			enemy25.x = 6741;
			enemy25.y = 232;

			// qu fisch
			enemy26 = $3n3myF4ctory(',', this.enemies);
			enemy26.x = 7058;
			enemy26.y = 238;

//			// blutkörperchen
//			enemy27 = $3n3myF4ctory('.', this.enemies);
//			enemy27.x = 495;
//			enemy27.y = 396;
//
//			// blutkörperchen
//			enemy28 = $3n3myF4ctory('.', this.enemies);
//			enemy28.x = 595;
//			enemy28.y = 407;
//
//			// blutkörperchen
//			enemy29 = $3n3myF4ctory('.', this.enemies);
//			enemy29.x = 706;
//			enemy29.y = 387;
//
//			// blutkörperchen
//			enemy30 = $3n3myF4ctory('.', this.enemies);
//			enemy30.x = 912;
//			enemy30.y = 322;
//
//			// blutkörperchen
//			enemy31 = $3n3myF4ctory('.', this.enemies);
//			enemy31.x = 1468;
//			enemy31.y = 442;
//
//			// blutkörperchen
//			enemy32 = $3n3myF4ctory('.', this.enemies);
//			enemy32.x = 1818;
//			enemy32.y = 179;
//
//			// blutkörperchen
//			enemy33 = $3n3myF4ctory('.', this.enemies);
//			enemy33.x = 2800;
//			enemy33.y = 350;
//
//			// blutkörperchen
//			enemy34 = $3n3myF4ctory('.', this.enemies);
//			enemy34.x = 3533;
//			enemy34.y = 351;
//
//			// blutkörperchen
//			enemy35 = $3n3myF4ctory('.', this.enemies);
//			enemy35.x = 4610;
//			enemy35.y = 247;
//
//			// blutkörperchen
//			enemy36 = $3n3myF4ctory('.', this.enemies);
//			enemy36.x = 4826;
//			enemy36.y = 351;
//
//			// blutkörperchen
//			enemy37 = $3n3myF4ctory('.', this.enemies);
//			enemy37.x = 5114;
//			enemy37.y = 224;
//
//			// blutkörperchen
//			enemy38 = $3n3myF4ctory('.', this.enemies);
//			enemy38.x = 5170;
//			enemy38.y = 405;
//
//			// blutkörperchen
//			enemy39 = $3n3myF4ctory('.', this.enemies);
//			enemy39.x = 5481;
//			enemy39.y = 305;
//
//			// blutkörperchen
//			enemy40 = $3n3myF4ctory('.', this.enemies);
//			enemy40.x = 5572;
//			enemy40.y = 474;
//
//			// blutkörperchen
//			enemy41 = $3n3myF4ctory('.', this.enemies);
//			enemy41.x = 6091;
//			enemy41.y = 298;
//
//			// blutkörperchen
//			enemy42 = $3n3myF4ctory('.', this.enemies);
//			enemy42.x = 6410;
//			enemy42.y = 240;
//
//			// blutkörperchen
//			enemy43 = $3n3myF4ctory('.', this.enemies);
//			enemy43.x = 6983;
//			enemy43.y = 240;
//
//			// blutkörperchen
//			enemy44 = $3n3myF4ctory('.', this.enemies);
//			enemy44.x = 7567;
//			enemy44.y = 420;
//
//			// blutkörperchen
//			enemy45 = $3n3myF4ctory('.', this.enemies);
//			enemy45.x = 8586;
//			enemy45.y = 272;
//
//			// blutkörperchen
//			enemy46 = $3n3myF4ctory('.', this.enemies);
//			enemy46.x = 8716;
//			enemy46.y = 347;

			actor.image = game.assets['./images/spider_ani_map_960x128.png'];
			actor.vx = 0;
			actor.vy = 0;
			actor.ax = 0;
			actor.ay = 0;
			actor.jumping = true;
			actor.jumpBoost = 0;

			var player = new GameEntity(actor, pulseMovement, actor2_sprite, function() {
				return pulsating_layer.opacity * 2;
			});
			player.setPos({
				x : 0,
				y : 160
			});

			player.setBoundsX(0, 1138-196);

			actor2_sprite.image = game.assets['./images/spider_ani_map_960x128_schwarz.png'];
			actor2_sprite.opacity = 0.0;

			var self = this;

			this.group.addEventListener('enterframe', function(e) {
					if (bg_1.x > -(9000 - 1138)) {
                bg_1.x -= bloodflow * $$$$;
                fg_1.x -= bloodflow * $$$$;
                }else if(actor.x >= 1138-196){
                	self.next();
                }

				for (var i = self.enemies.childNodes.length - 1; i >= 0; i--) {
					self.enemies.childNodes[i].x -= bloodflow * $$$$ - pulseMovement() * 2;
					if (game.frame % 5 == 0 && !(self.enemies.childNodes[i].hasDeadSprite && self.enemies.childNodes[i].frame == self.enemies.childNodes[i].spriteCount)) {
						self.enemies.childNodes[i].frame = ++self.enemies.childNodes[i].frame % self.enemies.childNodes[i].spriteCount;
					}
					;
				}

				for (var i = self.bloods.childNodes.length - 1; i >= 0; i--) {
					self.bloods.childNodes[i].x -= bloodflow * $$$$;
					if (game.frame % 3 == 0) {
						if (self.bloods.childNodes[i].frame + 1 == self.bloods.childNodes[i].spriteCount) {
							self.bloods.removeChild(self.bloods.childNodes[i])
						} else {
							self.bloods.childNodes[i].frame = ++self.bloods.childNodes[i].frame % self.bloods.childNodes[i].spriteCount;
						}
					}
					;
				}

				for (var i = self.debris.childNodes.length - 1; i >= 0; i--) {
                    self.debris.childNodes[i].x -= bloodflow * $$$$ - pulseMovement() * 2;
					if (!self.debris.childNodes[i].dying && game.frame % 5 == 0) {
						self.debris.childNodes[i].frame = ++self.debris.childNodes[i].frame % self.debris.childNodes[i].normalSpriteCount;
					}
					;
				}

                pulsating_layer.opacity = 0.4 + pulseMovement() * 0.4;

				if (game.frame % 3 == 0) {
					actor.frame = (++actor.frame) % 5;
					actor2_sprite.frame = (++actor2_sprite.frame) % 5;
				}

				actor.ax = 0;
				if (game.input.left)
					actor.ax = -0.5 * $$$$;
				else if (game.input.right)
					actor.ax = 0.5 * $$$$;

				if (actor.jumping) {
					if (!game.input.up || --actor.jumpBoost < 0) {
						actor.ay = 0;
					}

					if (game.input.down) {
						actor.ay = 5 * $$$$;
					}
				} else {
					if (game.input.up) {
						actor.jumpBoost = 5 * $$$$;
						actor.ay = -1.75 * $$$$;
					}
				}

				actor.vy += actor.ay + 0.4;
				actor.vy = Math.min(Math.max(actor.vy, -10), 10);

				actor.jumping = true

				actor.vx += actor.ax;
				actor.vx = Math.min(Math.max(actor.vx, -10), 10);

				player.changePos({
					x : actor.vx,
					y : actor.vy
				});

				for (var i = self.enemies.childNodes.length - 1; i >= 0; i--) {
					if (!(self.enemies.childNodes[i].hasDeadSprite && self.enemies.childNodes[i].frame == self.enemies.childNodes[i].spriteCount)) {
						var hit = $$$$$$$$$$$$$$(actor, self.enemies.childNodes[i], collisionMap.actor, collisionMap.enemies[self.enemies.childNodes[i].enemy_id]);
                        if (hit.took_damage && game.frame % 2 == 0) {
                            global_health_bar.updateHealt(-self.enemies.childNodes[i].damage);
                        }

                        if (hit.status == COLLISION_STATUS.COLLIDE || hit.kill_enemy) {
							var blood = $3n3myF4ctory('fake_blood', self.bloods);
							blood.x = parseInt(self.enemies.childNodes[i]._x) + self.enemies.childNodes[i].width / 2 - blood.width / 2;
							blood.y = parseInt(self.enemies.childNodes[i]._y) + self.enemies.childNodes[i].height / 2 - blood.height / 2 - self.enemies.childNodes[i].bloodHeightValue;

							var randomSplatterSound = Math.floor(Math.random() * (splatterSounds.length));
							game.assets[splatterSounds[randomSplatterSound]].play();

							if (!self.enemies.childNodes[i].hasDeadSprite) {
								self.enemies.removeChild(self.enemies.childNodes[i]);
							} else {
								self.enemies.childNodes[i].frame = self.enemies.childNodes[i].spriteCount;
							}
						}
					}
				}

				for (var i = self.debris.childNodes.length - 1; i >= 0; i--) {
					if (!self.debris.childNodes[i].dying) {
						var hit = $$$$$$$$$$$$$$(actor, self.debris.childNodes[i], collisionMap.actor, collisionMap.debris[self.debris.childNodes[i].enemy_id]);
					}

					if (!self.debris.childNodes[i].dying && hit.status == COLLISION_STATUS.DAMAGE && game.frame % 5 == 0) {
                        global_health_bar.updateHealt(-self.debris.childNodes[i].damage);
					} else if (hit.status == COLLISION_STATUS.COLLIDE) {
						self.debris.childNodes[i].dying = true;
						self.debris.childNodes[i].frame = self.debris.childNodes[i].dyingSpriteCount;
					}

					if (self.debris.childNodes[i].dying && game.frame % 5 == 0) {
						if (++self.debris.childNodes[i].frame >= self.debris.childNodes[i].normalSpriteCount + self.debris.childNodes[i].dyingSpriteCount) {
							self.debris.removeChild(self.debris.childNodes[i]);
						}
					}
				}

				x = parseInt(Math.max(0, -fg_1.x + actor.x + 192 / 2));
				x = parseInt(Math.max(0, -fg_1.x + actor.x + 192 / 2));

				// 35 is an offset because there are some transparent pixel at the top of the actor unit (and this is faster then real colition dection :D
				if ( typeof collisionMap.foreground.level2[x] !== 'undefined' && actor.y + 35 < collisionMap.foreground.level2[x][0]) {
					if (actor.vy < 0)
						actor.vy = 0;

					player.setPos({
						y : Math.max(collisionMap.foreground.level2[x][0], actor.y + 35) - 35
					});
				} else if (!(actor.jumping && actor.vy < 0 ) && typeof collisionMap.foreground.level2[x] !== 'undefined' && actor.y > collisionMap.foreground.level2[x][1] - 128) {
					player.setPos({
						y : Math.min(collisionMap.foreground.level2[x][1] - 128, actor.y)
					});

					actor.jumping = false;
				} else if (actor.vy >= 0 && typeof collisionMap.foreground.level2[x] !== 'undefined') {
					player.setPos({
						y : Math.min(collisionMap.foreground.level2[x][1] - 128, actor.y)
					});
				}

				player.tick(game);
			});

			game.pushScene(this.scene);

		}
	};

	new Heartbeat(game, levelOne.group, sounds.heartbeat);
}
