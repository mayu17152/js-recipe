const buttonIcetea = document.getElementById("button-icetea")
const button100 = document.getElementById("button100")
const display = document.getElementById("display")

let totalMoney = 0

button100.onclick = function(){
totalMoney += 100

display.textContent = totalMoney

}


