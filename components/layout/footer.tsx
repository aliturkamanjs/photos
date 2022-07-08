import Image from "next/image"

import logo from "../../assets/logo.svg"
import NavbarList from "../ui/navbarList"

export const Footer = () => {
  const items = [
    { name: "Collections", id: 1 },
    { name: "Explore", id: 2 },
    { name: "Github", id: 3, link: "https://github.com/MoltyCode" },
  ]

  return (
    <div className="flex justify-between items-center px-3">
      <div className="flex items-center">
        <Image
          alt="logo"
          src={logo}
          className=""
          width={27}
          height={27}
        />
        <a
          href="https://github.com/MoltyCode"
          className="text-[14px] ml-4"
        >
          Powerd by Moltycode Team
        </a>
      </div>
      <div>
        <NavbarList items={items} />
      </div>
    </div>
  )
}
