
var LevelTwo = function (game) {
    var bloodflow = 1.0;

    //game.assets['./sounds/bgmusic/fast.m4a'].play();

    var splatterSounds = [  './sounds/sfx/shortSquirt1.mp3','./sounds/sfx/shortSquirt2.mp3','./sounds/sfx/shortSquirt3.mp3',
                            './sounds/sfx/shortSquirt4.mp3','./sounds/sfx/shortSquirt5.mp3','./sounds/sfx/shortSquirt6.mp3']

    var sounds = {heartbeat : game.assets['./sounds/sfx/heartbeat2.wav']}
    
    var bg_static = new Sprite(1138, 640);
    var bg_1 = new Sprite(9000, 640);
    var fg_1 = new Sprite(9000, 640);
    var actor = new Sprite(192, 128);
    var actor2_sprite = new Sprite(192, 128);
    var pulsating_layer = new Sprite(game.width, game.height);
    var border = new Sprite(9000, 640);

	 var healthbar = new Bar(0, 0);
    healthbar.image = game.assets['./images/bar.png'];
    healthbar.maxvalue = HEALTH_BAR_LENGTH;
    global_health_bar.attachHealthBar(healthbar);

    pulsating_layer.image = game.assets['./images/pulsating.png'];

    return levelOneObject = {
        scene:new Scene(),
        group:new Group(),

        next:function () {
            game.popScene();
            LevelThree(game).init();

            if (!devMode) {
                IntroSequence("CRIME LORD'S TROPHY WIFE", "THINKS THE HIS COKE", "GO!!");
            }

            GameWon(-1);
        },

        init:function () {

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

            var lastSwitch = 3;

            bg_static.image = game.assets['./images/background_1138x640.jpg'];
            bg_1.image = game.assets['./images/level2_bg.png'];
            fg_1.image = game.assets['./images/level2_foreground.png'];

            bg_1.x = 0;
            fg_1.x = 0;

            enemy1 = $3n3myF4ctory('_', this.enemies);
            enemy1.x = 853;
            enemy1.y = 454;

            enemy2 = $3n3myF4ctory('_', this.enemies);
            enemy2.x = 3301;
            enemy2.y = 397;

            enemy3 = $3n3myF4ctory('_', this.enemies);
            enemy3.x = 6346;
            enemy3.y = 160;

            enemy5 = $3n3myF4ctory('.', this.enemies);
            enemy5.x = 432;
            enemy5.y = 281;

            enemy6 = $3n3myF4ctory('.', this.enemies);
            enemy6.x = 513;
            enemy6.y = 257;

            enemy7 = $3n3myF4ctory('.', this.enemies);
            enemy7.x = 595;
            enemy7.y = 280;

            enemy8 = $3n3myF4ctory('.', this.enemies);
            enemy8.x = 772;
            enemy8.y = 233;

            enemy9 = $3n3myF4ctory('.', this.enemies);
            enemy9.x = 867;
            enemy9.y = 515;

            enemy10 = $3n3myF4ctory('.', this.enemies);
            enemy10.x = 1050;
            enemy10.y = 437;

            enemy11 = $3n3myF4ctory('.', this.enemies);
            enemy11.x = 1347;
            enemy11.y = 395;

            enemy12 = $3n3myF4ctory('.', this.enemies);
            enemy12.x = 1858;
            enemy12.y = 413;

            enemy13 = $3n3myF4ctory('.', this.enemies);
            enemy13.x = 2257;
            enemy13.y = 300;

            enemy14 = $3n3myF4ctory('.', this.enemies);
            enemy14.x = 2590;
            enemy14.y = 260;

            enemy15 = $3n3myF4ctory('.', this.enemies);
            enemy15.x = 2790;
            enemy15.y = 150;

            enemy16 = $3n3myF4ctory('.', this.enemies);
            enemy16.x = 3035;
            enemy16.y = 280;

            enemy17 = $3n3myF4ctory('.', this.enemies);
            enemy17.x = 3260;
            enemy17.y = 395;

            enemy18 = $3n3myF4ctory('.', this.enemies);
            enemy18.x = 3660;
            enemy18.y = 436;

            enemy19 = $3n3myF4ctory('.', this.enemies);
            enemy19.x = 3770;
            enemy19.y = 215;

            enemy20 = $3n3myF4ctory('.', this.enemies);
            enemy20.x = 3850;
            enemy20.y = 240;

            enemy21 = $3n3myF4ctory('.', this.enemies);
            enemy21.x = 4260;
            enemy21.y = 210;

            enemy22 = $3n3myF4ctory('.', this.enemies);
            enemy22.x = 4500;
            enemy22.y = 170;

            enemy23 = $3n3myF4ctory('.', this.enemies);
            enemy23.x = 4860;
            enemy23.y = 125;

            enemy24 = $3n3myF4ctory('.', this.enemies);
            enemy24.x = 5454;
            enemy24.y = 127;

            enemy25 = $3n3myF4ctory('.', this.enemies);
            enemy25.x = 6310;
            enemy25.y = 100;

            enemy26 = $3n3myF4ctory('.', this.enemies);
            enemy26.x = 6380;
            enemy26.y = 127;

            enemy27 = $3n3myF4ctory('.', this.enemies);
            enemy27.x = 7025;
            enemy27.y = 260;

            enemy28 = $3n3myF4ctory('.', this.enemies);
            enemy28.x = 7500;
            enemy28.y = 280;

            enemy29 = $3n3myF4ctory('.', this.enemies);
            enemy29.x = 7540;
            enemy29.y = 127;

            enemy30 = $3n3myF4ctory('.', this.enemies);
            enemy30.x = 7580;
            enemy30.y = 233;

            enemy31 = $3n3myF4ctory('.', this.enemies);
            enemy31.x = 8055;
            enemy31.y = 233;

            enemy32 = $3n3myF4ctory('+', this.enemies);
            enemy32.x = 868;
            enemy32.y = 200;

            enemy33 = $3n3myF4ctory('+', this.enemies);
            enemy33.x = 955;
            enemy33.y = 170;

            enemy34 = $3n3myF4ctory('+', this.enemies);
            enemy34.x = 1000;
            enemy34.y = 290;

            enemy35 = $3n3myF4ctory('+', this.enemies);
            enemy35.x = 1200;
            enemy35.y = 330;

            enemy36 = $3n3myF4ctory('+', this.enemies);
            enemy36.x = 1340;
            enemy36.y = 245;

            enemy37 = $3n3myF4ctory('+', this.enemies);
            enemy37.x = 1465;
            enemy37.y = 340;

            enemy38 = $3n3myF4ctory('+', this.enemies);
            enemy38.x = 1885;
            enemy38.y = 290;

            enemy39 = $3n3myF4ctory('+', this.enemies);
            enemy39.x = 2175;
            enemy39.y = 400;

            enemy40 = $3n3myF4ctory('+', this.enemies);
            enemy40.x = 2900;
            enemy40.y = 170;

            enemy41 = $3n3myF4ctory('+', this.enemies);
            enemy41.x = 4165;
            enemy41.y = 395;

            enemy42 = $3n3myF4ctory('+', this.enemies);
            enemy42.x = 4500;
            enemy42.y = 340;

            enemy43 = $3n3myF4ctory('+', this.enemies);
            enemy43.x = 5050;
            enemy43.y = 80;

            enemy44 = $3n3myF4ctory('+', this.enemies);
            enemy44.x = 5370;
            enemy44.y = 310;

            enemy45 = $3n3myF4ctory('+', this.enemies);
            enemy45.x = 5750;
            enemy45.y = 260;

            enemy46 = $3n3myF4ctory('+', this.enemies);
            enemy46.x = 6220;
            enemy46.y = 260;

            enemy47 = $3n3myF4ctory('+', this.enemies);
            enemy47.x = 6843;
            enemy47.y = 490;

            enemy48 = $3n3myF4ctory('+', this.enemies);
            enemy48.x = 7173;
            enemy48.y = 515;

            enemy49 = $3n3myF4ctory('+', this.enemies);
            enemy49.x = 7785;
            enemy49.y = 444;

            enemy50 = $3n3myF4ctory('+', this.enemies);
            enemy50.x = 8788;
            enemy50.y = 285;

            actor.image = game.assets['./images/spider_ani_map_960x128.png'];
            actor.vx = 0;
            actor.vy = 0;
            actor.ax = 0;
            actor.ay = 0;
            actor.jumping = true;
            actor.jumpBoost = 0;
            actor.dive = false;

            var player = new GameEntity(actor, pulseMovement, actor2_sprite, function () {
                return pulsating_layer.opacity * 2;
            });
            player.setPos({
                x:0,
                y:160
            });

            player.setBoundsX(0, 1138-196);

            actor2_sprite.image = game.assets['./images/spider_ani_map_960x128_schwarz.png'];
            actor2_sprite.opacity = 0.0;

            var self = this;

            this.group.addEventListener('enterframe', function (e) {

                if (bg_1.x > -(9000 - 1138)) {
                bg_1.x -= bloodflow * GameSpeed;
                fg_1.x -= bloodflow * GameSpeed;
                }else if(actor.x >= 1138-196){
                	self.next();
                }


                for (var i = self.enemies.childNodes.length - 1; i >= 0; i--) {
                    self.enemies.childNodes[i].x -= bloodflow * GameSpeed - pulseMovement() * 2;
                    if (game.frame % 5 == 0 && !(self.enemies.childNodes[i].hasDeadSprite && self.enemies.childNodes[i].frame == self.enemies.childNodes[i].spriteCount)) {
                        self.enemies.childNodes[i].frame = ++self.enemies.childNodes[i].frame % self.enemies.childNodes[i].spriteCount;
                    }
                    ;
                }

                for (var i = self.bloods.childNodes.length - 1; i >= 0; i--) {
                    self.bloods.childNodes[i].x -= bloodflow * GameSpeed;
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
                    self.debris.childNodes[i].x -= bloodflow * GameSpeed - pulseMovement() * 2;
                    if (!self.debris.childNodes[i].dying && game.frame % 5 == 0) {
                        self.debris.childNodes[i].frame = ++self.debris.childNodes[i].frame % self.debris.childNodes[i].normalSpriteCount;
                    }
                    ;
                }

                pulsating_layer.opacity = 0.4 + pulseMovement() * 0.4;

                if (game.frame % 3 == 0) {
                    if (actor.image == game.assets['./images/jump_cycle.png'] || actor.image == game.assets['./images/dive_cycle.png']) {
                        actor.frame = (++actor.frame) % 3;
                        actor2_sprite.frame = (++actor2_sprite.frame) % 3;
                    } else if (actor.image == game.assets['./images/spider_ani_map_960x128.png']) {
                        actor.frame = (++actor.frame) % 5;
                        actor2_sprite.frame = (++actor2_sprite.frame) % 5;
                    }
                }

                actor.ax = 0;
                if (game.input.left)
                    actor.ax = -0.5 * GameSpeed;
                else if (game.input.right)
                    actor.ax = 0.5 * GameSpeed;

                if (actor.jumping) {
                    if (!game.input.up || --actor.jumpBoost < 0) {
                        actor.ay = 0;
                    }

                    if (game.input.down) {
                        actor.ay = 5 * GameSpeed;
                        actor.dive = true;
                    }
                } else {
                    actor.dive = false;

                    if (game.input.up) {
                        actor.jumpBoost = 5 * GameSpeed;
                        actor.ay = -1.75 * GameSpeed;
                    }
                }

                actor.vy += actor.ay + 0.4;
                actor.vy = Math.min(Math.max(actor.vy, -10), 10);

                if (game.frame % 3 == 0) {
                    if (actor.jumping && actor.ay <= 0 && !actor.dive) {
                        if (lastSwitch !== 1) {
                            var newActor = new Sprite(192, 192);
                            newActor.image = game.assets['./images/jump_cycle.png'];

                            var newActor2Sprite = new Sprite(192, 192);
                            newActor2Sprite.image = game.assets['./images/jump_cycle_schwarz.png'];

                            player.switchSprites(newActor, newActor2Sprite);
                            actor = player.mainSprite;
                            actor2_sprite = player.blackSprite;

                            lastSwitch = 1;
                        }
                    } else if (actor.jumping && actor.dive) {
                        if (lastSwitch !== 2) {
                            var newActor = new Sprite(192, 192);
                            newActor.image = game.assets['./images/dive_cycle.png'];

                            var newActor2Sprite = new Sprite(192, 192);
                            newActor2Sprite.image = game.assets['./images/dive_cycleschwarz.png'];

                            player.switchSprites(newActor, newActor2Sprite);
                            actor = player.mainSprite;
                            actor2_sprite = player.blackSprite;

                            lastSwitch = 2;
                        }
                    } else {
                        if (lastSwitch !== 3) {
                            var newActor = new Sprite(192, 128);
                            newActor.image = game.assets['./images/spider_ani_map_960x128.png'];

                            var newActor2Sprite = new Sprite(192, 128);
                            newActor2Sprite.image = game.assets['./images/spider_ani_map_960x128_schwarz.png'];

                            player.switchSprites(newActor, newActor2Sprite);
                            actor = player.mainSprite;
                            actor2_sprite = player.blackSprite;

                            lastSwitch = 3;
                        }
                    }
                }

                actor.jumping = true

                actor.vx += actor.ax;
                actor.vx = Math.min(Math.max(actor.vx, -10), 10);

                player.changePos({
                    x:actor.vx,
                    y:actor.vy
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
                if (typeof collisionMap.foreground.level2[x] !== 'undefined' && actor.y + 35 < collisionMap.foreground.level2[x][0]) {
                    if (actor.vy < 0)
                        actor.vy = 0;

                    player.setPos({
                        y:Math.max(collisionMap.foreground.level2[x][0], actor.y + 35) - 35
                    });
                } else if (!(actor.jumping && actor.vy < 0 ) && typeof collisionMap.foreground.level2[x] !== 'undefined' && actor.y > collisionMap.foreground.level2[x][1] - 128) {
                    player.setPos({
                        y:Math.min(collisionMap.foreground.level2[x][1] - 128, actor.y)
                    });

                    actor.jumping = false;
                } else if (actor.vy >= 0 && typeof collisionMap.foreground.level2[x] !== 'undefined') {
                    player.setPos({
                        y:Math.min(collisionMap.foreground.level2[x][1] - 128, actor.y)
                    });
                }

                player.tick(game);
            });

            game.pushScene(this.scene);
        }
    };
}
