const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const mainWord = document.querySelector(".mainWord");
const pronounciation = document.querySelector(".pronounciation");
const li = document.querySelector("li");
const wordType = document.querySelector(".wordType");
const definition = document.querySelector(".definition");
const example = document.querySelector(".example");

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
        pronounciation.innerText = data[0].phonetic ? data[0].phonetic : data[0].phonetics[1].text;
        wordType.innerText = data[0].meanings[0].partOfSpeech;
        definition.innerText = data[0].meanings[0].definitions[0].definition;
        example.innerText = data[0].meanings[0].definitions[0].example ? data[0].meanings[0].definitions[0].example : "Don't have any examples of this one";
    }).catch((err) => {
        console.log("error", err);
    });
}