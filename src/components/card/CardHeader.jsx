import logo from '../../assets/logo/logo25x25.png'

const CardHeader = ({ title }) => {
   return (
      <header className='flex justify-between gap-2 items-center border-b border-zinc-200 pb-2'>
         <h1 className='capitalize font-semibold'>{title}</h1>
         <img src={logo} alt='logo-card' />
      </header>
   )
}

export default CardHeader
