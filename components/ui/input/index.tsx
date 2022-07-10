import React, { LegacyRef, memo } from 'react'
import { BsSearch } from 'react-icons/bs'

interface InputTypes {
  placeholder?: string
  type?: string
  rest?: any
  ref?: LegacyRef<HTMLInputElement> | undefined
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, type, ref, onChange, ...rest }: InputTypes) => {
  return (
    <div className="relative flex items-center">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        className="p-2 w-full h-9 bg-[#f8fafdae] rounded-lg outline-none font-noraml placeholder:text-slate-800 text-sm"
        {...rest}
      />
      <BsSearch className="absolute right-2" />
    </div>
  )
}

export default memo(Input)
