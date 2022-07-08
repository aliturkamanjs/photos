import { memo } from "react"

interface AvatarTypes {
  src?: string
  name?: string
}

const Avatar = ({ src, name }: AvatarTypes) => {
  return (
    <div className="w-9 h-9 border-slate-900 border-[1px]  rounded-full bg-sky-300 flex items-center justify-center overflow-hidden">
      {src ? <img src={src} alt={name} /> : name}
    </div>
  )
}

export default memo(Avatar)
