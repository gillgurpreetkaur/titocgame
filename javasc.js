console.log("welcome ji");
let music = new Audio("music.wav");
let audioturn = new Audio("audioturn.wav");
let gameover = new Audio("gameover.wav");
let turn = "X"
let isgameover = false;
 // function to chance turn
const changeTurn =()=>{
 return turn === "X"?"0":"X"
}
// function to check win
const checkwin = () =>{
let boxtext = document.getElementsByClassName('boxtext');
let win =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
win.forEach( e =>{
if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&  (boxtext[e[0]].innerText !== "")){
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
    isgameover = true;
    document.querySelector('.iamgeimogi').getElementsByTagName('img')[0].style.width = "100px"
}
})
}
// game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
            {
                boxtext.innerText = turn;
                 turn = changeTurn();
                audioturn.play();
                checkwin();
                if(!isgameover)
                    {
                        document.getElementsByClassName('info')[0].innerText = "turn for" + turn;
                    }
            }
    });
});
reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = " ";
    })
})