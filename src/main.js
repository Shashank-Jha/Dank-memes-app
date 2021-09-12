
const memeSection = document.querySelector(".meme-section");
const getMemeBtn = document.querySelector(".meme-btn");

// var memeURL = "";

const URL = "https://meme-api.herokuapp.com/gimme";

function errorHandler(error) {
    console.log("error is this", error);
    alert("Something went wrong, Please try again later sometime");
}

callAPI();
// document.addEventListener("DOMContentLoaded", callAPI());
// function setMeme() {
//   memeSection.src = memeURL;
// }

function callAPI() {
    fetch(URL)
        .then((response) => {
            if (response.status === 403) callAPI();
            else return response.json();
        })
        .then((json) => {
            console.log(json["url"]);
            memeSection.src = json["url"];
            return json["url"];
        })
        .catch(errorHandler);

    // setMeme();
}


getMemeBtn.addEventListener('click', callAPI);
