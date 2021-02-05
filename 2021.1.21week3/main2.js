const input = document.getElementById("input")
const button = document.getElementById("button1")
const todoContainer = document.getElementById("todo-container")

//todo container の中にtodoを増やす
//
button.onclick = function(){
//console.log() 
    //console.dir(input)

 //inputにいれた内容をconsoleに表示する
console.log(input.value)

button.textContent = "クリックされた"

//HTMLにJavaScriptを追加
const div = document.createElement("div")[]

//divのtextcontentを書き換える
div.textContent = input.value;

//HTMLに追加
display.append(div)

} 

//追加ボタンを押したら
addButton.onclick = function(){
    // 入力欄の値（テキスト）をとりだして、 text にいれる
    const text = inputElement.value

  // card を作成
  const card = document.createElement("div")
  card.className = "card"

  // todo を作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  // todo を card の中に追加する
  card.append(todo)

  // card を container の中に追加する
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ''

}