import Masonry from 'react-masonry-css'
import Avatar from '../ui/avatar'
import clsx from 'clsx'
import Modal from '../ui/modal'

import { useEffect, useState } from 'react'

import { HiOutlineDownload } from 'react-icons/hi'
import { RiMapPinLine } from 'react-icons/ri'
import { MdOutlineGppGood } from 'react-icons/md'
import { BsCalendarDate } from 'react-icons/bs'

import Divider from '../ui/divider'
import moment from 'moment'
import DetailItems from '../ui/detailItems'
import Link from 'next/link'

export const Card = ({ data }: dataProps): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [itemDetailValue, setItemDetailValue] = useState<any>([])
  const [getId, setId] = useState<string | undefined>('')
  const [windowWidth, setWindowWidth] = useState<number>(0)
  let getWidth = window.innerWidth

  useEffect(() => {
    const filterdData = data?.filter((item: itemProps) => item.id === getId)
    setItemDetailValue(filterdData?.[0])
  }, [getId])

  useEffect(() => {
    if (getWidth > 768) {
      setWindowWidth(3)
    } else if (getWidth > 476) {
      setWindowWidth(2)
    } else {
      setWindowWidth(1)
    }
  }, [getWidth])

  window.addEventListener('resize', () => {
    if (getWidth > 768) {
      setWindowWidth(3)
    } else if (getWidth > 476) {
      setWindowWidth(2)
    } else {
      setWindowWidth(1)
    }
  })

  return (
    <Masonry
      breakpointCols={windowWidth}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <Modal isOpen={isOpenModal} setIsOpenModal={setIsOpenModal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={itemDetailValue?.urls?.regular}
          loading="lazy"
          className={clsx(
            'rounded-xl mx-auto',
            itemDetailValue?.height <= 5000 && itemDetailValue?.width >= 5000
              ? 'w-full'
              : 'w-80'
          )}
          alt=""
        />
        <div className="flex items-center justify-between pt-5">
          <Link href={`/profile/${itemDetailValue?.user?.username}`}>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              title="View Profile"
            >
              <Avatar
                src={itemDetailValue?.user?.profile_image?.medium}
                size="2xl"
              />
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {itemDetailValue?.user?.name}
                </h3>
                <p className="text-sm text-slate-600 font-light">
                  @{itemDetailValue?.user?.username}
                </p>
              </div>
            </div>
          </Link>
          <a
            className="outline-none hidden sm:block"
            download
            title="Download photo"
            target="blank"
            href={itemDetailValue?.links?.download}
          >
            <HiOutlineDownload className="text-3xl text-slate-600" />
          </a>
        </div>
        <p
          className={clsx(
            'text-sm pt-4 text-slate-600',
            itemDetailValue?.description ? 'block' : 'hidden'
          )}
        >
          {itemDetailValue?.description}
        </p>
        <div className="mt-4 flex flex-col space-y-3">
          <div
            className={clsx(
              'flex items-center space-x-2 text-sm text-slate-600 font-normal',
              itemDetailValue?.user?.location ? 'block' : 'hidden'
            )}
          >
            <RiMapPinLine className="text-lg" />
            <p>{itemDetailValue?.user?.location}</p>
          </div>

          <div className="flex items-center space-x-2 text-sm text-slate-600 font-normal">
            <BsCalendarDate className="text-md" />
            <p>
              Published{' '}
              {moment(itemDetailValue?.created_at, 'YYYYMMDD').fromNow()}
            </p>
          </div>

          <div className="flex items-center space-x-2 text-sm text-slate-600 font-normal">
            <MdOutlineGppGood className="text-lg" />
            <p>
              Free to use under the{' '}
              <a
                className="hover:underline hover:text-slate-700"
                href="https://unsplash.com/license"
                target="blank"
              >
                Unsplash License
              </a>
            </p>
          </div>
        </div>
        <Divider height="xs" />
        <div className="flex items-center justify-around">
          <DetailItems title="Likes" value={itemDetailValue?.likes} />
          <DetailItems title="Color" value={itemDetailValue?.color} />
          <DetailItems title="Featured in" value="Editorial" />
        </div>
      </Modal>
      {data?.map((item: any) => {
        return (
          <div
            style={{ minHeight: '200px' }}
            key={item?.id}
            className="relative flex justify-center overflow-hidden group shadow-lg min-h-fit bg-slate-200 rounded-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item?.urls?.small}
              className="w-full cursor-zoom-in"
              alt="image"
              loading="lazy"
              onClick={() => {
                setIsOpenModal(true)
                setId(item?.id)
              }}
            />
            <div className="flex z-10 group-hover:translate-y-0 group-hover:delay-200 transition translate-y-20 items-center justify-between absolute bottom-3 rounded-full w-[90%] bg-slate-800 bg-opacity-40 backdrop-blur-md">
              <Link href={`/profile/${item?.user?.username}`}>
                <div className="flex items-center cursor-pointer">
                  <Avatar src={item?.user?.profile_image?.medium} />
                  <p className="text-white text-sm ml-3">{item?.user?.name}</p>
                </div>
              </Link>
              <a
                className="hidden sm:flex items-center text-md cursor-pointer justify-center text-slate-50 rounded-full w-9 h-9 "
                download
                title="Download photo"
                target="blank"
                href={item?.links?.download}
              >
                <HiOutlineDownload />
              </a>
            </div>
            <span className="absolute bg-black group-hover:translate-y-0 group-hover:delay-200 transition translate-y-20 right-0 left-0 bottom-0 blur-3xl opacity-50 h-16"></span>
          </div>
        )
      })}
    </Masonry>
  )
}
