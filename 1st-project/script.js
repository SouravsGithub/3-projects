const btn = document.querySelector("button");
const output = document.querySelector(".output");
const baseUrl = "https://animechan.vercel.app/api/random";

btn.addEventListener("click", () => {
    const characterName = document.querySelector("#characterName").value;
    let constructedUrl = baseUrl + "/character?name=" + characterName;
    let returnedData = fetch(constructedUrl);
    returnedData.then((res) => {
        return res.json();
    }).then((data) => {
        output.innerText = data.quote;
    }).catch((err) => {
        console.log(err);
    });
});