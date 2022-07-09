import { dehydrate, QueryCache, QueryClient, useQuery } from 'react-query'
import { usePhotos } from '../../hooks/usePhotos'
import { getAllData } from '../../services'
import { Skeleton } from '../ui/skeleton'
import { Spinner } from '../ui/spinner'
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
  const { data, isLoading, error } = usePhotos()

  if (isLoading) {
    return (
      <div className="flex items-center my-8">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    )
  }
  if (error) return <div>error - try again</div>

  return <Card data={data} />
}

export default PhotoList
