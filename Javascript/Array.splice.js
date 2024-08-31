/*var ar = [1, 2, 3, 4, 5, 6, 7];

ar.splice(1,1);
console.log(ar);*/

/*var ar = [1, 2, 3, 4, 5, 6, 7];

ar.splice(2,2);
console.log(ar);*/

/*var nomes = ["Maria", "João"," Lucas", "Pedro"];

var novos = nomes.splice(1, 1, "Luis");

console.log(nomes);*/

var nomes = ["Maria", "João"," Lucas", "Pedro"];

selecionados = nomes.slice(1,2);

console.log(selecionados);

var nomes = ["Maria", "João"," Lucas", "Pedro"];

selecionados = nomes.splice(1,1);

console.log(selecionados);

var nomes = ["Maria", "João"," Lucas", "Pedro"];

selecionados = nomes.splice(1,1, "Luiz");

console.log(nomes);


var pais = ["Brasil","Argentina", "Colombia" ];

pais.unshift("Uruguai");

console.log(pais);