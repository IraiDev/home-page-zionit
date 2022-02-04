import { routes } from '../types/types'
import LiNav from './LiNav'
import logo from '../assets/logo/logo50x50.png'

const Contact = props => (
  <li className='flex items-center gap-3 text-sm'>
    <i className={props.icon} />
    {props.children}
  </li>
)

const Nav = () => {
  return (
    <nav className='w-full bg-white px-10 shadow-md'>
      <header className='flex items-center justify-between gap-2 h-16 text-black/40 border-b'>
        <div className='w-36'>
          <img className='h-10 w-10' src={logo} alt='logo' />
        </div>
        <div className='flex items-baseline gap-3 py-2.5 px-6 bg-zinc-100 rounded-lg w-[400px]'>
          <i className='fas fa-search' />
          <input
            className='bg-transparent outline-none min-w-full text-lg'
            type='text'
            placeholder='Buscar'
          />
        </div>
        {/* <div className='flex gap-4 items-center'>
          <i className='fas fa-bell' />
          <i className='fas fa-user-circle fa-2x' />
        </div> */}
        <ul>
          <Contact icon='far fa-envelope'>contacto@zionit.cl</Contact>
          <Contact icon='fas fa-phone-alt'>+56 43 2314334</Contact>
        </ul>
      </header>
      <footer className='h-14 flex items-center justify-between'>
        <ul className='flex gap-6'>
          <LiNav to={routes.home} name='Inicio' />
          <LiNav to={routes.system} name='Sistemas' />
        </ul>
      </footer>
    </nav>
  )
}

export default Nav
