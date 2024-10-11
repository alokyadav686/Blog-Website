
let menubtn = document.querySelector("#menuline");

let uparWala= document.querySelector(".cntt");

menubtn.addEventListener("click", (ignoringmenubtn)=>{

    console.log("clickedd");

    uparWala.classList.remove("hide");
    ignoringmenubtn .stopPropagation();


})
document.body.addEventListener("mouseover", ()=>{
    uparWala.classList.add("hide");
})
