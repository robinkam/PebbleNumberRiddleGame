var UI = require('ui');
var Vector2 = require('vector2');

var GamePage = function(){};

GamePage.prototype.show = function(e) {
  // initialize models
  var numberLabels = [];
  var numbers = [];
  var cursorIndex = 0;
  // initialize views
  var wind = new UI.Window();
  var unitWidth = 28;
  var unitHeight = 38;
  var startX = 8;
  var startY = 24;
  var gapX = 5;
  var addDigit = function(window, index){
    numbers.push(0);
    var x = startX + index * (gapX + unitWidth);
    var box = new UI.Rect({
      position: new Vector2(x, startY),
      size: new Vector2(unitWidth, unitHeight)
    });
    var label = new UI.Text({
      position: new Vector2(x, startY),
      size: new Vector2(unitWidth, unitHeight),
      font: 'gothic-28-bold',
      color: 'black',
      text: numbers[index],
      textAlign: 'center'
    });
    numberLabels.push(label);
    window.add(box);
    window.add(label);
  };
  for(var i=0; i<4; i++){
    addDigit(wind, i);    
  }
  
  var updateCursorPosition = function(cursor){
    var cursorX = startX + cursorIndex * (gapX + unitWidth);
    var cursorY = startY + unitHeight + 2;
    cursor.position(new Vector2(cursorX, cursorY));
    console.log('cursor postion: ' + cursor.position());
  };
  
  var cursor = new UI.Rect({
    position: new Vector2(0, 0),
    size: new Vector2(unitWidth, 2)
  });
  wind.add(cursor);
  updateCursorPosition(cursor);

  wind.show();
  // handle interactions
  wind.on('click', 'up', function(e){
    numbers[cursorIndex] = (numbers[cursorIndex] + 1) % 10;
    numberLabels[cursorIndex].text(numbers[cursorIndex]);
    console.log('Increase number at index: ' + cursorIndex + ' to value: ' + numbers[cursorIndex]);
  });
  wind.on('click', 'down', function(e){
    numbers[cursorIndex] = (numbers[cursorIndex] - 1 + 10) % 10;
    numberLabels[cursorIndex].text(numbers[cursorIndex]);
    console.log('Decrease number at index: ' + cursorIndex + ' to value: ' + numbers[cursorIndex]);
  });
  wind.on('click', 'select', function(e){
    cursorIndex = (cursorIndex + 1) % 4;
    updateCursorPosition(cursor);
    console.log('Update cursor to index: ' + cursorIndex + ' to position: ' + cursor.position());
  });
};

module.exports = GamePage;