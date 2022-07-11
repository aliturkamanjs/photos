import axios from 'axios'

const ACCESS_TOKEN = 'EM1UglZUn0d1etVFCX6hGg2dfPUmai5MTQduC1bHWew'
const client = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_TOKEN}`,
  },
})

const getAllData = async () => {
  const { data } = await client.get('/photos?page=1&per_page=30')
  return data
}

const getSearchData = async (query: string) => {
  const { data } = await client.get(
    `/search/photos?page=1&per_page=30&query=${query}`
  )
  return data
}

const getProfileData = async (username: any) => {
  const { data } = await client.get(`/users/${username?.queryKey[1]}`)
  return data
}

export { getAllData, getSearchData, getProfileData }
