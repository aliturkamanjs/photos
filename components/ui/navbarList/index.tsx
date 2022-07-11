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
    <ul className="flex space-x-6">
      {items?.map((item: ItemTypes) => (
        <li className="ml-3 cursor-pointer text-[15px]" key={item.id}>
          <Link href={item?.link ? item?.link : '/'}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default memo(NanbarList)
