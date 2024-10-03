function history(){
    alert("Html5 was created by Mr.Tim Bernerslee in 1991");
}

function printten()
{
    [1,2,3,4,5,6,7,8,9,10].forEach(alert)
}

var canvas  = document.getElementById("mycanvas");
if (canvas.getContext)
    {
   var ctx = canvas.getContext('2d');
   // drawing code here
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();


} else {
   // canvas-unsupported code here
}