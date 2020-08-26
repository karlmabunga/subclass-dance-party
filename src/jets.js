var Jets = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer jet" src="../img/jet_snap.gif"><img>');
  this.setPosition(55, 99, 55, 70);
};

Jets.prototype = Object.create(Dancer.prototype);
Jets.prototype.constructor = Jets;

