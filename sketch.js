//corre solo una vez cuando inicia el programa

function setup(){
    console.log("setup - frameCount:"+frameCount);
     createCanvas(200,200);
     background (125);
}

//corre continuamente después de la función setup
function draw(){
    clear();
    background(125);
    console.log("draw - frameCount:"+frameCount);
    console.log ("height:" + height);
    console.log ("width:"+width);

    console.log("mouseX:"+ mouseX + ",mouseY:"+ mouseY)

    
    ellipse(mouseX,mouseY,50)

    if((mouseX<100) && (mouseY<100)){
        fill("green");
    }
    else if((mouseX<200) && (mouseY<100)){
        fill("red");
    }

    else if((mouseX<100) && (mouseY<200)){
        fill("blue");
    }

    else if((mouseX<200) && (mouseY<200)){
        fill("yellow")
    }
    

}
