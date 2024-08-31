var valores = [8,1,7,2,9];

console.log(valores[0]);


for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posicao:  " + pos +" Valor: " + valores[pos])
}

var carros =[];
carros[0] = "volvo";
carros[1] = "Jeep";

var moto = new Array ("BMW","Yamaha", " Honda" );

// Calcular a média de todos os numeros de um array.


var soma = 0;

for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
    //soma = soma + valores [pos];
}

var media = soma/valores.length;

console.log(media);



