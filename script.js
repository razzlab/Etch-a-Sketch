const grid = document.querySelector('.grid')

const randomDiv = document.querySelector('.random')
const resetButton = document.querySelector('.reset')
const setGrid = document.querySelector('.grid-size')
let xgridx = 16;
randomDiv.textContent= "Single";




const color = () => {
    let userColorPick = document.querySelector('#ink').value
    if(randomDiv.innerHTML=="Single"){
        return userColorPick
        
    }else{
        return ("#" + Math.floor(100000 + Math.random() * 900000))
        
    }
    
}

setGrid.addEventListener('click', ()=>{
    xgridx = prompt("Please enter grid size", xgridx);
    while (xgridx > 90) {
        xgridx = prompt("Please enter grid size", xgridx);
        if (xgridx < 90) {            
            break;
        } 
    }
   
    iCreateDiv()
    
})


randomDiv.addEventListener('click',()=>{
    let hereRandomOrPick = randomDiv.innerHTML
    if(hereRandomOrPick=="Single"){
        randomDiv.textContent= "Random"
    }else{
        randomDiv.textContent="Single"
    }
})

resetButton.addEventListener('click',()=>{
    //let userColorPick = document.querySelector('#ink').value
    xgridx = 16;
    randomDiv.textContent = "Single";
    document.querySelector('#ink').value = "#000000"
    iCreateDiv()
});


function iCreateDiv(){
    
    let userColorPick = document.querySelector('#ink').value
while ( grid.firstChild ) {grid.removeChild( grid.firstChild )};
for(let i=0;i<(xgridx*xgridx);i++){
    const divOfGrid = document.createElement('Div');
    divOfGrid.setAttribute('id', 'div'+i);
    divOfGrid.setAttribute('class', 'divOfGrid');
    grid.appendChild(divOfGrid);
    
    grid.style.gridTemplateColumns ="repeat("+xgridx+",1fr)";
   };

   const gridDivs = document.querySelectorAll('.divOfGrid');
gridDivs.forEach((a) => {
   
  
  a.addEventListener('mouseover', () => {
    a.style.backgroundColor = color();
  
});

});

}; 



    iCreateDiv()


 
 
 
 
    



//console.log(userColorPick);


 






