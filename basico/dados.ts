// Tipos de dados primitivos

let numero: number = 1 // Engloba double, float e int

let text: string = 'Texto aqui'

let trueorfalse: boolean = true

// Arrays

const numeros: number[] = [1, 2, 3, 4, 5]
const textos: string[] = ['Um', 'Dois', 'Três']
const booleans: boolean[] = [true, false, true, true]

// tuplas

const tudoJunto: [number, string, boolean] = [1, 'asdasd', true] // precisamos sempre seguir a ordem

const numerosetextos: [number, string][] = [
  // lista de tuplas
  [1, 'Carlos'],
  [2, 'Pedro'],
]

// Enums

// São usados como constantes, igualmente em qualquer linguagem de programação.
enum Constantes {
  TEXTO1,
  TEXTO2,
  TEXTO3,
}
