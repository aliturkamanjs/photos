import Masonry from 'react-masonry-css'
import Avatar from '../ui/avatar'

import { HiOutlineDownload } from 'react-icons/hi'

export const Card = ({ data }: any): JSX.Element => {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data?.map((item: any) => {
        console.log(item?.links.download)
        return (
          <div key={item.id} className="relative flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item?.urls?.small} className="rounded-lg w-full" alt="" />
            <div className="flex items-center justify-between absolute bottom-3 rounded-full w-[90%] bg-slate-800 bg-opacity-40 backdrop-blur-md">
              <div className="flex items-center">
                <Avatar src={item?.user?.profile_image.medium} />
                <p className="text-white text-sm ml-3">{item?.user?.name}</p>
              </div>
              <a
                className="flex items-center text-md cursor-pointer justify-center text-slate-50 rounded-full w-9 h-9 "
                download
                title="Download photo"
                target="blank"
                href={item?.links?.download}
              >
                <HiOutlineDownload />
              </a>
            </div>
          </div>
        )
      })}
    </Masonry>
  )
}

// ? every items should be rendered in the component
