var UI = require('ui');
var GamePage = require('game-page');
var RankPage = require('rank-page');
var AchievementsPage = require('achievements-page');
var HelpPage = require('help-page');

var MenuPage = function(){};

MenuPage.prototype.show = function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: '开始游戏'
      }, {
        title: '排行榜'
      }, {
        title: '我的战绩'
      }, {
        title: '帮助'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
    switch(e.itemIndex){
      case 0: new GamePage().show(e); break;
      case 1: new RankPage().show(e); break;
      case 2: new AchievementsPage().show(e); break;
      case 3: new HelpPage().show(e); break;
      default: break;
    }
  });
  menu.show();
};

module.exports = MenuPage;