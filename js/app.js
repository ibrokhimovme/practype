// texts = document.getElementById("texts").textContent
// input = document.getElementById("textInp")
// count = []
// text = texts.split(" ")
// input.addEventListener("keydown", (e) => {
//     if(e.code == "Space"){
//         console.log(text[count.length] == e.target.value.split(" ")[count.length])
//         if(text[count.length] == e.target.value.split(" ")[count.length]){
//             count.push(e.target.value.split(" ")[count.length])
//         }
//         if(text[count.length] == text[-1]){
//             console.log("Siz to'gri bajardingiz!")
//             count.length = 0
//             e.target.value = ""
//             console.log(count)
//             console.log(e.target.value)
//         }
//         console.log(count)
//     }
// })

btn = document.getElementById("btn")
words = document.getElementById("words")
chars = ['/', '.', ',', '!', '-', '"', "'"]

btn.addEventListener("click", (e) => {
    inp = document.getElementById("textInp").value
    if(inp.length > 50){
        alert("Kichikroq so'z kiriting!")
        inp = ""
    }else{
        for(let i = 0; i <= chars.length; i++){
            inp = inp.replaceAll(chars[i], "")
        }
        word = inp.split(" ")
        for(let i = 0; i<word.length; i++){
            let father = document.createElement('div')
            father.className = "word"
            words.appendChild(father)
            console.log(word[i].length)
            for(let j = 0; j<word[i].length; j++){
                let child = document.createElement('span')
                child.className = "letter"
                child.innerHTML = word[i][j]
                father.appendChild(child)
            }
        }
    }
    console.log(inp)
})