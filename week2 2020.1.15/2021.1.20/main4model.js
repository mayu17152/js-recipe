// 要素の取得
const inputElement=document.getElementById("input")
const addButton=document.getElementById("addButton")
const cardsContainer=document.getElementById("cardcontainer")
​
// 空の配列を作る（更新しても残す用に）
let list= []
​
// やること
// 更新しても残るようにする
// localstorageからデータを取得してカードを作る
if(localStorage["list"]){　//もしlocalstorageにlistが存在するなら{}の処理をする
  list=JSON.parse(localStorage["list"]
//localstorageにあるlist（json文字列）をjson.parseで配列にして使えるようにする
​
}
​
for(let i=0;i<list.length;i++){//８行目のlistを元にカードを作る処理をかく
  // cardを作る
const card=document.createElement("div")
// cardに入力欄に書いたやつを追加
card.textContent=list[i]//32行目と違って今回は配列listから要素取得！
cardsContainer.append(card)
}
​
​
// 追加ボタン押したら反応する関数を書く
addButton.onclick=function() {
// cardを作る
const card=document.createElement("div")
// cardに入力欄に書いたやつを追加（console.dir(inputElement)からvalueが入力欄内容とわかる）
card.textContent=inputElement.value
cardsContainer.append(card)
​
// 配列listに入力欄に書いたやつ(inputElement)を追加
list.push(inputElement.value)
// 配列listをjson形式にしてlocalstorageに保存
localStorage["list"]=JSON.stringify(list)
}