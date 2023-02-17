//corre solo una vez cuando inicia el programa
let x=200 ;
let y=200;

function setup(){
    console.log("setup - frameCount:"+frameCount);
     createCanvas(800,400);
     background (125);
}

//corre continuamente después de la función setup
function draw(){

    clear()
    background(125)

    console.log("draw - frameCount:"+frameCount);
    console.log ("height:" + height);
    console.log ("width:"+width);

    //console.log("mouseX:"+ mouseX + ",mouseY:"+ mouseY)

    console.log("keyCode:"+ keyCode)

    fill("blue")
    ellipse(x,y,50)


    switch (keyCode) {
        //derecha
        case 39:
            if(x<width){
                x=x+1;
            }
            break;
        //izquierda
        case 37:
            if(x>0){
                x=x-1
            }
            break;
        //Arriba
        case 38:
            if(y>0){
                y=y-1
            }
            /*fill(225,0,0)
            rect(30,30,200,200)
            fill(225,225,0)
            textSize(60)
            text("Arriba",30,30,200,200)
            fill(0,0,225)
            ellipse (30,30,100)*/
            break;
        //abajo
        case 40:
            if(y<height){
                y=y+1
            }
            break;
    
    }

    

}
