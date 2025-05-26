document.getElementById("playButton").addEventListener("click", roll)

let money = 50
let bet = 1

function update(){
    document.getElementById("money").innerText = "Rahaa: " + money + "€"
    document.getElementById("bet").innerText = "Panos: " + bet + "€"
}

function randomNumber(){
    return Math.floor(Math.random()* 5 + 1)
}

function roll(){
    if (money >= bet){
        money -= bet
        rolledNumber1 = randomNumber()
        rolledNumber2 = randomNumber()
        rolledNumber3 = randomNumber()
        rolledNumber4 = randomNumber()
        rolledImage1 = "img/symbol_" + rolledNumber1 + ".png"
        rolledImage2 = "img/symbol_" + rolledNumber2 + ".png"
        rolledImage3 = "img/symbol_" + rolledNumber3 + ".png"
        rolledImage4 = "img/symbol_" + rolledNumber4 + ".png"
        document.getElementById("1").setAttribute("src", rolledImage1)
        document.getElementById("2").setAttribute("src", rolledImage2)
        document.getElementById("3").setAttribute("src", rolledImage3)
        document.getElementById("4").setAttribute("src", rolledImage4)
        update()
        checkWin()
        update()
    }
}

function checkWin(){
    if (rolledNumber1 == 5 && rolledNumber2 == 5 && rolledNumber3 == 5 && rolledNumber4 == 5){
        money += bet*10
    } else if (rolledNumber1 == 4 && rolledNumber2 == 4 && rolledNumber3 == 4 && rolledNumber4 == 4){
        money += bet*6
    } else if (rolledNumber1 == 3 && rolledNumber2 == 3 && rolledNumber3 == 3 && rolledNumber4 == 3){
        money += bet*5
    } else if (rolledNumber1 == 2 && rolledNumber2 == 2 && rolledNumber3 == 2 && rolledNumber4 == 2){
        money += bet*4
    } else if (rolledNumber1 == 1 && rolledNumber2 == 1 && rolledNumber3 == 1 && rolledNumber4 == 1){
        money += bet*3
    }
}