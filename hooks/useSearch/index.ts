import { useQuery } from 'react-query'
import { getSearchData } from '../../services'

export const useSearch = (query: string) => {
  return useQuery(['search', query], () => getSearchData(query))
}
