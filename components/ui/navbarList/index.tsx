import { memo } from "react"

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
    <ul className="flex">
      {items?.map((item: ItemTypes) => (
        <li className="mx-2 cursor-pointer text-[15px]" key={item.id}>
          <a href={item.link ? item.link : "#"}>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default memo(NanbarList)
