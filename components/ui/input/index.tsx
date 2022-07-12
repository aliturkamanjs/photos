import React, { LegacyRef, memo } from 'react'
import { BsSearch } from 'react-icons/bs'

interface InputTypes {
  placeholder?: string
  type?: string
  ref?: LegacyRef<HTMLInputElement> | undefined
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, type, ref, onChange }: InputTypes) => {
  return (
    <div className="relative flex items-center">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        className="p-2 w-full h-9 bg-[#f8fafdae] sm:text-sm rounded-lg outline-none font-noraml placeholder:text-slate-800 text-xs"
      />
      <BsSearch className="absolute right-2 hidden sm:block" />
    </div>
  )
}

export default memo(Input)
