// JS模块化编程实验
var UI = require('ui');

/// 使用构造函数定义类
// var MyModule = function(){
//   this.show = function(e){ 
//       var main = new UI.Card({
//         title: 'Number Riddle',
//         icon: 'images/menu_icon.png',
//         subtitle: '经典益智游戏',
//         body: '按任意键继续...'
//       });
//       main.show();
//     };
// };

/// 使用极简方法定义类
// var MyModule = {
//   createNew: function(){
//     var mymodule = {};
//     mymodule.show = function(){ 
//       var main = new UI.Card({
//         title: 'Number Riddle',
//         icon: 'images/menu_icon.png',
//         subtitle: '经典益智游戏',
//         body: '按任意键继续...'
//       });
//       main.show();
//     };
//     return mymodule;
//   }
// };

/// 使用混合构造函数+原型方法定义类
var MyModule = function(){
  
};

MyModule.prototype.show = function(){
  var main = new UI.Card({
    title: 'Number Riddle',
    icon: 'images/menu_icon.png',
    subtitle: 'Classic Game',
    body: 'Press any key...'
  });
  main.show();
};

module.exports = MyModule;