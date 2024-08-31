var produtos = [
    {id: 1, descrição: "SmartPhone", categoria: "Eletronico"},
    {id: 2, descrição: "Notebook", categoria: "Eletronico"},
    {id: 3, descrição: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descrição: "Tablet", categoria: "Eletronico"},
]

// Crie um array pelo filter que escolhe apenas produtos eletronicos.

// função r2 

var r2 = produtos.filter(valor => valor.categoria == "Eletronico");

console.log(r2);

// Função com parametro

function Eletronico (valor) {
    
    return valor.categoria == "Eletronico";

}
var produtoEletronico = produtos.filter(Eletronico);
console.log(produtoEletronico);

//função com parametro dentro do filter

var Eletronicos = produtos.filter(
    function(valor){
        return valor.categoria == "Eletronico";

    }

);
console.log(Eletronicos);
