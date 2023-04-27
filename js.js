const inputElement = document.getElementById("input-text")
const btnCopy = document.querySelector(".btn-copy")
const inputResult = document.querySelector(".side-input-menor")

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const cryptograph = () => {
    // showAndHideImage()
    const inputResult = document.getElementById("side-input-menor")
    const inputContent = inputElement.value
    let encryptedPhrase = " "

    inputContent
    .split(" ")
    .forEach(word => {
        encryptedPhrase += word.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
        .replace(/o/g, "ober").replace(/u/g, "ufat").concat(" ")
    });
    
    inputResult.innerHTML = encryptedPhrase

}

const descriptograph = () => {
    // showAndHideImage()

    const inputResult = document.getElementById("side-input-menor")
    const inputContent = inputElement.value
    let encryptedPhrase = " "

    inputContent
    .split(" ")
    .forEach(word => {
        encryptedPhrase += word.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
        .replace(/ober/g, "o").replace(/ufat/g, "u").concat(" ")
    });

    inputResult.innerHTML = encryptedPhrase

}

// btnCopy.addEventListener("click", (e) => {
//     navigator.clipboard.writeText(inputResult.value);
// })

// function copyToClipboard() {
//     navigator.clipboard.writeText(inputContent).then(() => {
//         alert("Copied to clipboard")
//     })
// }