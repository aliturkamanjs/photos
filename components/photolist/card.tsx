import Masonry from 'react-masonry-css'
import Avatar from '../ui/avatar'

export const Card = ({ data }: any): JSX.Element => {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data?.map((item: any) => (
        <div key={item.id} className="relative flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item?.urls?.small} className="rounded-lg w-full" alt="" />
          <div className="absolute bottom-3 rounded-full w-[90%] bg-slate-800 bg-opacity-40 backdrop-blur-md">
          <Avatar src={data.user?.profile_image.medium} />
            <p>{data.user?.id}</p>
          </div>
        </div>
      ))}
    </Masonry>
  )
}

// ? every items should be rendered in the component
