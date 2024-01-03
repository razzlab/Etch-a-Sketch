const grid = document.querySelector('.grid')
const userColorPick = document.querySelector('#ink').value
const randomDiv = document.querySelector('.random')
let randomOrPick = document.querySelector('.random').innerHTML
const resetButton = document.querySelector('.reset')
const setGrid = document.querySelector('.grid-size')
let xgridx = 16;



const color = () => {
    if(randomOrPick=="Single"){
        return userColorPick
    }else{
        return ("#" + Math.floor(100000 + Math.random() * 900000))
    }
}

setGrid.addEventListener('click', ()=>{
    xgridx = prompt("Please enter grid size", xgridx);
    
})


randomDiv.addEventListener('click',()=>{
    let hereRandomOrPick = document.querySelector('.random').innerHTML
    if(hereRandomOrPick=="Single"){
        randomDiv.textContent= "Random"
    }else{
        randomDiv.textContent="Single"
    }
})

resetButton.addEventListener('click',()=>{
    xgridx = 16;
    randomDiv.textContent = "Single";
    userColorPick.textContent = "#000000"
});



 for(let i=0;i<xgridx;i++){
    const divOfGrid = document.createElement('Div');
    divOfGrid.setAttribute('class', 'div'+i);
    grid.appendChild(divOfGrid)
};






console.log(grid,userColorPick,randomOrPick,color(),grid.childElementCount)



