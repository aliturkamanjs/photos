import { useEffect, useState } from 'react'
import {
  dehydrate,
  MutationCache,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { usePhotos } from '../../hooks/usePhotos'
import { getAllData } from '../../services'
import { Skeleton } from '../ui/skeleton'
import { Card } from './card'

interface dataTypes {
  data: { total: number; total_pages: number; results: [] }
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('photos', () => getAllData())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const PhotoList = ({ data }: dataTypes): JSX.Element => {
  const { data: photos, isLoading, error } = usePhotos()

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

  return <Card data={data?.results} />
}

export default PhotoList
