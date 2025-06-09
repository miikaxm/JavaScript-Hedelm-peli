document.getElementById("playButton").addEventListener("click", roll)
document.getElementById("betButton1").addEventListener("click" , betSize1)
document.getElementById("betButton2").addEventListener("click" , betSize2)
document.getElementById("betButton3").addEventListener("click" , betSize3)

let money = 50
let bet = 1

const boxes = [
    { number: "1", value: 0},
    { number: "2", value: 0},
    { number: "3", value: 0},
    { number: "4", value: 0}
]

function update(){
    document.getElementById("money").innerText = "Rahaa: " + money + "€"
    document.getElementById("bet").innerText = "Panos: " + bet + "€"
}

function randomNumber(){
    return Math.floor(Math.random()* 5 + 1)
}

function roll() {
    if (money >= bet) {
        money -= bet

        for (let i = 0; i < 4; i++) {
            boxes[i]["value"] = randomNumber()
        }

        for (let i = 0; i < 4; i++) {
            let img = "img/symbol_" + boxes[i]["value"] + ".png"
            document.getElementById((i + 1).toString()).setAttribute("src", img)
        }
        update()
    }
}

function betSize1() {
    bet = 1;
    update();
}

function betSize2() {
    bet = 2;
    update();
}

function betSize3() {
    bet = 3;
    update();
}

function checkWin(){
    if (boxes[0]["value"] == 5 && boxes[1]["value"] == 5 && boxes[2]["value"] == 5 && boxes[3]["value"] == 5){
        money += bet*10
    } else if (boxes[0]["value"] == 4 && boxes[1]["value"] == 4 && boxes[2]["value"] == 4 && boxes[3]["value"] == 4){
        money += bet*6
    } else if (boxes[0]["value"] == 3 && boxes[1]["value"] == 3 && boxes[2]["value"] == 3 && boxes[3]["value"] == 3){
        money += bet*5
    } else if (boxes[0]["value"] == 2 && boxes[1]["value"] == 2 && boxes[2]["value"] == 2 && boxes[3]["value"] == 2){
        money += bet*4
    } else if (boxes[0]["value"] == 1 && boxes[1]["value"] == 1 && boxes[2]["value"] == 1 && boxes[3]["value"] == 1){
        money += bet*3
    }

}