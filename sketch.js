var canvs;
var p1;

function setup() {
  canvs=createCanvas(200,200);
    canvs.position(400,500);
    p1=createElement('h1','私をクリックして【○】、あなたが私と契約を結び、魔法の女の子になることを願っています。ЁОНЪЛВНСИрН！');
}

function mousePressed(){
   p1.html("嘻嘻嘻~~骗你的啦~~~没有马猴烧酒哟~你跟我签订的可是一辈子的那种契约哟~~~");
    createP("嘿嘿~最喜欢你啦~~~");
    createP("( *¯ ³¯*)♡ㄘゅ~~~啵唧！~");
  
}
function draw() {
    stroke(235,122,119);
    line(0,0,1020,1080);
    Fill(232,48,21);
    ellipse(600,400);
}
