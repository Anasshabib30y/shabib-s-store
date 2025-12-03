// 📌 أول ما الصفحة تشتغل
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([])); 
  // هنا أنشأنا cart فاضية من البداية
}

const cmoment = document.querySelector(".comment"); //get the comments
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const btn = document.getElementById("btn");
// const user_data = JSON.parse(localStorage.getItem("user_data"))
// const user_name = user_data.username;
// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     cmoment.innerHTML +=`
//      <div class="user_comment">
//         <h4 class="names">${user_name}</h4>
//     <h6 class="comments">${input.value}</h6>
//     </div>
//     `
//     input.value = "";
//     form.removeChild(input);
//     form.removeChild(btn);
// });

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



// لو cart مش موجودة، نعملها فاضية
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

const add_btn = document.getElementById("add_btn");

add_btn.addEventListener("click", () => {
    const count = document.getElementById("counte").innerHTML;
    console.log(count);
    let product = {
        link: add_btn.dataset.link,
        id: add_btn.dataset.id,
        img: add_btn.dataset.img,
        price: add_btn.dataset.price, // ✅ اتأكد ان اسمها صح
        many: count
    };

    console.log(product);
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("تم اضافة المنتج الى السلة");
});


let back_btn = document.querySelector(".fa-arrow-right");

back_btn.addEventListener("click", () => {
    window.history.back();
});