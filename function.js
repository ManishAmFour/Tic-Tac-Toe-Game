
const initialization = (() => {

    let InputPlayer = `X`;

    let IsTrue = false;
    
    let XWins = 0;
    
    let OWins = 0;
    
    let EmptyTheDiv = false;

    document.querySelector(`.initiation-button`).addEventListener(`click`,()=>{

        if(document.querySelector(`.First-player-name`).value !== `` && document.querySelector(`.Second-player-name`).value !== ``){
    
            let FirstPlayer = document.querySelector(`.First-player-name`).value;
            let SecondPlayer = document.querySelector(`.Second-player-name`).value;
    
            function  GameLogic (FirstPlayer,SecondPlayer){

                if(document.querySelector(`.First-player-name`).value !== `` && document.querySelector(`.Second-player-name`).value !== ``){  
            
                let CompArray = ["play-div1","play-div2","play-div3","play-div4","play-div5","play-div6","play-div7",
                    "play-div8","play-div9"];
            
                document.querySelectorAll(`.play-div`).forEach((button)=>{
            
                    button.addEventListener(`click`,()=>{
            
                        if(document.querySelector(`.First-player-name`).value !== `` && document.querySelector(`.Second-player-name`).value !== ``){
                        let PlayerId = button.dataset.playerId;
            
                        if(InputPlayer === `X`) {
            
                        if(document.querySelector(`.${PlayerId}`).innerHTML === ``){
            
            console.log(FirstPlayer)
            
                        document.querySelector(`.${PlayerId}`).innerHTML = InputPlayer;
                            
                        reevulation(InputPlayer,FirstPlayer,SecondPlayer);
            
                        if(EmptyTheDiv === true){
            
                            document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{
            
                                EmptyDiv.innerHTML = ``;
                
                            })
                               
                            EmptyTheDiv = false;
                           
            
            
            
                        }
            
            
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
            
                        reevulation(InputPlayer,FirstPlayer,SecondPlayer);
            
            
                        if(EmptyTheDiv === true){
            
                            document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{
            
                                EmptyDiv.innerHTML = ``;
                
                            })
                               
                            EmptyTheDiv = false;
                           
            
            
            
                        }
            
            
            
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
            
            }
            
            }
            
            GameLogic(FirstPlayer,SecondPlayer)

        document.querySelector(`.score-board-X`).innerText =  `${FirstPlayer}:0`
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:0`
    
        document.querySelector(`.register-form`).classList.add(`display-none`);
        document.querySelector(`.score-board`).classList.remove(`display-none`);
        document.querySelector(`.Restart-Button`).classList.remove(`display-none`);
    


        document.querySelector(`.bigger-play-div`).classList.add(`display-block`)
            

            document.querySelector(`.play-div1`).classList.add(`display-block`)
            document.querySelector(`.play-div2`).classList.add(`display-block`)
            document.querySelector(`.play-div3`).classList.add(`display-block`)
            document.querySelector(`.play-div4`).classList.add(`display-block`)
            document.querySelector(`.play-div5`).classList.add(`display-block`)
            document.querySelector(`.play-div6`).classList.add(`display-block`)
            document.querySelector(`.play-div7`).classList.add(`display-block`)
            document.querySelector(`.play-div8`).classList.add(`display-block`)
            document.querySelector(`.play-div9`).classList.add(`display-block`)
        
    
    
    
        }else{
    
            alert(`please Fill The entries first`)
    
        }
        
    
    
    })
    
    const RestartButton = (()=>{

        document.querySelector(`.Restart-Button`).addEventListener(`click`,()=>{
    
            Restart();
        
        })
        
    
    
    })()
    
    function reevulation(InputPlayer,FirstPlayer,SecondPlayer){

    let TheValues = []
       
   document.querySelectorAll(`.play-div`).forEach((element)=>{
   
   TheValues.push(element.innerHTML)
   
   
   })
   
     ConclusionLogic(TheValues,InputPlayer,FirstPlayer,SecondPlayer)
     
   
     

   }



   function ConclusionLogic(TheValues,InputPlayer,FirstPlayer,SecondPlayer){

    if(TheValues[0] === TheValues[1] && TheValues[1] === TheValues[2] && TheValues[0] === `X`){

        alert(`X Won`);
        EmptyTheDiv = true;

        IsTrue= true;
        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = `${FirstPlayer}:${XWins}`;
        
        InputPlayer = `X`
        
    }
    else if (TheValues[3] === TheValues[4] && TheValues[4] === TheValues[5] && TheValues[3] === `X`){
    
    
        alert(`X Won`);
        EmptyTheDiv = true;
        
        IsTrue= true;
       

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = `${FirstPlayer}:${XWins}`;


        InputPlayer = `X`
    
    }else if(TheValues[6] === TheValues[7] && TheValues[7] === TheValues[8] && TheValues[6] === `X`){
    
        alert(`X Won`);
        EmptyTheDiv = true;
        IsTrue= true;
        

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = `${FirstPlayer}:${XWins}`;


        InputPlayer = `X`
    
    
    }else if(TheValues[0] === TheValues[3] && TheValues[3] === TheValues[6] && TheValues[0] === `X`){
    
        alert(`X Won`);
        EmptyTheDiv = true;
        IsTrue= true;
     

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = `${FirstPlayer}:${XWins}`;



        InputPlayer = `X`

    }else if(TheValues[1] === TheValues[4] && TheValues[4] === TheValues[7] && TheValues[1] === `X`){
    
        alert(`X Won`);
        EmptyTheDiv = true;
        IsTrue= true;
      
        XWins += 1;


        document.querySelector(`.score-board-X`).innerText = `${FirstPlayer}:${XWins}`;



        InputPlayer = `X`
    
    
    }else if(TheValues[2] === TheValues[5] && TheValues[5] === TheValues[8] && TheValues[2] === `X`){
    
        alert(`X Won`);
        EmptyTheDiv = true;
        IsTrue= true;
     
        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = `${FirstPlayer}:${XWins}`;



        InputPlayer = `X`
    
    
    
    }else if(TheValues[0] === TheValues[4] && TheValues[4] === TheValues[8] && TheValues[0] === `X`){

        alert(`X Won`);
        EmptyTheDiv = true;
        IsTrue= true;
     

        XWins += 1;
        document.querySelector(`.score-board-X`).innerText = `${FirstPlayer}:${XWins}`;



        InputPlayer = `X`


    }else if(TheValues[2] === TheValues[4] && TheValues[4] === TheValues[6] && TheValues[2] === `X`){

        alert(`X Won`);
        EmptyTheDiv = true;
        IsTrue= true;
       

        XWins += 1;

        document.querySelector(`.score-board-X`).innerText = `${FirstPlayer}:${XWins}`;




        InputPlayer = `X`


    }
 
    
    if(TheValues[0] === TheValues[1] && TheValues[1] === TheValues[2] && TheValues[0] === `O`){
    
        alert(`O Won`);
        EmptyTheDiv = true;
        IsTrue= true;
        

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:${OWins}`;



        InputPlayer = `O`
    
    
    }else if (TheValues[3] === TheValues[4] && TheValues[4] === TheValues[5] && TheValues[3] === `O`){
    
    
        alert(`O Won`);
        EmptyTheDiv = true;
                IsTrue= true;
      
        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:${OWins}`;
    
    
        InputPlayer = `O`
    
    
    }else if(TheValues[6] === TheValues[7] && TheValues[7] === TheValues[8] && TheValues[6] === `O`){
        alert(`O Won`);
        EmptyTheDiv = true;
                IsTrue= true;
       

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:${OWins}`;


        InputPlayer = `O`
    
    
    
    }else if(TheValues[0] === TheValues[3] && TheValues[3] === TheValues[6] && TheValues[0] === `O`){
    
        alert(`O Won`);
        EmptyTheDiv = true;        IsTrue= true;
        

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:${OWins}`;



        InputPlayer = `O`
    
    }else if(TheValues[1] === TheValues[4] && TheValues[4] === TheValues[7] && TheValues[1] === `O`){
    
        alert(`O Won`);
        EmptyTheDiv = true;        IsTrue= true;
        

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:${OWins}`;

        InputPlayer = `O`
    
    
    }else if(TheValues[2] === TheValues[5] && TheValues[5] === TheValues[8] && TheValues[2] === `O`){
    
        alert(`O Won`);
        EmptyTheDiv = true;     
        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:${OWins}`;


        InputPlayer = `O`
    
    
    
    }else if(TheValues[0] === TheValues[4] && TheValues[4] === TheValues[8] && TheValues[0] === `O`){

        alert(`O Won`);
        EmptyTheDiv = true;        IsTrue= true;
     

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:${OWins}`;


        InputPlayer = `O`


    }else if(TheValues[2] === TheValues[4] && TheValues[4] === TheValues[6] && TheValues[2] === `O`){
       
        alert(`O Won`);
        EmptyTheDiv = true;       
        
        IsTrue= true;
   

        OWins += 1;
        document.querySelector(`.score-board-O`).innerText = `${SecondPlayer}:${OWins}`;

        InputPlayer = `O`


    }

   else if(TheValues[0] !== `` && TheValues[1] !== `` && TheValues[2] !== `` && TheValues[3] !== `` && TheValues[4] 
       !== `` && TheValues[5] !== `` && TheValues[6] !== `` && TheValues[7] !== `` && TheValues[8] !== `` 
    && IsTrue === false 
    
    ){

        alert(`Game Draw`)

        document.querySelectorAll(`.play-div`).forEach((EmptyDiv)=>{

            EmptyDiv.innerHTML = ``;



        })


     }

}

function Restart(){


    window.location.reload();
    
        
    
    
    }


   
    


})()





