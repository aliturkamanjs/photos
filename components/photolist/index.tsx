import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { dehydrate, QueryClient } from 'react-query'
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
  const [allData, setAllData] = useState<[]>([])
  const {
    data: photos,
    isLoading,
    error,
    refetch,
  }: usePhotosProps = usePhotos()

  useEffect(() => {
    if (data?.results.length > 0) {
      setAllData(data?.results)
    } else {
      setAllData(photos)
    }
  }, [data, photos])

  if (isLoading) {
    return (
      <div className="flex-col md:space-x-4 sm:flex-row md:flex lg:flex xl:flex items my-8 ">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    )
  }
  if (error) {
    toast.error(`${error.message}`, {
      duration: 7000,
      position: 'bottom-center',
    })
  }

  return (
    <>
      <Toaster />
      {error ? (
        <div className="flex flex-col items-center justify-center h-[150px]">
          <h1 className="mb-6 text-xl">{error.message}</h1>
          <button
            className="px-4 py-2 text-sm bg-black text-slate-50 rounded-lg"
            onClick={() => refetch()}
          >
            try again
          </button>
        </div>
      ) : (
        <Card data={allData} />
      )}
    </>
  )
}

export default PhotoList
