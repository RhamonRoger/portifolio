class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criação de instâncias e chamada dos métodos

// Instância de Gerente
const gerente = new Gerente('Carlos', 45, 'Gerente de Projeto', 'TI');
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

// Instância de Desenvolvedor
const desenvolvedor = new Desenvolvedor('Ana', 30, 'Desenvolvedora Front-end', 'JavaScript');
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();