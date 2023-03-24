var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
// c.fillStyle="#1b3f49";
// c.fillRect(100,100,100,100);
// c.fillStyle="#3b3c36";
// c.fillRect(200,200,100,100);
// c.fillStyle="#240000";
// c.fillRect(300,300,100,100);
//
// c.beginPath();
// c.moveTo(400,200);
// c.lineTo(500,500);
// c.strokeStyle="rgba(28,23,180)";
// c.stroke();
// for(var i=0;i<100;i++){
//
//     var x=Math.random()*window.innerWidth,y=Math.random()*window.innerHeight,r=Math.random()*255,b=Math.random()*255,g=Math.random()*255;
//
//     c.beginPath();
//     c.strokeStyle="rgb(r,b,g)";
//     c.arc(x,y,100,0,Math.PI*2,false);
//     c.stroke();
// }
var x=100,y=100;
var dx=5,dy=5;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.strokeStyle="rgb(0,0,0)";
    c.arc(x,y,100,0,Math.PI*2,false);
    c.stroke();
    if(x>=canvas.width-99||x<=99){
        dx=-dx;
    }
    if(y>=canvas.height-99||y<=99){
        dy=-dy;
    }
    x+=dx,y+=dy;
}
animate();

console.log(canvas);
