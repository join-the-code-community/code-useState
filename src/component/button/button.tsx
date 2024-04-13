import { ComponentProps, ReactNode } from 'react'

type buttonProps = ComponentProps<'a'> & {
  children: ReactNode
}

export const Button = ({ children, ...props }: buttonProps) => {
  return (
    <a
      {...props}
      target="_blank"
      className="px-5 py-3 bg-[#F6640A] w-full text-white/70 hover:text-white rounded-[4px] font-bold text-center cursor-pointer"
    >
      {children}
    </a>
  )
}
