// const axios = require('axios/dist/browser/axios.cjs'); // browser
// const axios = require('axios/dist/node/axios.cjs'); // node

// const form = document.getElementById("exampleModal");

// const log_in = document.querySelector("#log_in");
// let logg = false;
// log_in.addEventListener("click", () => {
// condation();

// });

// document.addEventListener("DOMContentLoaded", () => {

const log_in_btn0 = document.getElementById("log_in");

let logg = false;

// 2

const add = document.getElementById("add");
const mines = document.getElementById("mines");
const counte = document.getElementById("counte");

// 3

const add_btn = document.getElementById("add_btn");
let back = document.querySelector(".fa-solid");
//             the_opacity
//          =================          \\

if  (log_in_btn0) {
    let loggg = JSON.parse(localStorage.getItem("true"));
    if(loggg==true) {
      the_opacity();
    }
}

//          =================          \\

// counter

if (add) {
  add.addEventListener("click", () => {
    counte.innerHTML++;
  });
}

if (mines && counte) {
  mines.addEventListener("click", () => {
    if (counte.innerHTML > 1) {
      counte.innerHTML--;
    } else {
      counte.innerHTML = 1;
    }
  });
}


// /counter

back.addEventListener("click", () => {
  window.history.back();
});


  add_btn.addEventListener("click", () => {
    logg = JSON.parse(localStorage.getItem("true"));
    if (!logg) {
      go_to_login();
    } else {
      post_to_cart();
    }
  });

function go_to_login() {
  window.location.href = "../sing_in_page/index.html";
}

function post_to_cart() {

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const count = document.getElementById("counte").innerHTML;

  let product = {
    link: add_btn.dataset.link,
    id: add_btn.dataset.id,
    img: add_btn.dataset.img,
    price: add_btn.dataset.price,
    many: count,
  };

  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("تم اضافة المنتج الى السلة");
}


function the_opacity() {
  if (log_in_btn0) { // أتأكد إنه موجود
    log_in_btn0.style.transition = "0.5s";
    log_in_btn0.style.opacity = "0";
    setTimeout(() => {
      log_in_btn0.style.display = "none";
    }, 500);
  }
}


//             commits              \\
//        ==================        \\
 
// post Data
// function postData(e) {
//   e.preventDefault();
//   const username = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("pwd").value.trim();
//   const params = {
//     name: username,
//     email: email,
//     password: password,
//   };
//   const url = "https://shabib-server.onrender.com/post";
//   axios
//     .post(url, params)
//     .then((response) => {
//       console.log(response.data);
//       log_in_btn0.style.opacity = "0";
//       goToPages();
//       logg = 1;
//       log_in_btn0.style.display = "none";
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log("error");
//     });
// }
// function goToPages(){
//   window.location.href = "../woody_purfumes/index.html";
// }
// item pages
//        ==================        \\

