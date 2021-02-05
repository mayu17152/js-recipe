//要素の取得
//ボタンを押したときの処理
//好きか嫌いか表示する

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const aaa = document.getElementById("answer")


button1.onclick = function() {aaa.textContent = "大正解！"}
button2.onclick = function() {aaa.textContent = "正解でもある"}
button3.onclick = function() {aaa.textContent = "大不正解、、"}
button4.onclick = function() {aaa.textContent = "まあまあ正解"}


const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const bbb = document.getElementById("answer2")


button5.onclick = function() {bbb.textContent = "大正解！"}
button6.onclick = function() {bbb.textContent = "正解でもある"}
button7.onclick = function() {bbb.textContent = "大不正解、、"}
button8.onclick = function() {bbb.textContent = "まあまあ正解"}

