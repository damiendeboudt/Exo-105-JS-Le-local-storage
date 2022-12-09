const storage = window.localStorage;
storage.setItem("number", 18);
storage.setItem("object", "Material");
storage.setItem("Color", "black");

let theme = storage.getItem("Color");
let px = storage.getItem("number");
let mater = storage.getItem("object")

function bestFunction() {
    document.getElementById("result").innerHTML = "Thème: " + theme
    console.log("Thème: " + theme + " type: " + mater + " police de caractere: " + px + "px")
}

bestFunction()





