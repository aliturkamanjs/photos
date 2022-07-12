import Input from './ui/input'

interface HeaderProps {
  setSearchQuery: (query: string) => void
  refetch: () => void
}

interface categoryProps {
  title: string
  id: number
}

export const Header = ({ setSearchQuery, refetch }: HeaderProps) => {
  const categories = [
    { title: 'Nature', id: 1 },
    { title: 'Wallpapers', id: 2 },
    { title: 'Travel', id: 3 },
    { title: 'Minimal', id: 4 },
  ]

  return (
    <div>
      <div className="w-full h-96 my-6 xl:rounded-lg rounded-none flex flex-col items-center justify-around relative overflow-hidden">
        <div className="flex items-center justify-center absolute inset-0 bg-[#18181885] backdrop-blur-lg">
          <div className="h-full flex flex-col w-full sm:w-7/12 px-5 sm:px-0 text-center justify-evenly">
            <div>
              <p className="lg:text-[35px] text-[20px] font-medium text-white">
                The internet’s source of freely-usable images Powered by
                creators everywhere.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </div>
            <div>
              <Input
                placeholder="Search free high-resolution photos"
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  refetch()
                }}
              />
              <div className="flex text-left text-white text-sm mt-2">
                <p className="hidden sm:block">Trending:</p>
                {categories.map((item: categoryProps) => {
                  return (
                    <p
                      onClick={() => setSearchQuery(item?.title)}
                      className="text-slate-300 ml-2 cursor-pointer hidden sm:block"
                      key={item.id}
                    >
                      {item.title} {categories.length - 0 !== item.id && ','}
                    </p>
                  )
                })}
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
