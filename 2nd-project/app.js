const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const mainWord = document.querySelector(".mainWord");
const pronounciation = document.querySelector(".pronounciation");

btn.addEventListener("click", () => {
    let mainUrl = constructUrl();
    getData(mainUrl);
});

function constructUrl() {
    let word = document.querySelector("#wordInput").value;
    return baseUrl + word;
}

function getData(url) {
    let responseData = fetch(url);
    responseData.then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        mainWord.innerText = data[0].word;
        pronounciation.innerText = data[0].phonetic;
    }).catch((err) => {
        console.log("error", err);
    });
}