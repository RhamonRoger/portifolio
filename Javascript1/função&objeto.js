// Função construtora
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Adicionando método ao protótipo
Pessoa.prototype.falar = function() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
};

// Criando novas instâncias
const pessoa1 = new Pessoa('Ana', 30);
const pessoa2 = new Pessoa('Carlos', 25);

console.log(pessoa1.falar()); // Olá, meu nome é Ana e tenho 30 anos.
console.log(pessoa2.falar()); // Olá, meu nome é Carlos e tenho 25 anos.
