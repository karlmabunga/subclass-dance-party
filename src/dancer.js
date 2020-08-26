var Dancer = function (top, left, timeBetweenSteps) {
  //this.$node = $('<div class="dancer"><div>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.getRandom = function (min, max, unit) {
  return Math.floor(Math.random() * (max - min)) + min + unit;
};

Dancer.prototype.setPosition = function (xMin, xMax, yMin, yMax) {
  var yAxis = this.getRandom(yMin, yMax, '%');

  var positionSettings = {
    left: xAxis,
    top: yAxis
  };

  this.$node.css(positionSettings);
};