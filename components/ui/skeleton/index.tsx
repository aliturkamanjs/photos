export const Skeleton = (): JSX.Element => {
  return (
    <div className="shadow rounded-xl max-w-sm w-full mx-auto">
      <div className="animate-pulse flex">
        <div className="flex-1">
          <div className="h-64 bg-slate-200 rounded relative">
            <div className="h-9 bg-slate-300 rounded-full absolute bottom-3 right-3 left-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
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
