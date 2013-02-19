
$3n3myF4ctory = function (type, enemies) {
    switch (type) {
        case '_':
            var enemy = new Sprite(192, 192);
            enemy.image = game.assets['./images/enemy01_skorpioni.png'];
            enemy.enemy_id = '_';
            enemy.spriteCount = 2;
            enemy.damage = 10;
            enemy.bloodHeightValue = 0;
            enemy.hasDeadSprite = true;
            enemies.addChild(enemy);

            return enemy;
        case '☃':
            var enemy = new Sprite(128, 64);
            enemy.image = game.assets['./images/enemie02_nausicaa.png'];
            enemy.enemy_id = '☃';
            enemy.spriteCount = 1;
            enemy.damage = 10;
            enemy.bloodHeightValue = 75;
            enemy.hasDeadSprite = true;
            enemies.addChild(enemy);

            return enemy;
        case '£':
            var enemy = new Sprite(64, 64);
            enemy.image = game.assets['./images/enemie03_Quall.png'];
            enemy.enemy_id = '£';
            enemy.spriteCount = 1;
            enemy.damage = 10;
            enemy.bloodHeightValue = 75;
            enemy.hasDeadSprite = false;
            enemies.addChild(enemy);

            return enemy;
        case '$':
            var enemy = new Sprite(64, 128);
            enemy.image = game.assets['./images/enemy04_metroid.png'];
            enemy.enemy_id = '$';
            enemy.spriteCount = 1;
            enemy.damage = 10;
            enemy.bloodHeightValue = 75;
            enemy.hasDeadSprite = false;
            enemies.addChild(enemy);

            return enemy;
        case '.':
            var enemy = new Sprite(64, 64);
            enemy.image = game.assets['./images/Enemy05_Blutkoerperchen.png'];
            enemy.enemy_id = '.';
            enemy.spriteCount = 5;
            enemy.damage = -5;
            enemy.bloodHeightValue = 75;
            enemy.hasDeadSprite = false;
            enemies.addChild(enemy);

            return enemy;
        case '+':
            var enemy = new Sprite(64, 64);
            enemy.image = game.assets['./images/Stachel.png'];
            enemy.enemy_id = '+';
            enemy.spriteCount = 4;
            enemy.damage = 2;
            enemy.bloodHeightValue = 75;
            enemy.hasDeadSprite = false;
            enemies.addChild(enemy);

            return enemy;
        case ',':
            var enemy = new Sprite(64, 64);
            enemy.image = game.assets['./images/Enemie08_QuFisch.png'];
            enemy.enemy_id = ',';
            enemy.spriteCount = 2;
            enemy.damage = 10;
            enemy.bloodHeightValue = 75;
            enemy.hasDeadSprite = false;
            enemies.addChild(enemy);

            return enemy;
        case 'ß':
            var enemy = new Sprite(320, 320);
            enemy.image = game.assets['./images/BigThingGrid.png'];
            enemy.enemy_id = 'ß';
            enemy.spriteCount = 2;
            enemy.damage = 10;
            enemy.bloodHeightValue = 75;
            enemy.hasDeadSprite = false;
            enemies.addChild(enemy);

            return enemy;
        case '..':
            var enemy = new Sprite(64, 64);
            enemy.image = game.assets['./images/enemy06_qualle.png'];
            enemy.enemy_id = '..';
            enemy.spriteCount = 2;
            enemy.damage = 10;
            enemy.bloodHeightValue = 75;
            enemy.hasDeadSprite = false;
            enemies.addChild(enemy);

            return enemy;
        case 'fake_blood':
            var enemy = new Sprite(384, 256);
            enemy.image = game.assets['./images/Blood.png'];
            enemy.enemy_id = 'fake_blood';
            enemy.spriteCount = 5;
            enemy.damage = 0;
            enemies.addChild(enemy);

            return enemy;
        default:
            var enemy = new Sprite(192, 192);
            enemy.image = game.assets['./images/enemy01_skorpioni.png'];
            enemy.enemy_id = '_';
            enemy.spriteCount = 2;
            enemy.damage = 10;
            enemies.addChild(enemy);

            return enemy;
    }
}
