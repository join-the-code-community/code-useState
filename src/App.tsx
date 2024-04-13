import { Card } from './component/card/card'
import { Button } from './component/button/button'
import { Navbar } from './component/navbar/narvbar'
import { Container } from './component/container/container'

function App() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row h-full w-full gap-12 py-10">
        <Navbar />
        <div className="max-w-[593px] w-full h-full flex justify-center flex-col items-center mx-auto">
          <h2 className="text-3xl lg:text-[46px] lg:leading-[56px] text-left text-white">
            Eleve seu front-end a outro nível{' '}
            <span className="text-[#F6640A]">
              {' '}
              com um Front-end de qualidade!
            </span>
          </h2>

          <p className="w-full text-white/70 text-base lg:text-2xl text-left lg:leading-[36px] mt-7 mb-5 lg:mt-[56px] lg:mb-[47px]">
            Nesse projeto nosso objetivo foi aprender, o básico do react,
            juntamente com boas práticas de código de qualidade, estilização e
            usa de estados, vem aprender, junte-se a dev community e tenha
            projeto incrivéis em seu portifolio!
          </p>
          <div className="flex justify-between gap-10 lg:gap-20 w-full">
            <Button href="https://www.linkedin.com/in/jonathan-rodrigo/">
              Linkedin
            </Button>
            <Button href="https://github.com/JonathanFerreirar">Github</Button>
          </div>
        </div>
        <div className="h-full w-full flex justify-start lg:justify-end items-center">
          <Card />
        </div>
      </div>
    </Container>
  )
}

export default App
