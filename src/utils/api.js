import axios from 'axios'

export const imageApiUrl = 'https://cdn.rohlik.cz'

export const getResponse = async (url: String, requestParams: any) => {
  console.log('working hard today')
}

export const parseProductsResponse = (data: object) => {
  const responseData = data.data.categories

  return responseData
}

export const parseMessagesResponse = (data: object) => {
  const responseMessages = data

  return responseMessages
}
