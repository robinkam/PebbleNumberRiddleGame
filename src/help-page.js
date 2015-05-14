var UI = require('ui');

var HelpPage = function(){};

HelpPage.prototype.show = function(e) {
  this.card = new UI.Card();
  this.card.title('A Card');
  this.card.subtitle('Is a Window');
  this.card.body('The simplest window type in Pebble.js.');
  this.card.show();
};

module.exports = HelpPage;