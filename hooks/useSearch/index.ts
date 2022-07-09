import { useQuery } from 'react-query'
import { getSearchData } from '../../services'

export const useSearch = (query: any) => {
  return useQuery('search', () => getSearchData(query))
}
