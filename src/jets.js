var Jets = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

Jets.prototype = Object.create(Dancer.prototype);
Jets.prototype.constructor = Jets;

Jets.prototype.step = function () {
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

Jets.prototype.setPosition = function (top, left) {
  Dancer.prototype.setPosition.call(this);

  var styleSettings = {
    'border': '10px solid blue'
  };

  this.$node.css(styleSettings);
};