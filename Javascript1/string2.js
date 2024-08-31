//Split ------------------------------------

var num = "1|2|3|4|5|6|7|8";

var arr = num.split("|");
console.log(arr);
// indexOf -----------------------------------------
var s = "Javascript e Python";

var pos1 = s.indexOf("Python");
//substring -----------------------------------------
var novaString = s.substring(13,19);


console.log (novaString);
console.log(pos1);
//-----------------------------------------------
//sstartsWith ----- substring --- replace  to upperCase
var frase = "Olá mundo";
if(frase.startsWith("Olá")){
    let sub = frase.substring(4);
    let novaString = sub.replace("mundo", "pessoal")
    let novaStringMaiuscula = novaString.toUpperCase();
    console.log(novaStringMaiuscula)
}