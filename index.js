const testParagraph = document.querySelector("#testParagraph");
const colorInput = document.querySelector("#color");
const sizeInput = document.querySelector("#size");
const policeSelect = document.querySelector("#police");

function updateText() {
    testParagraph.style.color = colorInput.value;
    testParagraph.style.fontSize = sizeInput.value + "px";
    testParagraph.style.fontFamily = policeSelect.value;
}

colorInput.addEventListener("input", updateText);
sizeInput.addEventListener("input", updateText);
policeSelect.addEventListener("change", updateText);
