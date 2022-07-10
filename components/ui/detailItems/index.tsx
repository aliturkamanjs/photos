import { memo } from 'react'

interface detailItemProps {
  title?: string
  value?: string
}

const DetailItems = ({ title, value }: detailItemProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="text-sm text-slate-700">{value}</p>
    </div>
  )
}

export default memo(DetailItems)
