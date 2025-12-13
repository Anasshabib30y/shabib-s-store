const container = document.querySelector(".container_img");
const user_data = JSON.parse(localStorage.getItem("cart")) || [];

const m_p = document.getElementById("m_price");
const tax = document.getElementById("tax");
const total = document.getElementById("total");

let totla_price = 0;
// let img_link = [];
console.log(user_data);
user_data.forEach((item) => {
    totla_price += Number(item.price);
    m_p.innerHTML =totla_price;
    tax.innerHTML ="15%";
    let tax_price = totla_price*0.15;
    
    total.innerHTML =totla_price+tax_price;
    // img_link.push(item.link);
    console.log(user_data);
    container.innerHTML += `
    <div class="container_img">
        <div class="container_img1">
            <img id="img" src="${item.img}" alt="">
        
        </div>
    </div>
    `;

    // container.appendChild(<a href="https://wa.me/2001092168747?text=${item.img_link}"><button id="buy_btn">buy</button></a>)
});

// const AllLinks = img_link.join(" ");
// console.log("كل لينكات الصور:", AllLinks);
console.log("إجمالي السعر:", item.price);




//     <h3 class="prise">${item.price}</h3>
            // <a href="https://wa.me/2001092168747?text=${item.link}">
                // <button id="buy_btn">buy</button>
            // </a>