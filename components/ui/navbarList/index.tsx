import Link from 'next/link'
import { memo } from 'react'

interface NavbarTypes {
  items?: { name: string; id: number; link?: string }[]
}

interface ItemTypes {
  name?: string
  id?: number
  link?: string | undefined
}

const NanbarList = ({ items }: NavbarTypes) => {
  return (
    <ul className="flex sm:space-x-6 space-x-3">
      {items?.map((item: ItemTypes) => (
        <li
          className="cursor-pointer text-[12px] sm:text-[15px] "
          key={item.id}
        >
          <Link href={item?.link ? item?.link : '/'}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default memo(NanbarList)
