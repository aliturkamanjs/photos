import { useQuery } from 'react-query'
import { getProfileData } from '../../services'

export const useProfile = (id: any) => {
  return useQuery(['profile', id], getProfileData, {
    refetchOnWindowFocus: false,
  })
}
