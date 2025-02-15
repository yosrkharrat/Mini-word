function getValues(){
    var colorValue = document.getElementById("color").value;
    var sizeValue = document.getElementById("size").value;
    var police = document.getElementById("police").value;
    return {
        color: colorValue,
        size: sizeValue,
        police: police
    }
}

function editText(){
    const values = getValues();
    var p = document.getElementById("testParagraph");
    p.style.fontSize = values.size + "px";
    p.style.color = values.color;
    p.style.fontFamily = values.police;

}