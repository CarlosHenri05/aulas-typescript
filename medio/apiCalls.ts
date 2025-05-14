interface User {
  id: number
  name: string
  email: string
}

const fetchApi = async (): Promise<void> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') // vai consumir dados dessa api específica

    if (!response.ok) {
      throw new Error(`Failed because ${response.status}`)
    }
    const data: User[] = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
    throw error
  }
}

fetchApi()

// Conseguimos usar a lib Axios (mais fácil) para consumir API's também
