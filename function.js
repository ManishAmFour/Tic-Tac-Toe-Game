
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
    let CompMove;

    InputPlayer = `X`;

    if(InputPlayer === `X`){

        CompMove = `0`
    }



    document.querySelectorAll(`.play-div`).forEach((button)=>{

        button.addEventListener(`click`,()=>{

            let PlayerId = button.dataset.playerId

            button.innerHTML = `<div class="${PlayerId}" >X</div>`


            CompArray.forEach((element,index)=>{

                if(PlayerId === element){

                    CompArray.splice(index,1)


                }


            })

            console.log(CompArray)
            let CompValue = Math.floor(Math.random() * CompArray.length)
            let CompPick = CompArray[CompValue]    

            console.log(CompPick)
            

        /*if(RandomMove >= 0 && RandomMove < 1/TotalMoves){

            CheckingTheArray(`.play-div1`)


        }else if(RandomMove >= 1/TotalMoves && RandomMove < 2/TotalMoves){

            CheckingTheArray(`.play-div2`)


        }else if(RandomMove >= 2/TotalMoves && RandomMove < 3/TotalMoves){

            CheckingTheArray(`.play-div3`)


        }else if(RandomMove >= 3/TotalMoves && RandomMove < 4/TotalMoves){

            CheckingTheArray(`.play-div4`)


        }else if(RandomMove >= 4/TotalMoves && RandomMove < 5/TotalMoves){

            CheckingTheArray(`.play-div5`)


        }else if(RandomMove >= 5/TotalMoves && RandomMove < 6/TotalMoves){

            CheckingTheArray(`.play-div6`)


        }else if(RandomMove >= 6/TotalMoves && RandomMove < 7/TotalMoves){

            CheckingTheArray(`.play-div7`)


        }else if(RandomMove >= 7/TotalMoves && RandomMove < 8/TotalMoves){


            CheckingTheArray(`.play-div8`)


        }else if(RandomMove >= 8/TotalMoves && RandomMove < 9/TotalMoves){
         
            CheckingTheArray(`.play-div9`)

        }*/

    
    })



})


})

})


function CheckingTheArray(element){


    CompArray.forEach((otherElements)=>{
    
    if(element !== otherElements){

        CompArray.push(element)

    }
    
    
    
    })


    
    }


    

}