// Promises em JS

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(resolve)
  }, 1000)
  console.log(reject)
})

promise
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error)
  })

function myAsyncFunction(): Promise<string> {
  // deve retornar uma promise<string>
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      const success = true

      if (success) {
        resolve('Success')
      } else {
        const rejectCode: number = 404
        const rejectMessage: string = 'Something gone wrong'
        reject(new Error(rejectMessage))
      }
    }, 1000)
  })
}

// usar a promise

myAsyncFunction()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })

const promise1 = new Promise((resolve, reject) => {
  const functionOne: string = 'This is the first promise function'
  setTimeout(() => {
    resolve(functionOne)
  }, 1000)
})

// Second promise
const promise2 = (data: unknown) => {
  const functionTwo: string = 'This is the second second promise  function'
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` ${data}  '+'  ${functionTwo} `)
    }, 1000)
  })
}

promise1
  .then(promise2)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })

// Agora, vamos brincar com async e await

async function functionName(): Promise<unknown> {
  // Só estou usando unknown por que é um exemplo simples, não precisamos usar tipagem de dados aqui
  try {
    const result = await promise

    return result
  } catch (error) {
    throw error
  }
}

// Arrow function

const functName = async (): Promise<unknown> => {
  try {
    const result = await promise

    return result
  } catch (error) {
    throw error
  }
}
