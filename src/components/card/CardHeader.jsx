import logo from '../../assets/logo/logo25x25.png'

const DevTag = () => (
   <span className='bg-red-200/70 text-red-400 font-semibold rounded-lg px-1 text-xs absolute top-1 left-6'>
      Dev
   </span>
)

const CardHeader = ({ title, isDev = false }) => {
   return (
      <header className='flex justify-between gap-2 items-center border-b border-zinc-200 pb-2'>
         <h1 className='capitalize font-semibold'>{title}</h1>
         <dir className='relative'>
            <img src={logo} alt='logo-card' />
            {isDev && <DevTag />}
         </dir>
      </header>
   )
}

export default CardHeader
