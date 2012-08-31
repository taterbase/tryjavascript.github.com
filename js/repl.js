function Repl(ctx){
  var self = this;

  this.content = '>_';
  this.ctx = ctx;

  this.ctx.fillText(self.content, 10, 30);
}

Repl.prototype.addChar = function(char){
  var self = this;
  self.content = self.content.substring(0, self.content.length - 1) + char + '_';

  self.ctx.clearRect(0, 0, 500, 650);
  self.ctx.fillText(self.content, 10, 30);
}

$(function(){
  var ctx = $('canvas#repl')[0].getContext('2d');
  ctx.font = "12px Arial";

  var repl = new Repl(ctx);

  $(document).keyup(function(e){
    var char = String.fromCharCode(e.keyCode);
    repl.addChar(char);
  });
});
