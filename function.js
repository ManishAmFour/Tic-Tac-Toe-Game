
let PlayerMove = [`X`,`O`]


document.querySelector(`.option-selector`).addEventListener(`click`,()=>{


document.querySelector(`.option-display`).innerHTML = `<button class="first-one" >${PlayerMove[0]}</button><button class="second-one">${PlayerMove[1]}</button>`



document.querySelector(`.first-one`).addEventListener(`click`,()=>{

    let InputPlayer;
    let CompMove;

    InputPlayer = `X`;

    if(InputPlayer === `X`){

        CompMove = `0`
        console.log(CompMove)
    }


})

document.querySelector(`.second-one`).addEventListener(`click`,()=>{

    let InputPlayer;

    InputPlayer = `O`;


})

})