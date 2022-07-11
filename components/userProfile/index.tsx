/* eslint-disable @next/next/no-img-element */
import Button from '../../components/ui/button'
import ProfileOptions from '../../components/ui/profileOptions'
import clsx from 'clsx'
import { RiPaypalFill } from 'react-icons/ri'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlinePhotoLibrary, MdVerified } from 'react-icons/md'
import Masonry from 'react-masonry-css'
import { Divider } from '../ui/divider'

export function UserProfile({ user }: userProps) {
  return (
    <div className="w-full flex flex-col ">
      <div className="flex justify-between">
        <div className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user?.profile_image?.large}
            alt=""
            className="w-48 h-48 rounded-[45px] object-cover mr-4"
          />
          <div className="pl-1 w-4/6">
            <h1 className="text-4xl font-semibold">
              {user?.first_name} {` `} {user?.last_name}
            </h1>
            <p className="mt-2 text-slate-500">@{user?.username}</p>
            <p className="my-3 text-slate-500 text-sm">{user?.bio}</p>
            <Button label="Follow" size="xs" padding="md" outline={false} />
            <Button label="Message" size="xs" padding="md" outline={true} />
          </div>
        </div>
        <div className="w-[25%] flex flex-col items-end">
          <div>
            {user?.for_hire ? (
              <ProfileOptions
                Icon={MdVerified}
                label="Available for hire"
                color="text-blue-500"
              />
            ) : (
              ''
            )}
            {user?.location ? (
              <ProfileOptions
                Icon={HiOutlineLocationMarker}
                label={user?.location}
                color="text-slate-600"
              />
            ) : (
              ''
            )}
            {user?.tags?.custom.length ? (
              <ProfileOptions
                Icon={MdOutlinePhotoLibrary}
                label="Interests"
                color="text-slate-600"
              />
            ) : null}
            <div className="flex flex-wrap cursor-pointer">
              {user?.tags?.custom.map((item: tagProps) => (
                <div
                  key={item?.title}
                  className="text-xs bg-slate-200 rounded-md text-slate-700 py-1 px-4 mr-2 mt-2 border"
                >
                  <p>{item?.title}</p>
                </div>
              ))}
            </div>
            <div className="flex">
              <div
                className={clsx(
                  user?.social?.instagram_username ? 'block' : 'hidden',
                  'bg-slate-200 text-slate-800 mr-1 mt-2 p-2 text-lg rounded-lg'
                )}
              >
                <a
                  target="blank"
                  href={`https://www.instagram.com/${user?.social?.instagram_username}`}
                >
                  <BsInstagram />
                </a>
              </div>
              <div
                className={clsx(
                  user?.social?.paypal_email ? 'block' : 'hidden',
                  'bg-slate-200 text-slate-800 mr-1 mt-2 p-2 text-lg rounded-lg'
                )}
              >
                <a target="blank" href={user?.social?.paypal_email}>
                  <RiPaypalFill />
                </a>
              </div>
              <div
                className={clsx(
                  user?.social?.portfolio_url ? 'block' : 'hidden',
                  'bg-slate-200 text-slate-800 mr-1 mt-2 p-2 text-lg rounded-lg'
                )}
              >
                <a target="blank" href={user?.social?.portfolio_url}>
                  <GiEarthAmerica />
                </a>
              </div>
              <div
                className={clsx(
                  user?.social?.twitter_username ? 'block' : 'hidden',
                  'bg-slate-200 text-slate-800 mr-1 mt-2 p-2 text-lg rounded-lg'
                )}
              >
                <a
                  target="blank"
                  href={`https://twitter.com/${user?.social?.twitter_username}`}
                >
                  <BsTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Divider height="xs" />
      </div>
      <div className="mt-4">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {user?.photos?.map((item: photosProps) => {
            return (
              <div className="flex items-center justify-between" key={item.id}>
                <img
                  src={item?.urls?.regular}
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
            )
          })}
        </Masonry>
      </div>
    </div>
  )
}
