var Sharks = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer shark" src="../img/shark.png"><img>');
  this.setPosition(0, 30, 40, 60);
};

Sharks.prototype = Object.create(Dancer.prototype);
Sharks.prototype.constructor = Sharks;

// Sharks.prototype.setPosition = function (top, left) {
//   //Dancer.prototype.setPosition.call(this);

//   var xAxis = this.getRandom(5, 45, '%');
//   var yAxis = this.getRandom(87, 99, '%');

//   var positionSettings = {
//     left: xAxis,
//     top: yAxis
//   };

//   var styleSettings = {
//     'border': '10px solid green'
//   };

//   this.$node.css(styleSettings);
//   this.$node.css(positionSettings);
//   return [xAxis, yAxis];
// };

Sharks.prototype.step = function () {
  Dancer.prototype.step.call(this);
  position = this.setPosition();
};