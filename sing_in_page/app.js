// const { default: axios } = require("axios");

let id = (id) => document.getElementById(id);
let clas = (clas) => document.getElementsByClassName(clas);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    failure_icon = clas("failure-icon"),
    success_icon = clas("success-icon"),
    errorMsg = clas("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const Name = username.value.trim();
    const Email = email.value.trim();
    const Password = password.value.trim();
    console.log(Name,Email,Password);

});


//     const Name = username.value.trim();
//     const Email = email.value.trim();
//     const Password = password.value.trim();

//     enige(username, 0, "username is empty");
//     enige(email, 1, "email is empty");
//     enige(password, 2, "password is empty");

//     if (Name !== "" && Email !== "" && Password !== "") {
        
    
//     }function enige(input, index, message) {
//     if (input.value.trim() === "") {
//         errorMsg[index].textContent = message;
//         failure_icon[index].style.opacity = "1";
//         success_icon[index].style.opacity = "0";
//     } else {
//         errorMsg[index].textContent = "";
//         failure_icon[index].style.opacity = "0";
//         success_icon[index].style.opacity = "1";
//     }
// }
