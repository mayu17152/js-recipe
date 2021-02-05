



let points = 0



const pointDisplay = document.getElementById("pointDisplay")

// 第一問
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")

const aaa = document.getElementById("answer1")



button1.onclick = function() {
  if (button1) {
    aaa.textContent = "ぜんぜんちがうよ　マイナス２０点"
    points -=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
}
}
button2.onclick = function() {
  if (button2) {
    aaa.textContent = "そこそこ正解！プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button2.disabled = true;
}
}

button3.onclick = function() {
  if (button3) {
    aaa.textContent = "大正解 プラス２０点"
    points +=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button3.disabled = true;
  }
}


// 第二問
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")


const bbb = document.getElementById("answer2")

button4.onclick = function() {
  if (button4) {
    bbb.textContent = "とても正解！　プラス２０点"
    points +=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button4.disabled = true;
}
}
button5.onclick = function() {
  if (button5) {
    bbb.textContent = "正解！プラス２０点"
    points +=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button5.disabled = true;
}
}

button6.onclick = function() {
  if (button6) {
    bbb.textContent = "やるけどまだやってないよ、、－３０点"
    points -=30
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
  }
}

button7.onclick = function() {
  if (button7) {
    bbb.textContent = "あたり プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button7.disabled = true;
  }
}




const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const button10 = document.getElementById("button10")
const button11 = document.getElementById("button11")
const button12 = document.getElementById("button12")
const button13 = document.getElementById("button13")


const ccc = document.getElementById("answer3")

button8.onclick = function() {
  if (button8) {
    ccc.textContent = "😨！　マイナス３０点"
    points -=30
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button8.disabled = true;
    button9.disabled = true;
    button10.disabled = true;
    button11.disabled = true;
    button12.disabled = true;
    button13.disabled = true;
}
}
button9.onclick = function() {
  if (button9) {
    ccc.textContent = "部活！プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button9.disabled = true;
}
}

button10.onclick = function() {
  if (button10) {
    ccc.textContent = "今でも好き！プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button10.disabled = true;
  }
}

button11.onclick = function() {
  if (button11) {
    ccc.textContent ="部活！プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button11.disabled = true;
  }
}

button12.onclick = function() {
  if (button12) {
    ccc.textContent = "好きじゃないけど　プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button12.disabled = true;
  }
}

button13.onclick = function() {
  if (button13) {
    ccc.textContent = "ちょっとやってた　プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button13.disabled = true;
  }
}




const button14 = document.getElementById("button14")
const button15 = document.getElementById("button15")
const button16 = document.getElementById("button16")

const ddd = document.getElementById("answer4")



button14.onclick = function() {
  if (button14) {
    ddd.textContent = "◎　手ぶら旅行も楽でよかったよ！　プラス２０点"
    points +=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button14.disabled = true;
    
}
}
button15.onclick = function() {
  if (button15) {
    ddd.textContent = "◎　大惨事で大変だった～((+_+))　プラス２０点"
    points +=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button15.disabled = true;
}
}

button16.onclick = function() {
  if (button16) {
    ddd.textContent = "✕　なくしてないよ！ マイナス３０点"
    points -=30
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button14.disabled = true;
    button15.disabled = true;
    button16.disabled = true;
  }
}




const button17 = document.getElementById("button17")
const button18 = document.getElementById("button18")
const button19 = document.getElementById("button19")
const button20 = document.getElementById("button20")


const eee = document.getElementById("answer5")

button17.onclick = function() {
  if (button17) {
    eee.textContent = "正解！　プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button17.disabled = true;
    
}
}
button18.onclick = function() {
  if (button18) {
    eee.textContent = "私じゃないけど、お母さんが好きだから　プラス１０点"
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button18.disabled = true;
}
}

button19.onclick = function() {
  if (button19) {
    eee.textContent = "大当たり　２０点"
    points +=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button19.disabled = true;
  }
}

button20.onclick = function() {
  if (button20) {
    eee.textContent = "ごめんなさい勘弁して(-_-;)、、マイナス２０点"
    points -=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button17.disabled = true;
    button18.disabled = true;
    button19.disabled = true;
    button20.disabled = true;
  }
}


const button21 = document.getElementById("button21")
const button22 = document.getElementById("button22")
const button23 = document.getElementById("button23")

const fff = document.getElementById("answer6")



button21.onclick = function() {
  if (button21) {
    fff.textContent = "わるくはないなあ　プラマイ０点"
    points -=10
    points +=10
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button21.disabled = true;
    
    
}
}
button22.onclick = function() {
  if (button22) {
    fff.textContent = "急だと困るなあ、マイナス２０点"
    points -=20
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button21.disabled = true;
    button22.disabled = true;
    button23.disabled = true;
}
}

button23.onclick = function() {
  if (button23) {
    fff.textContent = "大当たり！ とってもほしい　プラス３０点"
    points +=30
    console.dir(pointDisplay)
    pointDisplay.textContent = points + "点"
    button23.disabled = true;
  }
}




const comment = document.getElementById("prize1")

const usagi = document.getElementById("images1") 
const button30 = document.getElementById("button30")
button30.onclick = function() {
// console.dir(usagi)


  usagi.src = "./image/usagi.jpg"

  
　comment.textContent = "親密度？？？％"


}