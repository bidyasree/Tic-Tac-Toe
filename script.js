let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector(".winner");
let newgame = document.querySelector("#game");

let player0 = true; //player0 = true and player1 = false

const winpattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

let count = 0;


const check = () => {
    winner.innerHTML = `<center>oops!!! this match has draw</center>`;
    winner.classList.remove("hide");
    disable();
}


box.forEach((box)=>{
    box.addEventListener("click", () => {
        count = count+1;
        console.log("box was clicked",count,"times");
        if(player0 === true){
            box.innerText = "0";
            player0 = false;
        }
        else{
            box.innerText = "x";
            player0 = true;
        }
        box.disabled = true;
        let iswinner = checkwinner();

        if(count === 9 && !iswinner){
            check();
        }
    });
});

const disable = () => {
    for(let i of box){
        i.disabled = true;
    }
}



const enable = () => {
    for(let i of box){
        i.disabled = false;
        i.innerHTML = "";
    }
}

const winn = (win) => {
    winner.innerHTML = `<center>Congratulations !! Winner is ${win}</center>`;
    winner.classList.remove("hide");
    disable();
}


// const drawmatch = () => {
//     winner.innerHTML = `<center>oops !! this match has been draw</center>`
// }





const checkwinner = () => {
    
    for(pattern of winpattern){
         //console.log(pattern[0], pattern[1], pattern[2]);
         // console.log(box[pattern[0]], box[pattern[1]], box[pattern[2]]);
         //console.log(box[pattern[0]].innerHTML, box[pattern[1]].innerText, box[pattern[2]].innerText);

         let pos1 = box[pattern[0]].innerText;
         let pos2 = box[pattern[1]].innerText;
         let pos3 = box[pattern[2]].innerText;

         if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log(`winner is ${pos1}`);
                winn(pos1);
                return true;
            }
         }
    }
}

const resetbtn = () => {
    player0 = true;
    enable();
    winner.classList.add("hide");
    count = 0;
}



reset.addEventListener("click", resetbtn);
newgame.addEventListener("click", resetbtn);