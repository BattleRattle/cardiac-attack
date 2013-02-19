
var LevelOne = function (game) {
    var bloodflow = 1.0;
    var health = 100;

    var splatterSounds = [  './sounds/sfx/shortSquirt1.mp3','./sounds/sfx/shortSquirt2.mp3','./sounds/sfx/shortSquirt3.mp3',
                            './sounds/sfx/shortSquirt4.mp3','./sounds/sfx/shortSquirt5.mp3','./sounds/sfx/shortSquirt6.mp3']

	var sounds = {heartbeat : game.assets['./sounds/sfx/heartbeat2.wav']}
    
    var bg_static = new Sprite(1138, 640);
    var bg_1 = new Sprite(3008, 640);
    var fg_1 = new Sprite(3008, 640);
    var actor = new Sprite(192, 128);
    var actor2_sprite = new Sprite(192, 128);
    var pulsating_layer = new Sprite(game.width, game.height);
    var border = new Sprite(3008, 640);

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
            LevelTwo(game).init();
            game.assets['./sounds/bgmusic/fast.m4a'].stop();

            if (!devMode) {
                IntroSequence("OVERJUICING WEIGHTLIFTER", "ROID RAGE", "GO!!");
            }

            GameWon(90);

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
            bg_1.image = game.assets['./images/level1_bg.png'];
            fg_1.image = game.assets['./images/level1_foreground_3008x640.png'];

            bg_1.x = 0;
            fg_1.x = 0;
            
            firstScropion = $3n3myF4ctory('_', this.enemies);
            firstScropion.x = 570;
            firstScropion.y = 110;

            enemy1 = $3n3myF4ctory('..', this.enemies);
            enemy1.x = 2353;
            enemy1.y = 167;

            enemy2 = $3n3myF4ctory('..', this.enemies);
            enemy2.x = 2619;
            enemy2.y = 144;

            enemy3 = $3n3myF4ctory('..', this.enemies);
            enemy3.x = 1940;
            enemy3.y = 211;

            enemy4 = $3n3myF4ctory('..', this.enemies);
            enemy4.x = 2530;
            enemy4.y = 227;

            enemy5 = $3n3myF4ctory('..', this.enemies);
            enemy5.x = 2743;
            enemy5.y = 195;


            enemy11 = $3n3myF4ctory('..', this.enemies);
            enemy11.x = 595;
            enemy11.y = 162;

            enemy12 = $3n3myF4ctory('..', this.enemies);
            enemy12.x = 632;
            enemy12.y = 210;

            enemy13 = $3n3myF4ctory('..', this.enemies);
            enemy13.x = 644;
            enemy13.y = 120;

            enemy14 = $3n3myF4ctory('..', this.enemies);
            enemy14.x = 662;
            enemy14.y = 166;

            enemy15 = $3n3myF4ctory('..', this.enemies);
            enemy15.x = 684;
            enemy15.y = 144;

            enemy16 = $3n3myF4ctory('..', this.enemies);
            enemy16.x = 693;
            enemy16.y = 178;

            enemy17 = $3n3myF4ctory('..', this.enemies);
            enemy17.x = 709;
            enemy17.y = 111;

            enemy18 = $3n3myF4ctory('..', this.enemies);
            enemy18.x = 729;
            enemy18.y = 206;





            enemy21 = $3n3myF4ctory('..', this.enemies);
            enemy21.x = 1662;
            enemy21.y = 170;

            enemy22 = $3n3myF4ctory('..', this.enemies);
            enemy22.x = 1698;
            enemy22.y = 214;

            enemy23 = $3n3myF4ctory('..', this.enemies);
            enemy23.x = 1711;
            enemy23.y = 123;

            enemy24 = $3n3myF4ctory('..', this.enemies);
            enemy24.x = 1729;
            enemy24.y = 172;

            enemy25 = $3n3myF4ctory('..', this.enemies);
            enemy25.x = 1748;
            enemy25.y = 143;

            enemy26 = $3n3myF4ctory('..', this.enemies);
            enemy26.x = 1760;
            enemy26.y = 185;

            enemy27 = $3n3myF4ctory('..', this.enemies);
            enemy27.x = 1778;
            enemy27.y = 117;

            enemy28 = $3n3myF4ctory('..', this.enemies);
            enemy28.x = 1796;
            enemy28.y = 210;


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
                if (bg_1.x > -(3008 - 1138)) {
                bg_1.x -= bloodflow * GameSpeed;
                fg_1.x -= bloodflow * GameSpeed;
                }else if(actor.x >= (1138 - 196)){
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

                actor.jumping = true;

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

                // 35 is an offset because there are some transparent pixel at the top of the actor unit (and this is faster then real colition dection :D
                if (typeof collisionMap.foreground.level1[x] !== 'undefined' && actor.y + 35 < collisionMap.foreground.level1[x][0]) {
                    if (actor.vy < 0)
                        actor.vy = 0;

                    player.setPos({
                        y:Math.max(collisionMap.foreground.level1[x][0], actor.y + 35) - 35
                    });
                } else if (!(actor.jumping && actor.vy < 0 ) && typeof collisionMap.foreground.level1[x] !== 'undefined' && actor.y > collisionMap.foreground.level1[x][1] - 128) {
                    player.setPos({
                        y:Math.min(collisionMap.foreground.level1[x][1] - 128, actor.y)
                    });

                    actor.jumping = false;
                } else if (actor.vy >= 0 && typeof collisionMap.foreground.level1[x] !== 'undefined') {
                    player.setPos({
                        y:Math.min(collisionMap.foreground.level1[x][1] - 128, actor.y)
                    });
                }

                player.tick(game);
            });

            new Heartbeat(game, this.group, sounds.heartbeat);
            game.pushScene(this.scene);
        }
    };
}
