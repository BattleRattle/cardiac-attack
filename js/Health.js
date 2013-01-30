var Health = function() {

    var maxHealt = MAX_HEALT;
    var currentHealt = MAX_HEALT;

    var healtBar = undefined;

    this.attachHealthBar = function (healthbar) {
        healtBar = healthbar;
        this.setHealtToBar();
    }

    this.updateHealt = function(value) {
        currentHealt += value;
        //console.log(currentHealt, value);

        if (currentHealt <= 0) {
            GameOver();
        } else {
            this.setHealtToBar();
        }
    }

    this.setHealtToBar = function() {
        healtBar.value = currentHealt / maxHealt * HEALTH_BAR_LENGTH;
    }

}

