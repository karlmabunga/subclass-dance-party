var MovingDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype.setPosition = function (min, max) {
  Dancer.prototype.setPosition.call(this);

  var xAxis = this.getRandom(min, max, '%');
  var yAxis = this.getRandom(min, max, '%');

  var positionSettings = {
    left: xAxis,
    top: yAxis
  };

  this.$node.css(styleSettings);
  this.$node.css(positionSettings);
  return [xAxis, yAxis];
};

MovingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  position = this.setPosition();

};