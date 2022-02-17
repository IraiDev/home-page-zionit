import { routes } from '../types/types'
import LiNav from './LiNav'
import logo from '../assets/logo/logo50x50.png'

const Contact = props => (
   <li className='flex items-center gap-3 text-sm'>
      <i className={props.icon} />
      {props.children}
   </li>
)

const SearchBar = props => (
   <div className='flex items-baseline gap-3 py-2.5 px-6 bg-zinc-100/10 rounded-full w-[400px]'>
      <i className='fas fa-search text-white/60' />
      <input
         className='bg-transparent outline-none min-w-full text-lg'
         type='text'
         placeholder='Buscar'
      />
   </div>
)

const NavSection = props => (
   <section className='flex items-center justify-between gap-2 h-16'>
      {props.children}
   </section>
)

const Nav = () => {
   return (
      <nav className='w-full bg-transparent px-10 z-30 sticky top-0 text-white'>
         <NavSection>
            <div className='flex items-center gap-4'>
               <img className='h-10 w-10' src={logo} alt='logo' />
               Zionit
            </div>
            <SearchBar />
            <ul>
               <Contact icon='far fa-envelope'>contacto@zionit.cl</Contact>
               <Contact icon='fas fa-phone-alt'>+56 43 2314334</Contact>
            </ul>
         </NavSection>

         <NavSection>
            <ul className='flex gap-2'>
               <LiNav to={routes.home} name='Inicio' />
               <LiNav to={routes.system} name='Sistemas' />
            </ul>
         </NavSection>
      </nav>
   )
}

export default Nav
