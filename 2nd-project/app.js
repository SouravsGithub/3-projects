const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");


btn.addEventListener("click", () => {
    let mainUrl = constructUrl();
    getData(mainUrl);
});

function constructUrl() {
    let word = document.querySelector("#word").value;
    return baseUrl + word;
}

function getData(url) {
    let responseData = fetch(url);
    responseData.then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log("error", err);
    });
}