var Jets = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="../img/jet_snap.gif"><img>');
  this.setPosition(55, 99, 40, 60);
};

Jets.prototype = Object.create(Dancer.prototype);
Jets.prototype.constructor = Jets;


Jets.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.setPosition(55, 95, 70, 85);
};