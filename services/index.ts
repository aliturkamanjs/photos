import axios from 'axios'

const ACCESS_TOKEN = 'EM1UglZUn0d1etVFCX6hGg2dfPUmai5MTQduC1bHWew'
const client = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_TOKEN}`,
  },
})

const getData = async () => {
  const { data } = await client.get('/photos')
  return data
}

export { getData }
