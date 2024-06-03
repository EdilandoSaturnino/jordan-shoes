import logo from '../assets/img/logo.svg'

export function Header() {
  return (
    <header>
      <p className='text-dark-10 bg-dark-20 text-center py-[19px] text-2xl'>Frete grátis para todo o Brasil</p>
      <div className='bg-hero-bg bg-no-repeat bg-cover w-full h-[400px]'>
        <div className='mx-auto max-w-1xl my-auto h-full flex items-center'>
          <div className='max-w-[557px] gap-10 flex flex-col'>
            <img src={logo} alt='Logo da página' width={203} height={48} />
            <div className='gap-5 flex flex-col'>
              <h2 className='text-dark-30 text-[32px] font-medium'>A melhor loja de Jordan</h2>
              <h2 className='text-dark-30 text-2xl'>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
