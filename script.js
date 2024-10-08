let s= document.querySelector("p");
let btn = document.querySelector("#one");
s.innerText="HELLO";

let turn=true;


btn.addEventListener("click", () =>{

    
    if(turn===true){
    s.innerText="you are cutie";
        turn=false;
}
else if(turn===false){
    s.innerText="hello";
    console.log(turn);
    turn=true;
}
});