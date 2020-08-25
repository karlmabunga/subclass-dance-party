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
  // if (this.left < 670) {
  //   this.left = Sharks.double(this.left) + 400;
  //   if (this.left > 1300) {
  //     this.left = 1300;
  //   }
  // }

  Dancer.prototype.setPosition.call(this);

  var xAxis = this.getRandom(55, 95);

  var positionSettings = {
    left: xAxis
  };

  var styleSettings = {
    'border': '10px solid blue'
  };

  this.$node.css(styleSettings);
  this.$node.css(positionSettings);
};