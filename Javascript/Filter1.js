
var funcionario = [
    {nome: "Luiz", idade : 62},
    {nome: "Davi", idade : 22},
    {nome: "Arthur", idade : 18},
    {nome: "Lucas", idade : 40},
]

names = funcionario.filter(function(elemento){
    return elemento.nome;
})

console.log(names);

var pessoasListagem = funcionario.filter(
    function(valor){
        console.log(valor.nome);

})

