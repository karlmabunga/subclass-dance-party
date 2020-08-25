var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.getRandom = function (min, max, unit) {
  return Math.floor(Math.random() * (max - min)) + min + unit;
};

Dancer.prototype.setPosition = function (top, left) {
  var positionSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.css(positionSettings);
};