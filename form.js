class Form{
    constructor(){

    }
    
    display(){
        var name=createInput("enter your name");
        name.position(displayWidth/2,displayHeight/2);
        var button=createButton("play");
        button.position(displayWidth/2+50,displayHeight/2+100);
    
        var greeting=createElement("h3");
       
        button.mousePressed(function(){
            var name2=name.value();
            greeting.html("Welcome to the game "+name2)
            greeting.position(displayWidth/2-100,displayHeight/2-100);
   
        })
            
        
        
       
    }
}