const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    
    bg = loadImage("sunrise1.png");

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

   getBackgroundImg();
}

function draw(){
    Engine.update(engine);
  //  background(bg);

  // add condition to check if any background image is there to add
   if(backgroundImg){
        background(bg);
   }

  // write code to display time in correct format here
     fill ("white")
     date = new Date();
      text("time :- " + date.getHours() + " : " + date.getMinutes() ,100,100)

}

async function getBackgroundImg(){

   // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo") /*,{mode: 'no-cors', headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }})
      */ 
//  https://worldtimeapi.org/api/timezone/Asia/Tokyo
  //  if(response.status == 200 ){

   //change the data in JSON format
     var responseJSON = await response.json();
     var datetime = responseJSON.datetime 
   // write code slice the datetime
     var hour = datetime.slice(11,13)
   // add conditions to change the background images from sunrise to sunset
    if(hour >= 05 && hour <= 07){
        backgroundImg="sunrise1.png"
    }else if(hour >= 07 && hour < 08){
        backgroundImg="sunrise2.png"
    }else if(hour >= 08 && hour < 09){
        backgroundImg="sunrise3.png"
    }else if(hour >= 09 && hour < 12){
        backgroundImg="sunrise4.png"
    }else if(hour >= 12 && hour < 13){
        backgroundImg="sunrise5.png"
    }else if(hour >= 13 && hour < 17){
        backgroundImg="sunrise6.png"
    }else if(hour >= 17 && hour < 18){
        backgroundImg="sunset7.png"
    }else if(hour >= 18 && hour < 19){
        backgroundImg="sunset9.png"
    }else if(hour >= 19 && hour < 20){
        backgroundImg="sunset10.png"
    }else if(hour >= 20 && hour < 0){
        backgroundImg="sunrset11.png"
    }else if(hour >= 0 && hour < 05){
        backgroundImg="sunset12.png"
    }else{
        backgroundImg="sunset12.png"
    }
  bg = loadImage(backgroundImg)

}

