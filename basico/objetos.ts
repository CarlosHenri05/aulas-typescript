class Pessoa {
  /*private*/ nome: string // Atributos private são pertencentes somente a classe, igualmente em Java
  /* public*/ idade: number // Se for public todas as classes poderão interagir 
  email?: string

  setNome = (nome: string) => {
    this.nome = nome
  }

  setIdade = (idade: number) => {
    this.idade = idade
  }

  getName = () => {
    return this.nome
  }

  getIdade = () => {
    return this.idade
  }

  Pessoa(nome: string, idade: number, email?: string) {
    this.nome = nome
    this.idade = idade
    this.email = email
  }
}

const pessoa = new Pessoa()

// Esse objeto vai ter as propriedades da classe Pessoa
