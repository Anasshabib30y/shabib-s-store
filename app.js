// const axios = require('axios/dist/browser/axios.cjs'); // browser
// const axios = require('axios/dist/node/axios.cjs'); // node

function postData() {
  const username = document.getElementById("recipient-name").value.trim();
  const email = document.getElementById("message-text").value.trim();
  const password = document.getElementById("message-text2").value.trim();

  const params = {
    name: username,
    email: email,
    password: password,
  };
  const url = "https://shabib-server.onrender.com/post";
  axios.post(url, params)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
}
