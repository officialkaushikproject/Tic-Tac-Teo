let turnAudio = new Audio("gameSound.mp3")
let gameOver = new Audio("gameOver.mp3")
let turn = "X"
let gameover = false


//Function for trun
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//result check
const checkWin = () => {

    if (window.matchMedia("(max-width: 900px)").matches) {
        let boxtexts = document.getElementsByClassName('boxtext')
        let wins = [
            [0, 1, 2, 4, 10, 0],
            [3, 4, 5, 4, 30, 0],
            [6, 7, 8, 4, 50, 0],
            [0, 3, 6, -16, 30, 90],
            [1, 4, 7, 4, 29, 90],
            [2, 5, 8, 24, 30, 90],
            [0, 4, 8, 3, 29, 45],
            [2, 4, 6, 4, 30, 135],
        ]
        wins.forEach(e => {
            if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== "") {
                document.getElementsByClassName("info")[0].innerHTML = boxtexts[e[0]].innerText + " Won"
                gameover = true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '140px'
                document.querySelector('.line').style.width = '52vw'
                document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            }
        })
    } else {
        let boxtexts = document.getElementsByClassName('boxtext')
        let wins = [
            [0, 1, 2, 5, 5, 0],
            [3, 4, 5, 5, 15, 0],
            [6, 7, 8, 5, 25, 0],
            [0, 3, 6, -5, 15, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15, 15, 90],
            [0, 4, 8, 5, 15, 45],
            [2, 4, 6, 5, 15, 135],
        ]
        wins.forEach(e => {
            if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== "") {
                document.getElementsByClassName("info")[0].innerHTML = boxtexts[e[0]].innerText + " Won"
                gameover = true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '140px'
                document.querySelector('.line').style.width = '20vw'
                document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            }
        })
    }
}



//game logic

let boxs = document.getElementsByClassName("box")
Array.from(boxs).forEach(element => {
    let boxtexts = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtexts.innerText === '') {
            boxtexts.innerText = turn
            turn = changeTurn()

            checkWin()
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn
                turnAudio.play()
            }
        }
    })
})

//reset button

document.getElementById("reset").addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = ''
        turn = 'X'
        gameover = false
        document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
        document.querySelector('.line').style.width = '0vw'
    })
})