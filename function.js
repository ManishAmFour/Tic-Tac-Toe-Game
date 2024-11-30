
let PlayerMove = [`X`,`O`]

let GameBoard = [];


GameLogic();

let IsTrue = false;



function GameLogic(){



document.querySelector(`.option-selector`).addEventListener(`click`,()=>{

document.querySelector(`.option-display`).innerHTML = `<button class="first-one" >${PlayerMove[0]}</button><button class="second-one">${PlayerMove[1]}</button>`

document.querySelector(`.first-one`).addEventListener(`click`,()=>{

    Accessibility();
})

})
    

}


function Accessibility(){

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

            
            reevulation()


            CompArray.forEach((element,index)=>{

                if(PlayerId === element){

                    CompArray.splice(index,1)


                }


            })

            console.log(CompArray);

            if(IsTrue === false){


                let CompValue = Math.floor(Math.random() * CompArray.length)
                let CompPick = CompArray[CompValue]  
    
    
                document.querySelector(`.${CompPick}`).innerHTML = `O`;
    
                CompArray.forEach((element,index)=>{
    
                    if(CompPick === element){
    
                        CompArray.splice(index,1)
    
    
                    }
    
    
    
                })


                reevulation();




            }

    })



})





}


function reevulation(){

    let TheValues = []
       
   document.querySelectorAll(`.play-div`).forEach((element,index)=>{
   
   
   TheValues.push(element.innerHTML)
   
   
   })
   
     ConclusionLogic(TheValues)
   
   }



   function ConclusionLogic(TheValues){

    if(TheValues[0] === TheValues[1] && TheValues[1] === TheValues[2] && TheValues[0] === `X`){

        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
        Accessibility();
    
    }else if (TheValues[3] === TheValues[4] && TheValues[4] === TheValues[5] && TheValues[3] === `X`){
    
    
        alert(`You Won`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    }else if(TheValues[6] === TheValues[7] && TheValues[7] === TheValues[8] && TheValues[6] === `X`){
    
        alert(`You Won`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    
    }else if(TheValues[0] === TheValues[3] && TheValues[3] === TheValues[6] && TheValues[0] === `X`){
    
    alert(`You Won`)
    IsTrue= true;
    document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

        EmptyDiv.innerHTML = ``;



    })

    }else if(TheValues[1] === TheValues[4] && TheValues[4] === TheValues[7] && TheValues[1] === `X`){
    
        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    
    }else if(TheValues[2] === TheValues[5] && TheValues[5] === TheValues[8] && TheValues[2] === `X`){
    
        alert(`You Won`);
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    
    
    }
    
    if(TheValues[0] === TheValues[1] && TheValues[1] === TheValues[2] && TheValues[0] === `O`){
    
        alert(`You Lost`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        }) 
    
    
    }else if (TheValues[3] === TheValues[4] && TheValues[4] === TheValues[5] && TheValues[3] === `O`){
    
    
        alert(`You Lost`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    
    }else if(TheValues[6] === TheValues[7] && TheValues[7] === TheValues[8] && TheValues[6] === `O`){
    
        alert(`You Lost`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    
    
    }else if(TheValues[0] === TheValues[3] && TheValues[3] === TheValues[6] && TheValues[0] === `O`){
    
        alert(`You Lost`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    }else if(TheValues[1] === TheValues[4] && TheValues[4] === TheValues[7] && TheValues[1] === `O`){
    
        alert(`You Lost`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    
    }else if(TheValues[2] === TheValues[5] && TheValues[5] === TheValues[8] && TheValues[2] === `O`){
    
        alert(`You Lost`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })
    
    
    
    }
    
    if(TheValues[0] === TheValues[4] && TheValues[4] === TheValues[8] && TheValues[0] === `X`){

        alert(`You Won`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })


    }

    if(TheValues[2] === TheValues[4] && TheValues[4] === TheValues[6] && TheValues[2] === `X`){

        alert(`You Won`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })


    }

    if(TheValues[0] === TheValues[4] && TheValues[4] === TheValues[8] && TheValues[0] === `O`){

        alert(`You Lost`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })


    }

    if(TheValues[2] === TheValues[4] && TheValues[4] === TheValues[6] && TheValues[2] === `O`){

        alert(`You Lost`)
        IsTrue= true;
        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })


    }


}
