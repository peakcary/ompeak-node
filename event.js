var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

life.on("ooo",function(who){
  console.log(who);
});

life.emit("ooo",'a')
