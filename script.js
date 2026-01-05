let boxs=document.querySelectorAll(".box");
let newBtn=document.querySelector("#new-game");
let reBtn=document.querySelector("#res-btn");
let win=document.querySelector(".hide");
let game=document.querySelector(".game");
let nam=document.querySelector("#winner");
let turn0=true;


let winner=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
            box.style.backgroundColor="green";
        }else{
            box.innerText="X";
            turn0=true;
            box.style.backgroundColor="red";
        }
        box.disabled=true;
        checkWinner();
        });
});
newBtn.addEventListener("click",()=>{
    win.style.display="none";
    game.style.display="flex";
    game.style.flexDirection="column";
    game.style.alignItems="center";
    game.style.justifyContent="center";
    game.style.gap="30px";
    turn0=true;
    enablebtn();
});

reBtn.addEventListener("click",()=>{
    turn0=true;
    enablebtn();

});
const disablebtn=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
};
const enablebtn=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="rgb(233, 142, 221)";
    }
};

const checkWinner=()=>{
    for(let pattarn of winner)
    {
        let val1=boxs[pattarn[0]].innerText;
        let val2=boxs[pattarn[1]].innerText;
        let val3=boxs[pattarn[2]].innerText;
        if(val1!=="" && val2!=="" && val3!=="")
        {
            if(val1===val2 && val2===val3)
            {
                win.style.display="block";
                game.style.display="none";
                nam.innerText=`Congratulation Winner ${val1}`;
                disablebtn();
            }
        }
    }
};
