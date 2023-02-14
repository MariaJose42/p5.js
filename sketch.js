//corre solo una vez cuando inicia el programa
var texto;
function setup(){
    console.log("setup - frameCount:"+frameCount);
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(400,400);
    background(200)

    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);
    texto= "Hola Mundo" ;

}

//corre continuamente después de la función setup
function draw(){
    console.log("draw - frameCount:"+frameCount);
    background(125)
    /*line(0,0,50,50)
    line(50,50,100,0)
    line(100,0,150,50)
    line(150,50,200,0) */

    fill(100,125,225);
    ellipse(frameCount%400,100,100,40)   ;
    fill (0,225,225) ;
    rect(300,300,100,50);

    //var text= "Hola Mundo" ;
    textSize(60);
    text(texto,30,30,200,200)

}

function cambiaTexto(){
    texto=document.getElementById("texto").value ;
}
