const Skeleton = (): JSX.Element => {
  return (
    <div className="shadow rounded-xl sm:w-[415px] w-full mx-auto mb-5 sm:mb-0 my-4">
      <div className="animate-pulse flex">
        <div className="flex-1">
          <div className="h-64 bg-slate-200 rounded relative">
            <div className="h-9 bg-slate-300 rounded-full absolute bottom-3 right-3 left-3 flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <div className="bg-slate-400 rounded-full w-9 h-9"></div>
                <div className="bg-slate-400 rounded-lg w-16 h-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileSkeleton = (): JSX.Element => {
  return (
    <div className="shadow rounded-xl w-full">
      <div className="animate-pulse flex p-4 m-4">
        <div className="flex-col sm:flex-row md:flex lg:flex xl:flex w-full justify-between">
          <div className="flex ">
            <div className="w-40 h-40 bg-slate-200 mr-4 rounded-3xl"></div>
            <div className="flex flex-col">
              <div className="w-28 h-6 bg-slate-200 rounded-full"></div>
              <div className="w-9 h-4 bg-slate-200 rounded-full mt-4"></div>
              <div className="w-20 h-4 bg-slate-200 rounded-full mt-4"></div>
              <div className="flex mt-9">
                <div className="w-20 h-8 bg-slate-200 rounded-lg"></div>
                <div className="w-20 h-8 bg-slate-200 rounded-lg ml-4"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-28 h-4 bg-slate-200 rounded-full mt-5 sm:mt-0"></div>
            <div className="w-20 h-4 bg-slate-200 rounded-full mt-4"></div>
            <div className="flex flex-wrap w-44 justify-start">
              <div className="w-20 h-6 bg-slate-200 rounded-md mt-4 mr-2"></div>
              <div className="w-20 h-6 bg-slate-200 rounded-md mt-4 mr-2"></div>
              <div className="w-20 h-6 bg-slate-200 rounded-md mt-4 mr-2"></div>
            </div>
            <div className="flex">
              <div className="w-7 h-7 bg-slate-200 rounded-md mt-4 mr-2"></div>
              <div className="w-7 h-7 bg-slate-200 rounded-md mt-4 mr-2"></div>
              <div className="w-7 h-7 bg-slate-200 rounded-md mt-4 mr-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Skeleton, ProfileSkeleton }
