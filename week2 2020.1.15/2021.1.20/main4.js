const inputElement = document.getElementById("input")
const addButton = document.getElementById("button")
const cardsContainer = document.getElementById("cardscontainer")
let list = []

if(localStorage["list"]){
  list = JSON.parse(localStorage["list"])
}
for(let i=0; i<list.length; i++)

const ca

addButton.onclick=function(){
  const card = document.createElement("div")
  card.textContent = inputElement.value
  cardsContainer.append(card)
  localStorage["list"]=JSON.stringify(list)
}







