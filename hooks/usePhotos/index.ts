import { useQuery } from 'react-query'
import { getAllData } from '../../services'

export const usePhotos = () => {
  return useQuery('photos', getAllData, {
    refetchOnWindowFocus: false,
  })
}
