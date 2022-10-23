var canvas, context;
//canvas=document.getElementById('canvas');
//context=canvas.getContext('2d');

//crea el elemento canvas
canvas = document.createElement('canvas');

canvas.width = 500;
canvas.height = 250;
canvas.style.border = "1px solid black";

var context = canvas.getContext('2d');
context.font = '30px Cursive';
context.fillText("Hola mundo", 50, 50);

function agregarCanvas() {
    document.body.appendChild(canvas);
}

function removerCanvas() {
    document.body.removeChild(canvas);

}



