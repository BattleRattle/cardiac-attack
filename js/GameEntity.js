
var GameEntity = function(mainSprite, pulseReference, blackSprite, opacityReference) {

    if (typeof mainSprite === 'undefined' || !(mainSprite instanceof Sprite)) {
        throw new ReferenceError();
    }
    if (typeof pulseReference !== 'function') {
        throw new ReferenceError();
    }
    if (typeof blackSprite !== 'undefined' && !(blackSprite instanceof Sprite)) {
        throw new ReferenceError();
    }
    if (typeof opacityReference !== 'undefined' && typeof opacityReference !== 'function') {
        throw new ReferenceError();
    }
    if (typeof blackSprite !== 'undefined' && typeof opacityReference === 'undefined') {
        throw new ReferenceError();
    }

    this.mainSprite = mainSprite;

    this.pulseReference = pulseReference;

    this.blackSprite = blackSprite;

    this.opacityReference = opacityReference;

    this.initialize();

    this.leftLimit = null;
    this.rightLimit = null;
}

GameEntity.prototype.initialize = function() {
    //
}

GameEntity.prototype.setPos = function(pos) {
    if (typeof pos.x !== 'undefined') {
    	if(this.leftLimit != null && this.rightLimit != null)
    		this.mainSprite.x = Math.min(Math.max(pos.x, this.leftLimit), this.rightLimit);
    	else
    		this.mainSprite.x = pos.x;
    }

    if (typeof pos.y !== 'undefined') {
        this.mainSprite.y = pos.y;
    }

    if (this.blackSprite !== 'undefined') {
      this.blackSprite.x = this.mainSprite.x;
      this.blackSprite.y = this.mainSprite.y;

    }
}

GameEntity.prototype.getPos = function() {
    return {
        x: this.mainSprite.x,
        y: this.mainSprite.y
    };
}

GameEntity.prototype.changePos = function(pos) {
    var current = this.getPos();

    if (typeof pos.x !== 'undefined') {
        current.x += pos.x;
    }
    if (typeof pos.y !== 'undefined') {
        current.y += pos.y;
    }

    this.setPos(current);
}


GameEntity.prototype.setBoundsX = function(left, right) {
	if(typeof left !== 'undefined' && typeof right !== 'undefined' && left < right)
		 this.leftLimit = left;
		 this.rightLimit = right;
}

GameEntity.prototype.setFrame = function(frame) {
    this.mainSprite.frame = frame;

    if (this.blackSprite !== 'undefined') {
        this.blackSprite.frame = frame;
    }
}

var PULSE_MOVEMENT = 5;

GameEntity.prototype.tick = function(game) {
    // update pos and stuff
    var pos = this.getPos();

    pos.x += this.pulseReference() * PULSE_MOVEMENT;

    this.setPos(pos);
}

GameEntity.prototype.switchSprites = function(main, black) {
    if (typeof main === 'undefined' || !(main instanceof Sprite)) {
        throw new ReferenceError();
    }
    if (typeof black !== 'undefined' && !(black instanceof Sprite)) {
        throw new ReferenceError();
    }

    this.mainSprite.image = main.image;
    this.mainSprite.width = main.width;
    this.mainSprite.height = main.height;
    this.mainSprite.frame = 0;
    this.mainSprite.jumping = main.jumping;

    this.blackSprite.image = black.image;
    this.blackSprite.width = main.width;
    this.blackSprite.height = main.height;
    this.blackSprite.frame = 0;
    this.blackSprite.jumping = main.jumping;
}
