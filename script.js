const grid = document.querySelector('.grid')
const userColorPick = document.querySelector('#ink').value
const randomDiv = document.querySelector('.random')
let randomOrPick = document.querySelector('.random').innerHTML
const resetButton = document.querySelector('.reset')
const setGrid = document.querySelector('.grid-size')
let xgridx = 16;

const color = () => {
    if(randomOrPick=="single"){
        return userColorPick
    }else{
        return ("#" + Math.floor(100000 + Math.random() * 900000))
    }
}

setGrid.addEventListener('onclick', ()=>{
    xgridx = prompt("Please enter grid size", xgridx);
})


randomDiv.addEventListener('click',()=>{
    let hereRandomOrPick = document.querySelector('.random').innerHTML
    if(hereRandomOrPick=="single"){
        randomDiv.textContent= "random"
    }else{
        randomDiv.textContent="single"
    }
})

resetButton.addEventListener('click',()=>{
    xgridx = 16;
    randomDiv.textContent = "single";
    userColorPick.textContent = "#000000"
});






console.log(grid,userColorPick,randomOrPick,color())



