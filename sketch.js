//corre solo una vez cuando inicia el programa
let total=100 ;
let ini_x=0;
let ini_y=0;

function setup(){
    console.log("setup - frameCount:"+frameCount);
     createCanvas(300,300);
     background (125);
}

//corre continuamente después de la función setup
function draw(){

    console.log("draw - frameCount:"+frameCount);
    console.log ("height:" + height);
    console.log ("width:"+ width);
   

}

class Burbuja{
    constructor(x,y,radio){
        this.x=x;
        this.y=y;
    }
}
