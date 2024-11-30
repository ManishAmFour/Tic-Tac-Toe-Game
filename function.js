
let PlayerMove = [`X`,`O`]

let GameBoard = [];


GameLogic();

function GameLogic(){

document.querySelector(`.option-selector`).addEventListener(`click`,()=>{

document.querySelector(`.option-display`).innerHTML = `<button class="first-one" >${PlayerMove[0]}</button><button class="second-one">${PlayerMove[1]}</button>`

document.querySelector(`.first-one`).addEventListener(`click`,()=>{


    let CompArray = ["play-div1","play-div2","play-div3","play-div4","play-div5","play-div6","play-div7",
        "play-div8","play-div9"
    ];

    let InputPlayer;

    InputPlayer = `X`;

    if(InputPlayer === `X`){

        CompMove = `0`
    }



    document.querySelectorAll(`.play-div`).forEach((button)=>{

        button.addEventListener(`click`,()=>{

            let PlayerId = button.dataset.playerId;

            document.querySelector(`.${PlayerId}`).innerHTML = `X`;

            reevulation();


            CompArray.forEach((element,index)=>{

                if(PlayerId === element){

                    CompArray.splice(index,1)


                }


            })


            let CompValue = Math.floor(Math.random() * CompArray.length)
            let CompPick = CompArray[CompValue]  

            document.querySelector(`.${CompPick}`).innerHTML = `O`;

            CompArray.forEach((element,index)=>{

                if(CompPick === element){

                    CompArray.splice(index,1)


                }



            })
            

    })



})


})

})


function reevulation(){


    let TheValues = []
    
document.querySelectorAll(`.play-div`).forEach((element,index)=>{


TheValues.push(element.innerHTML)




})

console.log(TheValues)

if(TheValues[0] === TheValues[1] && TheValues[1] === TheValues[2] && TheValues[0] === `X`){

    alert(`You Won`) 
    GameLogic();


}else if (TheValues[3] === TheValues[4] && TheValues[4] === TheValues[5] && TheValues[3] === `X`){


    alert(`You Won`)


}else if(TheValues[6] === TheValues[7] && TheValues[7] === TheValues[8] && TheValues[6] === `X`){

    alert(`You Won`)



}





/*
let firstBlock = document.querySelector(`.play-div1`);
let secondBlock = document.querySelector(`.playdiv2`);
let thirdBlock = document.querySelector(`.playdiv3`);
let fourthBlock = document.querySelector(`.playdiv4`);
let fifthBlock = document.querySelector(`.playdiv5`);
let sixthBlock = document.querySelector(`.playdiv6`);
let seventhBlock = document.querySelector(`.playdiv7`);
let eightBlock = document.querySelector(`.playdiv8`);
let ninthBlock = document.querySelector(`.playdiv9`);
*/



}


    

}