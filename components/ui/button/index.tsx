import clsx from "clsx"
import { memo } from "react"

interface ButtonTypes {
  label?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  rest?: any
}

const Button = ({ label, size, ...rest }: ButtonTypes) => {
  return (
    <button
      className={clsx(
        "px-3 py-[7px] bg-slate-800 outline-none text-slate-100 rounded-md hover:bg-black mx-3",
        size === "xs"
          ? "text-xs"
          : size === "sm"
          ? "text-sm"
          : size === "md"
          ? "text-md"
          : size === "lg"
          ? "text-lg"
          : size === "xl"
          ? "text-xl"
          : "text-md"
      )}
      {...rest}
    >
      {label}
    </button>
  )
}

export default memo(Button)
