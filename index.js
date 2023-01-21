const direction ={x:0,y:0};
const foodsound=new Audio('food.mp3');
const gameoversound=new Audio('gameover.mp3');
const movesound=new Audio('move.mp3');
const musicsound=new Audio('music.mp3');
let speed=2;
let lastPaintTime=0;
let snakearr=[
    {x: 6,y: 7}
]
let food={x:13,y:15}
//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)

    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime
    gameengine();
}

function gameengine(){
    //part 1.updating the snake array and foot
    //part 2.display the snake and food
    //display snake
    boardd.innerHTML = " ";
    snakearr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food')
        boardd.appendChild(snakeElement);
    });
    //display food
   
    
        foodelement = document.createElement('div');
       foodelement.style.gridRowStart=food.y;
        foodelement.style.gridColumnStart=food.x;
       foodelement.classList.add('food')
        boardd.appendChild(foodelement);

}





















//main logic starts here
window.requestAnimationFrame(main);