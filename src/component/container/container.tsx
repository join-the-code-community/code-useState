import { ComponentProps } from 'react'

type containerProps = ComponentProps<'div'> & {
  children: JSX.Element
}

export const Container = ({ children, ...props }: containerProps) => {
  return (
    <div
      {...props}
      className="max-w-[1920px] px-4 lg:px-[203px] flex justify-between w-screen max-[600px]:min-h-screen lg:h-screen bg-[#04001E]"
    >
      {children}
    </div>
  )
}
