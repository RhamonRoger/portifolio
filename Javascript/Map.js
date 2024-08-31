//me explique este código ://
 let arr = [2, 3, 5, 7]
arr.map(function(elemento, índice , array){
console.log( this )}, 80);

// MAP - interage com os elementos.

var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;

});

console.log(nums);


//


var funcionario = [
    {nome: "Luiz", idade : 62},
    {nome: "Davi", idade : 22},
    {nome: "Arthur", idade : 18},
    {nome: "Lucas", idade : 40},
]
// Primeiro jeito de fazer
nomes = funcionario.map(pessoa => pessoa.nome);

console.log(nomes);

// Segundo jeito de fazer

names = funcionario.map(function(elemento){
    return elemento.nome;
})

console.log(names);

// função com parametro

function nomeFuncionario (valor) {
    
    return valor.nome;

}
var names1 = funcionario.map(nomeFuncionario);
console.log(names1);
