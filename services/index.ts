import axios from 'axios'

const ACCESS_TOKEN = 'EM1UglZUn0d1etVFCX6hGg2dfPUmai5MTQduC1bHWew'
const client = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_TOKEN}`,
  },
})

const getAllData = async () => {
  const { data } = await client.get('/photos')
  return data
}

const getSearchData = async (query: string) => {
  const { data } = await client.get(`/search/photos?page=1&query=${query}`)
  return data
}

export { getAllData, getSearchData }
