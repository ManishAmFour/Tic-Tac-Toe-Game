
let PlayerMove = [`X`,`O`]

let GameBoard = [];

let InputPlayer = `X`;

let IsTrue = false;

let XWins = 0;


let OWins = 0;

GameLogic();

function GameLogic(){


document.querySelector(`.Restart-Button`).addEventListener(`click`,()=>{


    document.querySelector(`.First-player-name`).value = ``;
    document.querySelector(`.Second-player-name`).value = ``;

    document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

        EmptyDiv.innerHTML = ``;



    })

    XWins = 0;
    OWins = 0;


})


document.querySelector(`.initiation-button`).addEventListener(`click`,()=>{

    if(document.querySelector(`.First-player-name`).value !== `` && document.querySelector(`.Second-player-name`).value !== ``){  


    let CompArray = ["play-div1","play-div2","play-div3","play-div4","play-div5","play-div6","play-div7",
        "play-div8","play-div9"
    ];

    document.querySelectorAll(`.play-div`).forEach((button)=>{

        button.addEventListener(`click`,()=>{

            if(document.querySelector(`.First-player-name`).value !== `` && document.querySelector(`.Second-player-name`).value !== ``){
            let PlayerId = button.dataset.playerId;

            if(InputPlayer === `X`) {

                if(document.querySelector(`.${PlayerId}`).innerHTML === ``){
            document.querySelector(`.${PlayerId}`).innerHTML = InputPlayer;

            reevulation(InputPlayer);

            CompArray.forEach((element,index)=>{

                if(PlayerId === element){

                    CompArray.splice(index,1)


                }


            })
        


            if(IsTrue === false){
            InputPlayer = `O`
            }else if(IsTrue === true) {

                IsTrue = false

            }
        }

        }else if(InputPlayer === `O`){


            if(document.querySelector(`.${PlayerId}`).innerHTML === ``){
            document.querySelector(`.${PlayerId}`).innerHTML = InputPlayer;

            reevulation(InputPlayer);


            CompArray.forEach((element,index)=>{

                if(PlayerId === element){

                    CompArray.splice(index,1)


                }


            })
            
            if(IsTrue === false){

            InputPlayer = `X`
            }else if(IsTrue === true) {

                IsTrue = false

            }
        }
        }
    }else{

        alert(`please Fill The name first`)


    }

    })



})

}else{

    alert(`please Fill The name first`)


}




})


    

}


function reevulation(InputPlayer){

    let TheValues = []
       
   document.querySelectorAll(`.play-div`).forEach((element)=>{
   
   TheValues.push(element.innerHTML)
   
   
   })
   
     ConclusionLogic(TheValues,InputPlayer)
     
   
     

   }



   function ConclusionLogic(TheValues){

    if(TheValues[0] === TheValues[1] && TheValues[1] === TheValues[2] && TheValues[0] === `X`){

        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = XWins;

        InputPlayer = `X`
        
    }else if (TheValues[3] === TheValues[4] && TheValues[4] === TheValues[5] && TheValues[3] === `X`){
    
    
        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = XWins;


        InputPlayer = `X`
    
    }else if(TheValues[6] === TheValues[7] && TheValues[7] === TheValues[8] && TheValues[6] === `X`){
    
        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = XWins;


        InputPlayer = `X`
    
    
    }else if(TheValues[0] === TheValues[3] && TheValues[3] === TheValues[6] && TheValues[0] === `X`){
    
        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = XWins;



        InputPlayer = `X`

    }else if(TheValues[1] === TheValues[4] && TheValues[4] === TheValues[7] && TheValues[1] === `X`){
    
        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = XWins;



        InputPlayer = `X`
    
    
    }else if(TheValues[2] === TheValues[5] && TheValues[5] === TheValues[8] && TheValues[2] === `X`){
    
        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = XWins;



        InputPlayer = `X`
    
    
    
    }else if(TheValues[0] === TheValues[4] && TheValues[4] === TheValues[8] && TheValues[0] === `X`){

        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = XWins;



        InputPlayer = `X`


    }else if(TheValues[2] === TheValues[4] && TheValues[4] === TheValues[6] && TheValues[2] === `X`){

        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = XWins;




        InputPlayer = `X`


    }
    
    if(TheValues[0] === TheValues[1] && TheValues[1] === TheValues[2] && TheValues[0] === `O`){
    
        alert(`You Lost`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = OWins;



        InputPlayer = `O`
    
    
    }else if (TheValues[3] === TheValues[4] && TheValues[4] === TheValues[5] && TheValues[3] === `O`){
    
    
        alert(`You Lost`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
        
        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = OWins;
    
    
        InputPlayer = `O`
    
    
    }else if(TheValues[6] === TheValues[7] && TheValues[7] === TheValues[8] && TheValues[6] === `O`){
        alert(`You Lost`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = OWins;


        InputPlayer = `O`
    
    
    
    }else if(TheValues[0] === TheValues[3] && TheValues[3] === TheValues[6] && TheValues[0] === `O`){
    
        alert(`You Lost`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = OWins;



        InputPlayer = `O`
    
    }else if(TheValues[1] === TheValues[4] && TheValues[4] === TheValues[7] && TheValues[1] === `O`){
    
        alert(`You Lost`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = OWins;

        InputPlayer = `O`
    
    
    }else if(TheValues[2] === TheValues[5] && TheValues[5] === TheValues[8] && TheValues[2] === `O`){
    
        alert(`You Lost`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = OWins;


        InputPlayer = `O`
    
    
    
    }else if(TheValues[0] === TheValues[4] && TheValues[4] === TheValues[8] && TheValues[0] === `O`){

        alert(`You Lost`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = OWins;


        InputPlayer = `O`


    }else if(TheValues[2] === TheValues[4] && TheValues[4] === TheValues[6] && TheValues[2] === `O`){
       
        alert(`You Lost`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = OWins;

        InputPlayer = `O`


    }

    if(TheValues[0] !== `` && TheValues[1] !== `` && TheValues[2] !== `` && TheValues[3] !== `` && TheValues[4] 
       !== `` && TheValues[5] !== `` && TheValues[6] !== `` && TheValues[7] !== `` && TheValues[8] !== `` 
     ){

        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })


     }

}
