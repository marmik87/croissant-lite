//Flow

export const imageApiUrl =
  'https://www.rohlik.cz/cdn-cgi/image/f=auto,w=300,h=300/https://cdn.rohlik.cz'

export const parseProductsResponse = (response: object) => {
  const responseData = response.data.data.categories

  return responseData
}

export const parseMessagesResponse = (data: object) => {
  const responseMessages = data

  return responseMessages
}
