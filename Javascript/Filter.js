//numeros par

var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);

console.log(resultado);

//função com parametro dentro do filter

var numerosfiltrados = numeros.filter(
    function(valor){
        return valor > 5;

    }

);
console.log(numerosfiltrados);

// função com parametro

function Maiorque5 (valor) {
    
    return valor > 5;

}
var cincoemdiante = numeros.filter(Maiorque5);
console.log(cincoemdiante);

// função escondida

var r1 = numeros.filter((valor) =>{
    return valor > 5;
});

console.log(r1);

// função r2 
var r2 = numeros.filter(valor => valor > 5);

console.log(r2);

// Objeto

var funcionario = [
    {nome: "Luiz", idade : 62},
    {nome: "Davi", idade : 22},
    {nome: "Arthur", idade : 18},
    {nome: "Lucas", idade : 40},
]

// verificanfo o valor nome 

var pessoasListagem = funcionario.filter(
    function(valor){
        console.log(valor.nome);

})

//verificando pessoas listadas se possue 4 letras.

var pessoasListagem = funcionario.filter(
    function(valor){
        return valor.nome.length < 5;

})

console.log(pessoasListagem);

//verificando se possoe tem 4 letras true or false

var pessoasListagem = funcionario.filter(
    function(valor){
      
        console.log(valor.nome.length < 5);

        
})


//verificando pessoas listadas booleanos no MAP

var pessoasListagem = funcionario.map(
    function(valor){
        return valor.nome.length < 5;

})

console.log(pessoasListagem);