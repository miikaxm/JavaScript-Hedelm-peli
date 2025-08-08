// Pyöräitys nappi
document.getElementById("playButton").addEventListener("click", roll)

// Betin muuttajat
document.getElementById("betButton").addEventListener("click" , betSize)

// Lukitus napit
document.getElementById("lockButton1").addEventListener("click", lock1)
document.getElementById("lockButton2").addEventListener("click", lock2)
document.getElementById("lockButton3").addEventListener("click", lock3)
document.getElementById("lockButton4").addEventListener("click", lock4)

let money = 50
let bet = 1
let canLock = false
let LockOn = false

const boxes = [
    { number: "1", value: 0, locked: false},
    { number: "2", value: 0, locked: false},
    { number: "3", value: 0, locked: false},
    { number: "4", value: 0, locked: false}
]

function update(){
    // Balancen ja betin päivitys
    document.getElementById("money").innerText = "Rahaa: " + money + "€"
    document.getElementById("bet").innerText = "Panos: " + bet + "€"


    // Maksu taulun päivitys
    document.getElementById("sevensPayout4x").innerText = bet*10 + "€"
    document.getElementById("sevensPayout3x").innerText = bet*5 + "€"
    document.getElementById("cherryPayout").innerText = bet*3 + "€"
    document.getElementById("grapePayout").innerText = bet*4 + "€"
    document.getElementById("melonPayout").innerText = bet*5 + "€"
    document.getElementById("applePayout").innerText = bet*6 + "€"
}

function randomNumber(){
    return Math.floor(Math.random()* 5 + 1)
}

// Funktio pyöräytykselle
function roll() {
    if (money >= bet) {
        money -= bet

        for (let i = 0; i < 4; i++) {
            if (boxes[i]["locked"] == true){
                continue
            }
            boxes[i]["value"] = randomNumber()
        }

        for (let i = 0; i < 4; i++) {
            let img = "img/symbol_" + boxes[i]["value"] + ".png"
            document.getElementById((i + 1).toString()).setAttribute("src", img)
        }

        canLock = true

        if (LockOn){
            canLock = false
            LockOn = false
        }
        
        console.log(canLock)
        update()
        openLocks()
        checkWin()
    }
}

function betSize() {
    if (bet == 3&& LockOn == false || bet == 3 && canLock == false){
        bet = 1
    } else if (canLock == false) {
        bet += 1
    }
    update();
}

function checkWin(){
    if (boxes[0]["value"] == 5 && boxes[1]["value"] == 5 && boxes[2]["value"] == 5 && boxes[3]["value"] == 5){
        money += bet*10
        console.log("Voitit neljällä seiskalla yhteensä: " + bet*10)
        canLock = false
    } else if (boxes[0]["value"] == 4 && boxes[1]["value"] == 4 && boxes[2]["value"] == 4 && boxes[3]["value"] == 4){
        money += bet*6
        console.log("Voitit neljällä omenalla yhteensä: " + bet*6)
        canLock = false
    } else if (boxes[0]["value"] == 3 && boxes[1]["value"] == 3 && boxes[2]["value"] == 3 && boxes[3]["value"] == 3){
        money += bet*5
        console.log("Voitit neljällä meloonilla yhteensä: " + bet*5)
        canLock = false
    } else if (boxes[0]["value"] == 2 && boxes[1]["value"] == 2 && boxes[2]["value"] == 2 && boxes[3]["value"] == 2){
        money += bet*4
        console.log("Voitit neljällä greipillä yhteensä: " + bet*4)
        canLock = false
    } else if (boxes[0]["value"] == 1 && boxes[1]["value"] == 1 && boxes[2]["value"] == 1 && boxes[3]["value"] == 1){
        money += bet*3
        console.log("Voitit neljällä kirsikalla yhteensä: " + bet*3)
        canLock = false
    } 
        else {
        let sevensCount = boxes.filter(box => box.value === 5).length;
        if (sevensCount === 3) {
            money += bet*5;
            console.log("Voitit kolmella seiskalla yhteensä: " + bet*5)
            canLock = false
        }
        }
    update()
}

function lock1(){
    if (canLock){
        boxes[0]["locked"] = true
        document.getElementById("lockButton1").innerHTML = "Lukittu"
        document.getElementById("lockButton1").style.backgroundColor = "red"
        LockOn = true
    }
}

function lock2(){
    if (canLock){
        boxes[1]["locked"] = true
        document.getElementById("lockButton2").innerHTML = "Lukittu"
        document.getElementById("lockButton2").style.backgroundColor = "red"
        LockOn = true
    }
}

function lock3(){
    if (canLock){
        boxes[2]["locked"] = true
        document.getElementById("lockButton3").innerHTML = "Lukittu"
        document.getElementById("lockButton3").style.backgroundColor = "red"
        LockOn = true
    }
}

function lock4(){
    if (canLock){
        boxes[3]["locked"] = true
        document.getElementById("lockButton4").innerHTML = "Lukittu"
        document.getElementById("lockButton4").style.backgroundColor = "red"
        LockOn = true
    }
}

function openLocks(){
    for(let i = 0; i< 4; i++){
        boxes[i]["locked"] = false
    }

    // Tekstien korjaus alkuperäiseen
    document.getElementById("lockButton1").innerHTML = "Lukitse"
    document.getElementById("lockButton2").innerHTML = "Lukitse"
    document.getElementById("lockButton3").innerHTML = "Lukitse"
    document.getElementById("lockButton4").innerHTML = "Lukitse"

    // Napit tausta värin palautus
    document.getElementById("lockButton1").style.backgroundColor = "white"
    document.getElementById("lockButton2").style.backgroundColor = "white"
    document.getElementById("lockButton3").style.backgroundColor = "white"
    document.getElementById("lockButton4").style.backgroundColor = "white"

}