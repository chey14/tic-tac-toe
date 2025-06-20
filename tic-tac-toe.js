let turn0=true;

let boxes=document.querySelectorAll(".box"); // returns a nodelist

let msg=document.querySelector("#msg");

let msg_container=document.querySelector(".msg_container");

let rst_btn=document.querySelector("#reset-btn");
let new_btn=document.querySelector("#new-btn");

const WinPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0==true){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        CheckWinner();
    })
})

const isDraw=()=>{
    for(let box of boxes){
        if(box.innerText=="") return false;
    }
    return true;
}

const CheckWinner=()=>{
    for(let pattern of WinPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" &&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                ShowWinner(pos1val);
                return;
            }
        }

    }

    if(isDraw()){
        msg.innerText=`It is a Draw `;
        msg_container.classList.remove("hide");

    }
}

const ShowWinner=(Winner)=>{
    msg.innerText=`Congratulations Winner is ${Winner}`;
    msg_container.classList.remove("hide");
    disableboxes();
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msg_container.classList.add("hide");
}


rst_btn.addEventListener("click",resetgame);
new_btn.addEventListener("click",resetgame);


