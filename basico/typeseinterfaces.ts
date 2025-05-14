// Interfaces são a mesma coisa que em várias linguagens de programação, são feitas principalmente para abstrair conteúdos

interface Animal {
  name: string
}

interface Bear extends Animal {
  hooney: boolean
}

const bear: Bear = {
  name: 'Josealdo',
  hooney: true,
}

console.log(bear.name)
console.log(bear.hooney)

interface Window1 {
  title: string
}

interface Window1 {
  ts: number
}

const window1: Window1 = {
  // adiciona o tipo se for colocado na frente
  title: 'Qualquer um',
  ts: 1,
}

// Types são praticamente identicos a interfaces, sua unica diferença é que types são imutáveis

// Para tipos herdarem de outros, precisamos user intersections: | ou &
type Animal2 = {
  name: string
}

type Bear2 = Animal2 & {
  hooney: boolean
}

// type Window2 = {
//   title: string
// }

// type Window2 = {
//   ts: number
// }
// // Erro de dupla identificação, como dito anteriormente, tipos são imutáveis, não podendo ser re-abertos para novos tipos.
// //Duplicate identifier 'Window2'.
