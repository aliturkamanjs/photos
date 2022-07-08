import { useQuery } from 'react-query'
import { getData } from '../../services'

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
  return <div>PhotoList</div>
}

export default PhotoList
