let back_btn = document.querySelector(".fa-arrow-right");

back_btn.addEventListener("click", () => {
    window.history.back();
});

const add = document.getElementById("add");
const mines = document.getElementById("mines");
const counte = document.getElementById("counte");
add.addEventListener("click", () => {
    counte.innerHTML++;
})
mines.addEventListener("click", ()=>{
    if(counte.innerHTML >1){
        counte.innerHTML--;
    }else{
        counte.innerHTML = 1;
    }
})
// /counter