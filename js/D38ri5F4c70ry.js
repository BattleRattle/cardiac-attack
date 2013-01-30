
D38ri5F4c70ry = function(type, debris) {
    switch (type) {
        case 'േ':
            var enemy = new Sprite(64, 65);
            enemy.image = game.assets['./images/flubber.png'];
            enemy.enemy_id = 'േ';
            enemy.normalSpriteCount = 4;
            enemy.dyingSpriteCount = 6;
            enemy.damage = 10;
            enemy.dying = false;
            debris.addChild(enemy);

            return enemy;
        case '᧔':
            var enemy = new Sprite(64, 64);
            enemy.image = game.assets['./images/m_704x64.png'];
            enemy.enemy_id = '᧔';
            enemy.normalSpriteCount = 6;
            enemy.dyingSpriteCount = 5;
            enemy.damage = 10;
            enemy.dying = false;
            debris.addChild(enemy);

            return enemy;
        case 'ᾪ':
            var enemy = new Sprite(64, 64);
            enemy.image = game.assets['./images/plankton.png'];
            enemy.enemy_id = 'ᾪ';
            enemy.normalSpriteCount = 4;
            enemy.dyingSpriteCount = 4;
            enemy.damage = 11;
            enemy.dying = false;
            debris.addChild(enemy);

            return enemy;
    }
}
