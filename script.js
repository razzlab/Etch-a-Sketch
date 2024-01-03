const grid = document.querySelector('.grid')
const userColorPick = document.querySelector('#ink').value
const randomDiv = document.querySelector('.random')
randomDiv.textContent = "single"
const randomOrPick = document.querySelector('.random').innerHTML
randomDiv.textContent = "single"

const color = () => {
    if(randomOrPick=="singl"){
        return userColorPick
    }else{
        return ("#" + Math.floor(100000 + Math.random() * 900000))
    }
}





console.log(grid,userColorPick,randomOrPick,color())



