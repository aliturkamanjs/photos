import { dehydrate, QueryClient, useQuery } from 'react-query'
import { usePhotos } from '../../hooks/usePhotos'
import { getAllData } from '../../services'
import { Card } from './card'

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('photos', () => getAllData())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const PhotoList = (): JSX.Element => {
  const { data } = usePhotos()

  return <Card data={data} />
}

export default PhotoList
