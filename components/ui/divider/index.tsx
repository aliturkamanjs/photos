import clsx from 'clsx'

interface dividerTypes {
  height?: 'xs' | 'sm' | 'md'
}

export const Divider = ({ height }: dividerTypes): JSX.Element => {
  return (
    <div
      className={clsx(
        'w-ful bg-slate-100 my-4 rounded-xl',

        height === 'xs'
          ? 'h-[.1px]'
          : height === 'sm'
          ? 'h-[1px]'
          : height === 'md'
          ? 'h-[1.5px]'
          : '.5px'
      )}
    ></div>
  )
}
