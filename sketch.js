let burbujas=[];
//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup - frameCount:"+frameCount);
     createCanvas(800,400);

     let x1=random(width) ;
     let y1=random(height) ;
     let radio1= random(20,50);

     let b1 = new Burbuja(x1,y1,radio1);
     burbujas.push(b1);
}

//corre continuamente después de la función setup
function draw(){

    //console.log("draw - frameCount:"+frameCount);
    console.log ("height:" + height);
    console.log ("width:"+ width);
    background (125);
    
    /**for(let i=0; i<burbujas.length; i++){
        burbujas[i].mover();
        burbujas[i].mostrar();
    }**/

    burbujas.forEach(x=>{
        x.mover();
        x.mostrar();
    })

}

function mousePressed(){
    console.log("("+mouseX+","+mouseY+")");

    let radio= random(10,50);
    let b = new Burbuja(mouseX,mouseY,radio);
    burbujas.push(b)
}

class Burbuja{
    constructor(x,y,radio){
        this.x=x;
        this.y=y;
        this.radio=radio
    }
    mover(){
        this.x= this.x + random(-5,5) ;
        this.y= this.y + random(-5,5) ;
    }
    mostrar(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x,this.y,this.radio*2) 

    }

}
