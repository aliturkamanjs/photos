import Masonry from 'react-masonry-css'
import { useQuery } from 'react-query'
import { getData } from '../../services'
import { Card } from './card'

export const getStaticProps = async () => {
  const data = await getData()

  return {
    props: {
      data,
    },
  }
}

const PhotoList = (props: any): JSX.Element => {
  const { data } = useQuery('photos', getData, {
    initialData: props.data,
    refetchOnWindowFocus: false,
  })
  console.log(data)

  return <Card data={data} />
}

export default PhotoList
