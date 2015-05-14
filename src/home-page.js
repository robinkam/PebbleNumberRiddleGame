var UI = require('ui');
var MenuPage = require('menu-page');

var HomePage = function(){
  this.main = new UI.Card({
    title: '猜数字',
    icon: 'images/menu_icon.png',
    subtitle: 'Classic intellegent game',
    body: 'Press any button to continue...'
  });
  this.menuPage = new MenuPage();
};

HomePage.prototype.show = function(e) {
  this.main.show();
  this.main.on('click', 'select', this.menuPage.show(e));
  this.main.on('click', 'up', this.menuPage.show(e));
  this.main.on('click', 'down', this.menuPage.show(e));
};

module.exports = HomePage;