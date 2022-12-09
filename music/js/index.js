let inputDir={x:0,y:0}
const foodSound = new Audio('food.wav');
const gameOverSound = new Audio('gameover.wav');
const moveSound = new Audio('move.wav');
const musicSound = new Audio('music.wav');
let highscoreHtml=document.getElementById("highscorediv")
let sc=document.getElementById("score")
let beginning=document.getElementById("board")
let starthide=document.getElementsByClassName("heading")
let score=0
let food={x:12,y:13}

let speed =5;
let lastPaintTime=0;
let snakeArr=[{x:2,y:2}]
function play(ctime){
    
    window.requestAnimationFrame(play)
    if((ctime-lastPaintTime)/1000<1.1/speed){
        return
    }
    // console.log(ctime)
    lastPaintTime=ctime
    gameEngine()
}
// function main(ctime){
//     window.requestAnimationFrame(main)
//     console.log(ctime)
// }
function isCollide(sarr){
    return false
}
function gameEngine(){
    // console.log(musicSound)
    // musicSound.play()
    
//Part 1: Updating the snake array & food
function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}
if(isCollide(snakeArr)){
    // gameOverSound.play()
    // musicSound.pause()
    inputDir={x:0,y:0};
    alert("Game Is over Press Any Key to start Again")
    // musicSound.play()
    snakeArr=[{x:3,y:5}]
    score=0
}
// if snake eaten food , increment the score and regerate food
if(snakeArr[0].y==food.y&&snakeArr[0].x==food.x)
{
    score++
    // if(score>hiScore){
    //     hiscoreval=score
    //     localStorage.setItem("hiscore",JSON.stringify(hiscoreval))
    //     highscoreHtml.innerHTML="Highest Score Till Now "+hiScore
    // }
    sc.innerHTML="Score is "+score
    snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y})
    let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    // console.log(food)
}
//moving the snake
for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
        
    }
snakeArr[0].x +=inputDir.x
snakeArr[0].y +=inputDir.y
//Part2 : Display the snake and food

//Display the snake
board.innerHTML=""
snakeArr.forEach((e,index)=>{
    snakeElement=document.createElement("div")
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;
    // console.log(index)
    if(index==0){
    snakeElement.classList.add('head')
    }else{
    snakeElement.classList.add('snake')
    }
    board.appendChild(snakeElement)
})

//Display the Food

   
    foodElement=document.createElement("div")
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement)

}
let hiScore=localStorage.getItem("hiscore")
console.log(hiScore)
// if(hiScore===null){
//      hiscoreval=0
//     localStorage.setItem("hiscore",JSON.stringify(hiscoreval))
// }
// else{
//     // hiscoreval=JSON.parse(hiScore)
//     // highscoreHtml.innerHTML="Highest Score Till "+hiScore
// }
window.requestAnimationFrame(play)
window.addEventListener('keydown', e =>{
     // Start the game
    // moveSound.play();
    // starthide.classList.add("hide")
    // beginning.classList.remove("hide")
    switch (e.key) {
        case "ArrowUp":
            // console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            // console.log(inputDir.x,inputDir.y)
            break;

        case "ArrowDown":
            // console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            // console.log(inputDir.x,inputDir.y)
            break;

        case "ArrowLeft":
            // console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            // console.log(inputDir.x,inputDir.y)
            break;

        case "ArrowRight":
            // console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            // console.log(inputDir.x,inputDir.y)
            break;
        default:
            break;
    }})
