import Image from 'next/image'
import logo from '../../assets/logo.svg'
import Avatar from '../ui/avatar'
import Button from '../ui/button'
import NavbarList from '../ui/navbarList'

import { BsThreeDots } from 'react-icons/bs'

export const Navigation = () => {
  const items = [
    { name: 'Home', id: 1, href: '/' },
    { name: 'Collections', id: 2 },
    { name: 'Explore', id: 3 },
  ]

  return (
    <div className="flex items-center justify-between pt-3 mx-3">
      <div className="flex items-center relative">
        <Image src={logo} alt="logo" className="" width={24} height={24} />
        <div className="ml-5 mr-2 ">
          <NavbarList items={items} />
        </div>
        <BsThreeDots className="cursor-pointer hidden sm:block" />
      </div>
      <div className="flex items-center justify-between">
        <div className="hidden sm:block">
          <Button
            label="submit a photo"
            size="xs"
            padding="sm"
            outline={false}
          />
        </div>
        <Avatar
          src="https://avatars.githubusercontent.com/u/79016171?s=400&u=23eea2ca6ef0669dd1543b65dc4224d0b2e1d358&v=4"
          name="ali turkmaman"
          border={true}
          size="lg"
        />
      </div>
    </div>
  )
}
