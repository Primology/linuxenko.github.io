/* (c) linuxenko.pro */
!function(a){var b=a.Engine||{};!function(a){a.Cube=function(){},a.Cube.prototype.draw=function(a){var b=a.ctx,c=Math.round(a.dim.sx/3);b.moveTo(a.x+c,a.y),b.lineTo(a.x+2*c,a.y),b.lineTo(a.x+a.dim.sx,a.y+c),b.lineTo(a.x+a.dim.sx,a.y+2*c),b.lineTo(a.x+2*c,a.y+a.dim.sy),b.lineTo(a.x+c,a.y+a.dim.sy),b.lineTo(a.x,a.y+2*c),b.lineTo(a.x,a.y+c),b.lineTo(a.x+c,a.y),b.closePath(),b.fill()},a.DecorScene=function(a){if("undefined"==typeof a)throw"No Scene provided";this.scene=a,this.dim={sx:30,sy:30},this.setup().refresh()},a.DecorScene.prototype.setup=function(){var a=this.scene.ctx;return a.clearRect(0,0,this.scene.width,this.scene.height),a.fillStyle="transparent",this},a.DecorScene.prototype.refresh=function(){var a=this.scene.ctx;a.beginPath();var b=1970;return a.moveTo(b,0),a.strokeStyle="rgba(0,0,0,0.2)",a.lineWidth="6",a.bezierCurveTo(b,400,0,0,-400,400),a.stroke(),a.beginPath(),cL=b-50,a.moveTo(cL,0),a.strokeStyle="rgba(208,31,60,0.3)",a.lineWidth="6",a.bezierCurveTo(cL,9e3,0,9e3,0,9e3),a.stroke(),this},a.Scene=function(){var a=this;this.el=document.getElementById("canv"),this.height=this.el.height,this.width=this.el.width,this.ctx=null;try{if(a.ctx=a.el.getContext("2d"),!a.ctx)throw"Context does not supported"}catch(b){throw b}}}(b);var c=function(){var a=b.Scene,c=b.DecorScene,d=new c(new a);document.getElementById("main-wrapper").style.backgroundImage='url("'+d.scene.el.toDataURL()+'")'};a.onload=function(){new c}}(window);