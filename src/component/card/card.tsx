import { useState } from 'react'

export const Card = () => {
  const [username, setUsername] = useState('username')

  if (!username) {
    setUsername('username')
  }
  return (
    <div className="md:max-w-[582px] w-full bg-[#1E1D1D] rounded-[8px] lg:min-h-[609px] h-auto px-2 lg:px-[50px] pb-10 lg:pb-0 mx-auto">
      <div className="flex flex-col gap-2  items-start pt-6">
        <span
          aria-label="nome do usuário"
          className="text-[#FFFDFD]  text-xl lg:text-[36px] lg:leading-[44px] truncate max-w-full"
        >
          {username}
        </span>
        <span className="text-[#FFFDFD] text-base lg:text-2xl lg:leading-[36px]">
          {'<Code seus Sonhos  />'}
        </span>
      </div>

      <p className="text-white font-semibold text-base max-[600px]:leading-[30px] lg:text-2xl  lg:max-w-[449px] w-full pt-8 lg:pt-[62px]">
        Venha fazer parte de um ambiente incrível, onde você poderá tirar todas
        as suas dúvidas e ainda por cima aprender{' '}
        <span className="text-[#F6640A]">tópicos avançados</span>, como Testes,
        Documentações,{' '}
        <span className="text-[#F6640A]">
          Melhores Práticas de Desenvolvimento
        </span>
        , SEO,
        <span className="text-[#F6640A]">Gerenciamento de Estado</span> e muitos
        outros assuntos!
      </p>

      <input
        placeholder="Digite seu nome"
        onChange={(e) => setUsername(e.target.value)}
        className="bg-[#DEDEDE] px-[10px] py-[8px] w-full max-w-[449px] placeholder:text-[#6B6B6B] mt-8 lg:mt-[62px] rounded-[4px]"
      />
    </div>
  )
}
