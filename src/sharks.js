var Sharks = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

Sharks.prototype = Object.create(Dancer.prototype);
Sharks.prototype.constructor = Sharks;

var switchSize = function() {
  var shark = document.getElementById('dancer');
  if (shark.style.border === '10 px solid green') {
    shark.style.border = '15 px solid green';
  } else {
    shark.style.border = '10 px solid green';
  }
};
Sharks.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  // switchSize();
};

Sharks.prototype.setPosition = function (top, left) {
  Dancer.prototype.setPosition.call(this);

  var xAxis = this.getRandom(5, 45);

  var positionSettings = {
    left: xAxis
  };

  var styleSettings = {
    'border': '10px solid green'
  };

  this.$node.css(styleSettings);
  this.$node.css(positionSettings);
};