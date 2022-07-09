import type { NextPage } from 'next'
import { useState } from 'react'
import { useSearch } from '../hooks/useSearch'
import Input from './ui/input'

export const Header: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data } = useSearch(searchQuery === '' ? undefined : searchQuery)

  console.log(data)

  return (
    <div>
      <div className="w-full h-96 my-6 rounded-lg flex flex-col items-center justify-around relative overflow-hidden">
        <div className="flex items-center justify-center absolute inset-0 bg-[#18181885] backdrop-blur-lg">
          <div className="h-full flex flex-col w-7/12 text-center justify-around">
            <div>
              <p className="text-[35px] font-medium text-white">
                The internet’s source of freely-usable images Powered by
                creators everywhere.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </div>
            <div>
              <Input
                placeholder="Search free high-resolution photos"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex text-left text-white text-sm mt-2">
                <p>Trending:</p>
                <p className="text-slate-300 ml-2">
                  flower, wallpaper, sbackgrounds, happy, love
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.osxdaily.com/wp-content/uploads/2022/03/3002.Ribbons_Purple_Dark-820w-1180h-2xipad-scaled.jpg"
          className="w-full h-full"
          alt=""
        />
      </div>
    </div>
  )
}
