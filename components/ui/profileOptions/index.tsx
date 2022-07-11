import clsx from 'clsx'

interface OptionsProps {
  label: string
  Icon: any
  color: string
}

export default function ProfileOptions({ Icon, label, color }: OptionsProps) {
  return (
    <div className={clsx('flex items-center mt-1', color)}>
      <Icon className="mr-2 text text-base" />
      {label}
    </div>
  )
}
