var debug = function(x, y) {
    var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
    ctx.beginPath();
    ctx.rect(x, y, 100, 100)
    ctx.fillStyle = 'yellow';
    ctx.fill();
}