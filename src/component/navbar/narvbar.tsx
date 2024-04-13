import Logo from '../../assets/logo.png'

export const Navbar = () => {
  return (
    <div className="flex w-[300px] gap-1 items-center lg:fixed top-5 max-[1000px]:mx-auto">
      <img src={Logo} className="w-[80px] h-[60px]" alt="Logo Code Community" />
      <h1 className="lg:text-2xl lg:leading-[44px] text-white/70">
        Code Community
      </h1>
    </div>
  )
}
