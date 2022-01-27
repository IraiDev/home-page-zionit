import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { routes } from '../types/types'
import LiNav from './LiNav'
import logo from '../assets/logo/logo25x25.png'

const CustomLi = props => (
  <li className='flex items-center gap-3 text-black/50 text-sm'>
    <i className={props.icon} />
    {props.children}
  </li>
)

export const NavBar = () => {
  const navigate = useNavigate()
  const { logout } = useContext(AppContext)

  const handleLogout = () => {
    logout()
    navigate(routes.login, { replace: true })
  }

  return (
    <nav className='bg-white h-16 shadow-md px-5 sticky top-0 flex items-center justify-between'>
      <label
        className='flex items-center gap-2 font-semibold font-sans text-xl text-slate-800 
        cursor-pointer transition duration-100 transform hover:scale-110'
        onClick={() => navigate(routes.home)}
      >
        ZionIT
        <img id='logo' src={logo} alt='' />
      </label>
      <ul className='flex items-center justify-center'>
        <LiNav to={routes.home} name='Inicio' />
        <LiNav to={routes.system} name='sistemas' />
        <LiNav to={routes.about} name='Acerba de' />
      </ul>
      <ul>
        <CustomLi icon='far fa-envelope'>contacto@zionit.cl</CustomLi>
        <CustomLi icon='fas fa-phone-alt'>+56 43 2314334</CustomLi>
      </ul>
    </nav>
  )
}
