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

    /*
    while (total>0) {
        if (total%10==0) {
            ini_y = ini_y + 20;
            ini_x = 0;
        }
        else{
            ini_x = ini_x+20;
        }
        
        ellipse(ini_x+10,ini_y+10,20);
        total=total-1 ;
    
    }*/

    for(var i=0;i<10;i++){
        for (var j=0;j<10;j++){
            fill(random(0,255),random(0,255),random(0,255));
            ellipse(i*30+15,j*30+15,25);
        }
    }
    
    
   

}
