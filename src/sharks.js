var Sharks = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer shark" src="../img/shark.png"><img>');
  this.setPosition(0, 30, 45, 55);
};

Sharks.prototype = Object.create(Dancer.prototype);
Sharks.prototype.constructor = Sharks;