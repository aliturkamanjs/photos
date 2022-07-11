import clsx from 'clsx'
import { memo } from 'react'

interface socialProps {
  name?: string
  icon?: any
}

const SocialItems = ({ name, icon }: socialProps) => {
  return (
    <div
      className={
        (clsx(name !== null ? 'block' : 'hidden'),
        'bg-slate-200 text-slate-800 mr-1 mt-2 p-2 text-lg rounded-lg')
      }
    >
      <a href={name}>{icon}</a>
    </div>
  )
}

export default memo(SocialItems)
