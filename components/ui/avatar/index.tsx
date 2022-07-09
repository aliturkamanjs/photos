import { memo } from 'react'
import { CgProfile } from 'react-icons/cg'

interface AvatarTypes {
  src?: string
  name?: string
}

const Avatar = ({ src, name }: AvatarTypes) => {
  return (
    <div className="w-9 h-9 border-slate-900 border-[1px]  rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
      {src ? (
        <img src={src} alt={name} />
      ) : (
        <CgProfile className="w-full h-full text-slate-400" />
      )}
    </div>
  )
}

export default memo(Avatar)
