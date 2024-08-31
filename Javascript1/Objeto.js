// 1 -forma de criar objetos ------------------------

const pessoa = {
    nome : 'lucas',
    sobrenome: 'silva'
}

console.log(pessoa['sobrenome'])

// 2 - forma de criar objetos -----------------

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Joana"

console.log(funcionario.nome)
// 3 function -forma de criar objetos -----------------

function criarPessoa(nome,sobrenome){
    return {nome,sobrenome}
}

const p1 = criarPessoa("Arthur", "Silva")
const p2 = criarPessoa("João" , "Silva")

console.log(p1)

console.log(p2)

//-----------------função dentro  do objeto --

function criarPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

console.log(p1.nomeCompleto)


