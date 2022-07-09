import clsx from 'clsx'
import { memo } from 'react'
import { CgProfile } from 'react-icons/cg'

interface AvatarTypes {
  src?: string
  name?: string
  border?: boolean
}

const Avatar = ({ src, name, border }: AvatarTypes) => {
  return (
    <div
      className={clsx(
        'w-9 h-9 border-slate-900 rounded-full flex items-center justify-center overflow-hidden',
        border ? 'border-[1px] bg-slate-800' : ''
      )}
    >
      {src ? (
        <img src={src} alt={name} />
      ) : (
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </div>
  )
}

export default memo(Avatar)
