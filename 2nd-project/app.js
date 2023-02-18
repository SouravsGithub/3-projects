const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const mainWord = document.querySelector(".mainWord");
const pronounciation = document.querySelector(".pronounciation");
const li = document.querySelector("li");
const wordType = document.querySelector(".wordType");
const definition = document.querySelector(".definition");
const example = document.querySelector(".example");
const results = document.querySelector(".results");

btn.addEventListener("click", () => {
    let mainUrl = constructUrl();
    getData(mainUrl);
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let mainUrl = constructUrl();
        getData(mainUrl);
    }
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
        results.innerHTML = "";
        data[0].meanings.forEach((item, index, array) => {
            results.innerHTML += `
                <li>
                    <h4 class="wordType">${item.partOfSpeech}</h4>
                    <p class="definition">${item.definitions[0].definition}</p>
                    <p class="example">&#8220;${item.definitions[0].example ? item.definitions[0].example : "Don't have any examples of this one"}	&#8221;</p>
                </li>
            `
        });
    }).catch((err) => {
        console.log("error", err);
    });
}