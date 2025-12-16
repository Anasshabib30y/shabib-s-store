// const axios = require('axios/dist/browser/axios.cjs'); // browser
// const axios = require('axios/dist/node/axios.cjs'); // node
// const form = document.getElementById("exampleModal");
const form = document.getElementById("my_form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("pwd").value.trim();

  const params = {
    name: username,
    email: email,
    password: password,
  };
  // export default params;

  const url = "https://shabib-server.onrender.com/post";
  axios.post(url, params)
    .then(response => {
      console.log(response.data);
    //   form.style.opacity = "0";
    let logg = true;
     localStorage.setItem("isLogged", JSON.stringify(true));
     localStorage.setItem("userData", JSON.stringify(params));
    console.log(logg)
    window.location.href = "../index.html";
    
    })
    .catch(err => {
      console.log(err);
    });
});
  





