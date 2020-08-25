var Jets = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

Jets.prototype = Object.create(Dancer.prototype);
Jets.prototype.constructor = Jets;

Jets.prototype.setPosition = function (top, left) {
  Dancer.prototype.setPosition.call(this);

  var xAxis = this.getRandom(55, 95, '%');
  var yAxis = this.getRandom(87, 99, '%');

  var positionSettings = {
    left: xAxis,
    top: yAxis
  };

  var styleSettings = {
    'border': '10px solid blue'
  };

  this.$node.css(styleSettings);
  this.$node.css(positionSettings);
  return [xAxis, yAxis];
};

Jets.prototype.step = function () {
  Dancer.prototype.step.call(this);
  position = this.setPosition();
};