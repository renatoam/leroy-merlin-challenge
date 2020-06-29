export const fetchProducts = async () => {
  const url = 'https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev/products'
  try {
    // eslint-disable-next-line no-undef
    return await fetch(url).then(response => response.json()).then(json => json)
  } catch (error) {
    throw new Error('Algo deu errado no carregamento dos produtos!')
  }
}

export const fetchFreight = async (freight) => {
  const url = `https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev/freight/${freight}`

  try {
    // eslint-disable-next-line no-undef
    return await fetch(url).then(response => response.json()).then(json => json)
  } catch (error) {
    throw new Error('Algo deu errado no carregamento dos produtos!')
  }
}
