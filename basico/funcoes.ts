function greet(name: string) {
  // funções sem retorno específico
  console.log('Hello' + name)
}

function retornarNumero(): number {
  // retorna um dado do tipo number
  return 25
}

async function getFavoriteNumber(): Promise<number> {
  // Promises e async functions irei falar sobre dentro de uma classe própria
  return 26
}

// Funções anonimas

const names = ['Carlos', 'Pedro', 'Davi']

names.forEach(function (s) {
  // o s dentro da função é os itens dentro de names
  console.log(s.toUpperCase)
})

names.forEach((s) => {
  console.log(s) // idem
})

// funções com objetos

// Type exemplo para a função
// type Point = {
//   x: number
//   y: number
// }

// Conseguimos criar o type dentro da própria função
function returnCoord(Point: { x: number; y: number }): number {
  return Point.x, Point.y
}

const returnCoord2 = (Point: { x: number; y: number }): number => {
  return Point.x, Point.y
}

// Funções com objetos tendo propriedades opcionais

function printName(obj: { firstName: string; lastName?: string }) {
  if (obj.lastName != undefined) {
    console.log(obj.firstName + obj.lastName)
  }

  console.log(obj.firstName)
}

// Union Types

function printId(id: number | string) {
  console.log(id)
}

printId(1)
printId('2') // ambos estarão corretos

function printTextNumberOrBool(x: string | number | boolean) {
  console.log(x)
}

// Type aliases

// Note que types podem ser qualquer coisa que a gente queira

type Point = {
  x: number
  y: number
}

type TextoOuNumero = string | number

type ID = number | string

function printCoord(pt: Point) {
  console.log(pt.x, pt.y)
}

const printCoord2 = (pt: Point) => {
  console.log(pt.x, pt.y)
}

printCoord({ x: 100, y: 200 })
